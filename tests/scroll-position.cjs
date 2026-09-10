// Optional development test; no dependency is added to the standalone app.
// Run with Playwright available through NODE_PATH:
//   node tests/scroll-position.cjs [chromium|webkit]
// AXE_PATH may point to an external axe-core bundle for the accessibility check.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const playwright = require('playwright');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const script = html.match(/^    <script>\n([\s\S]*?)^    <\/script>/m)[1];
assert.equal(spawnSync(process.execPath, ['--check'], { input: script }).status, 0, 'Application syntax');
assert.ok(html.includes("connect-src 'none'"));
for (const name of ['node_modules', 'package.json', 'package-lock.json']) assert.ok(!fs.existsSync(path.join(root, name)));

const fixture = Array.from({ length: 36 }, (_, chapter) =>
    `# Chapter ${chapter}. Foundations for image-based estimation\n\n` +
    Array.from({ length: 12 }, (_, paragraph) =>
        `**Objectives.** Paragraph ${chapter}-${paragraph}: ` +
        `Methods for [solar estimation](https://example.invalid/) include $x^2$ and **measurements**. ` +
        (`Results-${chapter}-${paragraph} explain surface irradiance and cloud motion. `).repeat(22)
    ).join('\n\n') + '\n\n'
).join('');

async function main() {
    const engine = process.argv[2] || 'chromium';
    const browser = await playwright[engine].launch({ headless: true, ...(engine === 'chromium' ? { channel: 'chrome' } : {}) });
    try {
        const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
        const errors = [], requests = [], blockedRequests = [], outboundRequests = [];
        page.on('pageerror', error => errors.push(error.message));
        await page.route('http://localhost:8765/', route => route.fulfill({ contentType: 'text/html', body: html }));
        await page.goto('http://localhost:8765/');
        page.on('request', request => { if (/^https?:/.test(request.url())) requests.push(request.url()); });
        page.on('requestfailed', request => {
            const error = request.failure()?.errorText;
            if (error === 'net::ERR_BLOCKED_BY_CSP' || error === 'csp') blockedRequests.push(request.url());
        });
        await page.route(/^https:\/\//, route => { outboundRequests.push(route.request().url()); return route.abort(); });
        const settle = () => page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
        const toggle = async () => { await page.locator('#editToggleBtn').click(); await settle(); };
        const load = async source => {
            await page.evaluate(async source => { await loadFileFromHandle(new File([source], 'regression.md'), 'regression.md'); }, source);
            await settle();
        };
        await load(fixture);
        for (const width of [1920, 1280, 2560, 820, 390]) {
            await page.setViewportSize({ width, height: 1000 });
            // Same passage with the Notes panel open on desktop.
            await page.evaluate(width => {
                if ((width >= 1280) !== document.body.classList.contains('panel-open')) togglePanel();
                document.documentElement.style.setProperty('--reader-scale', width === 2560 ? '1.4' : '1');
            }, width);
            await settle();
            await page.evaluate(() => {
                const h = content.querySelectorAll('h1')[20];
                content.scrollTop += h.getBoundingClientRect().top - content.getBoundingClientRect().top - 20;
            });
            const before = await page.evaluate(() => content.scrollTop);
            for (let i = 0; i < 3; i++) {
                await toggle();
                const source = await page.evaluate(() => editor.value.slice(editor.selectionStart, editor.selectionStart + 48));
                assert.match(source, /^Chapter 20\./, `Correct section in Edit at ${width}px`);
                await toggle();
                assert.ok(Math.abs(await page.evaluate(() => content.scrollTop) - before) < 2, `No round-trip drift at ${width}px`);
            }
            // Start partway down a formatted, wrapped paragraph.
            await page.evaluate(() => {
                const p = content.querySelectorAll('p')[245];
                content.scrollTop += p.getBoundingClientRect().top - content.getBoundingClientRect().top + 130;
            });
            const middle = await page.evaluate(() => content.scrollTop);
            await toggle();
            const caret = await page.evaluate(() => editor.selectionStart);
            const start = fixture.indexOf('**Objectives.** Paragraph 20-5:');
            const end = fixture.indexOf('**Objectives.** Paragraph 20-6:');
            assert.ok(caret >= start && caret < end, `Formatted paragraph at ${width}px`);
            await toggle();
            assert.ok(Math.abs(await page.evaluate(() => content.scrollTop) - middle) < 2);
            // Native caret navigation scrolls to chapter 28. Then scroll farther
            // without moving the caret; Done must follow the viewport.
            await toggle();
            await page.evaluate(() => { const i = editor.value.indexOf('Paragraph 28-5:'); editor.setSelectionRange(i, i); });
            await page.locator('#editor').press('ArrowRight');
            await page.evaluate(() => { editor.scrollTop += 700; });
            await toggle();
            const visibleChapter = await page.evaluate(() => {
                const top = content.getBoundingClientRect().top;
                return [...content.querySelectorAll('h1')].filter(h => h.getBoundingClientRect().top <= top + 30).at(-1)?.textContent;
            });
            assert.match(visibleChapter, /Chapter 28\./, `Manual editor scrolling at ${width}px`);
            console.log(`${engine}: position preserved at ${width}px`);
        }
        assert.deepEqual(requests, [], 'Normal Markdown generates no network request');

        // Use a mixed document to exercise source ranges through render features.
        const mixed = '# Review\n\n' + ('Opening prose.\n\n').repeat(30) +
            '<div id="bibliography">\n\n## Repeated heading\n\n' +
            '**Target passage** with [reference][link], inline $x^2$, a wiki [[Review]] and a note[^n].\n\n' +
            '| Item | Result |\n|---|---|\n| Alpha | Bravo |\n| Charlie | Delta |\n\n' +
            '> A quotation with **formatting**.\n\n- List entry\n  - Nested entry\n\n' +
            '```js\nconst safe = "<script>";\n```\n\n$$a^2+b^2=c^2$$\n\n' +
            '</div>\n\n' + ('Closing prose.\n\n').repeat(30) +
            '[link]: https://example.invalid/\n\n[^n]: Footnote text.\n\n' +
            '<script>window.untrustedRan=true</script>\n\n<img src="https://example.invalid/image.png" onerror="window.untrustedRan=true">';
        await page.setViewportSize({ width: 1920, height: 1080 });
        await load(mixed.replace(/\n/g, '\r\n'));
        assert.equal(await page.locator('#content .katex').count(), 2);
        assert.equal(await page.locator('#content table').count(), 1);
        assert.equal(await page.locator('#content pre code').count(), 1);
        assert.equal(await page.evaluate(() => Boolean(window.untrustedRan)), false);
        assert.equal(await page.locator('#content img[src^="http"]').count(), 0);
        // Add a highlight across cells and ensure structural nodes stay intact.
        await page.evaluate(() => {
            const cells = content.querySelectorAll('td');
            const range = document.createRange();
            range.setStart(cells[0].firstChild, 0); range.setEnd(cells[1].firstChild, 5);
            applyHighlightToSelection('yellow', range);
        });
        assert.equal(await page.locator('#content table tbody tr').count(), 2);
        assert.equal(await page.locator('#content table tbody > span, #content table tr > span').count(), 0);
        assert.ok(await page.locator('#content td [data-annotation-id]').count() >= 2);
        await page.evaluate(() => {
            const target = content.querySelector('h2');
            content.scrollTop += target.getBoundingClientRect().top - content.getBoundingClientRect().top - 20;
        });
        const original = await page.evaluate(() => content.scrollTop);
        await toggle();
        assert.match(await page.evaluate(() => editor.value.slice(editor.selectionStart, editor.selectionStart + 30)), /^Repeated heading/);
        // A real edit causes a rerender. Native undo must still be available.
        const sourceBeforeUndo = await page.locator('#editor').inputValue();
        await page.locator('#editor').pressSequentially('x');
        await page.locator('#editor').press('Meta+z');
        assert.equal(await page.locator('#editor').inputValue(), sourceBeforeUndo, 'Native undo survives mode switches');
        await toggle();
        assert.ok(Math.abs(await page.evaluate(() => content.scrollTop) - original) < 3);
        await toggle();
        await page.evaluate(() => { const i = editor.value.indexOf('**Target passage**'); editor.setSelectionRange(i, i); });
        await page.locator('#editor').pressSequentially('Additional context. ');
        await toggle();
        assert.ok(await page.locator('#content').textContent().then(t => t.includes('Additional context.')));
        const headingOffset = await page.evaluate(() => content.querySelector('h2').getBoundingClientRect().top - content.getBoundingClientRect().top);
        assert.ok(Math.abs(headingOffset - 20) < 4, 'Actual source edits retain the visible passage after rerender');
        assert.ok(await page.locator('#content td [data-annotation-id]').count() >= 2, 'Annotations survive source edits');
        const rapidStart = await page.evaluate(() => content.scrollTop);
        await page.evaluate(() => { setEditMode(true); setEditMode(false); });
        await settle();
        assert.ok(Math.abs(await page.evaluate(() => content.scrollTop) - rapidStart) < 2, 'Rapid toggles cancel stale layout callbacks');
        for (const theme of ['system', 'day', 'night', 'contrast']) {
            await page.evaluate(theme => applyThemePreference(theme, false), theme);
            await toggle(); await toggle();
        }
        await page.locator('#editToggleBtn').focus();
        await page.keyboard.press('Enter'); await settle();
        assert.equal(await page.locator('#editor').isVisible(), true);
        await page.keyboard.press('Meta+e'); await settle();
        assert.equal(await page.locator('#content').isVisible(), true);
        assert.equal(await page.locator('main').count(), 1);
        if (process.env.AXE_PATH) {
            // Audit the settled theme/button colors, not their CSS transition.
            await page.waitForTimeout(300);
            await page.addScriptTag({ content: fs.readFileSync(process.env.AXE_PATH, 'utf8') });
            const violations = await page.evaluate(async () => (await axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] } })).violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) })));
            console.log('axe:', JSON.stringify(violations));
            assert.equal(violations.length, 0);
        }
        assert.deepEqual(outboundRequests, [], 'No external request reaches the network');
        // Chromium reports CSP-blocked image attempts as request/requestfailed
        // events; WebKit suppresses them. Neither should reach the network.
        assert.deepEqual(requests, blockedRequests, 'Hostile resources must be blocked by CSP');
        assert.deepEqual(errors, [], 'No browser errors');
        console.log(`${engine}: formatting, security, annotations, themes, keyboard and offline checks passed`);
    } finally { await browser.close(); }
}
main().catch(error => { console.error((error.stack || error.message).split('\n').filter(line => !line.includes('base64,')).slice(0, 9).join('\n')); process.exitCode = 1; });

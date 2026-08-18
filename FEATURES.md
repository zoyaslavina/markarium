# Markarium.md capability catalogue

This is the durable product record for the package-free standalone reader and the forthcoming desktop app. Update it whenever a capability is added, removed or moved between editions; use it as the source for the in-product **Info**, README, release notes and store description.

Status labels:

- **Standalone** — present in `index.html` in this repository.
- **App** — present in, or reserved for, the desktop edition.
- **Shared** — the workflow should remain consistent in both editions.

## General Markdown-reader capabilities

| Capability | Edition | Notes |
| --- | --- | --- |
| GitHub Flavored Markdown | Shared | Headings, lists, task lists, tables, fenced code, links, images and blockquotes. |
| Document outline | Shared | Stable heading IDs, current-section indication, independently collapsible branches, and a Collapse/Expand depth stepper that folds or reveals one heading level at a time (deepest first). |
| Search and long-document navigation | Shared | Match navigation, reading progress, word count, reading time and restored scroll position. |
| Multiple open documents | Shared | Tabs, wiki-links and backlinks; tab controls follow keyboard tab semantics. |
| Math formulas | Shared | KaTeX is embedded in the standalone file and works offline. |
| Reading appearance | Shared | System/day/night/high-contrast themes, font-size control, optional justification and hyphenation. Settings belong under **Aa**. |
| Export | Standalone | Markdown, clean Markdown, annotation JSON and browser PDF/print workflows. |

## Distinctive review and editing workflow

| Capability | Edition | Why it matters |
| --- | --- | --- |
| Text-attached highlights | Shared | Feedback remains visible where it applies instead of becoming a detached message. |
| Comments and checkbox tasks | Shared | A note can become an actionable task and return to a comment without losing its anchor. |
| Resilient annotation anchoring | Shared | Exact text, prefix, suffix, section and block context are stored; reattachment tolerates small edits and text movement. |
| In-document comment markers | Shared | Every attached note has a visible, keyboard-operable marker and a corresponding panel item. |
| Go to, edit, resolve and copy | Shared | Each review item exposes explicit named actions. |
| Embedded annotation block | Shared | Review data can travel with a Markdown file while remaining hidden from the rendered document. |
| Safe JSON import/export | Shared | Annotation records are validated and normalized; import verifies the file belongs to the open document (by stable document ID), warns on a mismatch, and offers merge, replace or cancel with a one-step undo. |
| Raw Markdown editing | Shared | Reader and source editor live in the same workflow with save/download fallbacks. |
| AI citation cleanup | Shared | Common ChatGPT, Gemini and Perplexity export markers can be inspected, hidden or removed from a clean export. |
| Table-safe annotations | Shared | Selection wrapping ignores table structure and formatting whitespace, avoiding stray dots/border fragments. |
| Stable section navigation | Shared | Selecting a section scrolls only the document pane rather than shifting the whole application frame. |
| Copy code / copy table | Shared | Code copies as text; tables copy as tab-separated values for spreadsheets, documents and agent hand-offs. |

## Accessibility and agent-friendly navigation

These decisions serve keyboard users, screen-reader users, voice control, browser automation and software agents that inspect the semantic DOM. They reduce reliance on visual coordinates without claiming formal conformance certification.

| Capability | Implementation |
| --- | --- |
| Landmarks and regions | Named navigation, main document, complementary notes area, status region and tab panels. |
| Tabs | `tablist`, `tab` and `tabpanel` relationships, selected state, roving focus, arrows, Home/End and Delete. |
| Dialogs and menus | Names, ownership, expanded state, focus entry/return, focus trapping and Escape dismissal. |
| Toolbars | One tab stop plus arrow/Home/End navigation while preserving direct pointer operation. |
| Notes | Named comment/task controls, keyboard-operable markers, `aria-details` relationships and focusable note cards. |
| Resizable notes panel | Separator semantics, current/min/max values and keyboard resizing. |
| Status and progress | Live save/load announcements and numeric reading-progress semantics. |
| Tables and code | Column/row scopes, labelled copy controls, language labels and TSV output. |
| Headings | Stable slug IDs and named folding controls that do not pollute the heading's accessible name. |
| Visual adaptability | System theme, high contrast, forced colours, visible focus and reduced-motion support. |
| Predictable identifiers | Stable headings and explicit `aria-controls`, `aria-labelledby` and `aria-details` connections. |

## Security and privacy boundary

| Control | Standalone behaviour |
| --- | --- |
| Automatic network access | Denied by Content Security Policy (`connect-src 'none'`) and no network loader code. |
| Remote assets | Scripts, styles, fonts and interface images are embedded; external/relative document images become accessible blocked-resource notices. |
| Markdown HTML | Sanitized with DOMPurify before insertion into the rendered document. |
| Active content | Scripts, handlers, frames, plug-ins, workers and unsafe URL schemes are denied or removed. |
| Links | Web and mail links require an explicit user action; local and unknown schemes are made inert in the standalone edition. |
| Annotation imports | Records are allow-listed, bounded and normalized; imported file identifiers cannot redirect data into another document. |
| Data ownership | Documents and annotations stay in browser storage or user-selected files. There are no accounts, analytics or telemetry. |
| Clipboard | Written only after the user activates a named copy control. |

## Desktop app additions

The desktop app is the expanded edition, not a different review product. Its public information should clearly say that it adds:

- native open/save integration and desktop file associations;
- automatic resolution of images stored beside a Markdown file;
- Mermaid diagrams;
- expanded code and syntax tooling;
- richer export options and desktop integrations;
- other app-only syntax or file-system features as they are completed and verified.

Do not say the standalone lacks formulas: KaTeX math is already bundled. Do not advertise a planned app feature as shipped until its release test is complete.

## Documentation and release checklist

For every meaningful change:

1. Update this catalogue and the in-product **Info & keyboard help** where relevant.
2. Keep README claims identical to verified behaviour.
3. Test with keyboard only, screen-reader-oriented semantics, day/night/high-contrast themes and reduced motion.
4. Test malformed Markdown, hostile HTML, imported annotations, moved/edited anchored text, tables and long documents.
5. Confirm that opening a document produces no automatic network request.
6. Confirm copy, save/download, export and restored-tab behaviour in supported browsers.
7. Record app-only work separately so package-free standalone code does not acquire native APIs or runtime dependencies.

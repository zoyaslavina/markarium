# Editorial GitHub Pages draft

This is a restrained project publication, not a product-sales page. It is meant to accompany the repository in the style of a small development blog:

- `index.html` — the project story, current release, principles and standalone/app boundary;
- `journal.html` — a journal index plus a complete draft of the introductory publication;
- `site.css` — shared package-free styling;
- `POST-TEMPLATE.md` — a repeatable editorial checklist for later articles.
- `product-page-concept.html` — the earlier polished product-site concept, preserved for a future custom-domain or desktop-app site.

The draft remains inside this directory so it cannot become the live Pages root accidentally. It has a visible draft banner, placeholder outlines and `noindex,nofollow`.

## What the Mnemon example clarifies

The page at `github.com/VivianBalakrishnan/mnemon` is the repository page with its `README.md` rendered below the file list. It is not a separate GitHub Pages site. Its repository “About” link also points back to the README.

GitHub exposes three related but different publication surfaces:

1. **Repository README** — the GitHub-native project presentation, as in Mnemon.
2. **GitHub Pages** — static web hosting; for this project it can serve the working standalone HTML directly.
3. **Jekyll/Minima** — GitHub Pages' built-in blog-aware route for writing Markdown posts. `Minima` is the restrained default writing theme. “GitHub Light” usually refers to a visual or syntax-highlighting theme, not the publishing system. A documentation site with a left navigation may instead have been **GitBook**, which is a separate service.

### Recommended launch arrangement

- Treat the rebranded root `README.md` as the primary public project page.
- Use GitHub Pages to host the exact standalone application at its direct HTML URL.
- Do not make the optional editorial or product-site concepts part of the first launch unless they add something the README cannot.
- If a real journal becomes useful, either publish the static editorial draft later or place a Jekyll/Minima journal in a separate Pages repository so the standalone tool repository remains package-free and easy to inspect.

This recommendation preserves both page concepts without forcing either one into the initial release.

## Placeholder register

| Placeholder | Decision needed |
| --- | --- |
| `{{NAME}}` | Word before `.md` in the journal masthead. |
| `{{PRODUCT_NAME}}` | Full product name, normally `NAME.md`. |
| `{{META_DESCRIPTION}}` | Concise description for search results. |
| `{{SITE_URL}}` | Final canonical home URL. |
| `{{JOURNAL_URL}}` | Final canonical journal URL. |
| `{{REPOSITORY_URL}}` | Public repository URL. |
| `{{PUBLICATION_DATE}}` | Date displayed on the introductory project note. |
| `{{RELEASE_DATE}}` | Human-readable release date. |
| `{{RELEASE_DATE_ISO}}` | ISO date used by `<time>`. |
| `{{VERSION}}` | Verified standalone release. |
| `{{READING_TIME}}` | Reading time after the first post is final. |
| `{{DESKTOP_APP_STATUS}}` | Honest one-line app status. |

Also replace every old-name screenshot after the final brand is chosen.

## Editorial shape

The home page is based on the README but reads as an authored project note:

1. what the project is;
2. why it was built;
3. the principles behind it;
4. what the current release contains;
5. the development-journal index;
6. the boundary between the standalone file and desktop app.

The journal begins with “Introducing `{{PRODUCT_NAME}}`.” Later post ideas are deliberately marked **Planned**, not presented as completed publications.

## Publication checklist

- Confirm name, product description, dates, version and app status.
- Rebrand the application and replace screenshots before publishing the introductory note.
- Verify every product claim against `FEATURES.md` and the current HTML.
- Replace all placeholders; remove the draft banner and placeholder outlines.
- Remove `noindex,nofollow` only after canonical URLs are final.
- Add final Open Graph metadata and a rebranded social-preview image if social sharing matters.
- Keep the journal static, first-party and package-free: no analytics, trackers, remote fonts or comment widgets.
- Test every relative link from the `github.io/REPOSITORY/` project path.
- Validate heading order, landmarks, link purpose, contrast, 200% zoom, narrow reflow, keyboard focus, reduced motion and forced colours.
- Run an accessibility audit and test current Chrome, Edge, Firefox and Safari.
- Enforce HTTPS. Verify a custom domain in GitHub before configuring DNS.
- Publish from `main` and `/(root)`; a custom build is unnecessary.

## Repository material outside the page

The public repository already contains the application HTML, README, licence, feature catalogue, accessibility statement, security policy, changelog, third-party notices, contribution guide, structured issue forms and a package-free verification workflow. Draft `PRIVACY.md` and `SUPPORT.md` now capture the remaining contact and hosting disclosures.

Before accepting contributions, decide whether code pull requests are appropriate for the shared commercial-app roadmap and whether contributor terms are needed. Add the final brand/trademark policy after the name is chosen.

## Hosting note

GitHub Pages is suitable here as a static showcase for the repository. GitHub explicitly distinguishes that use from hosting an online business, checkout or commercial SaaS. The editorial format keeps the site within the project-showcase role while the actual application remains the downloadable/hosted HTML artifact.

Research references:

- <https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>
- <https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits>
- <https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages>
- <https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes>
- <https://www.w3.org/WAI/planning/statements/>
- <https://developers.google.com/search/docs/fundamentals/seo-starter-guide>

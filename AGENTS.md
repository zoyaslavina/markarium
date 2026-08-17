# Agent instructions

This repository is the package-free, standalone edition of Markarium.md.

## Source of truth

- `index.html` is both the production artifact and the standalone source.
- It must continue to open directly from disk and from GitHub Pages.
- Do not add package manifests, generated dependency directories, remote CDNs, build steps, native APIs or desktop-only integrations.
- The desktop edition lives in a separate repository. Mermaid, native file integration, automatic local-image resolution and richer desktop exports stay there unless a self-contained, privacy-preserving standalone implementation is deliberately approved.

## Non-negotiable behaviour

- Preserve the Content Security Policy and zero automatic network requests.
- Sanitize rendered Markdown and validate imported annotation data.
- Keep comments and tasks resilient to small text edits and movement.
- Never wrap formatting whitespace or structural table nodes with annotation spans.
- Section navigation must scroll only the document pane.
- Preserve keyboard, screen-reader, high-contrast, reduced-motion and semantic agent-navigation support.

## Documentation contract

When behaviour changes, update all applicable sources:

1. the in-product **Info & keyboard help**;
2. `README.md` for public claims;
3. `FEATURES.md` for the Standalone/Shared/App capability boundary;
4. `CHANGELOG.md` for a user-visible release change.

Do not advertise planned desktop-app functionality as shipped. The standalone edition already includes offline KaTeX formulas.

## Release checks

- Extract the final inline application script and run `node --check` on it.
- Keep `.github/workflows/verify.yml` passing without introducing a package installation step.
- Test hostile Markdown, tables, formulas, code blocks and blocked external images.
- Test annotations across table cells and after small text movement/edits.
- Test keyboard-only operation, semantic landmarks and all four themes.
- Run an axe-core audit and confirm that opening a document causes no automatic network request.
- Confirm the repository still contains no runtime dependency or package directory.

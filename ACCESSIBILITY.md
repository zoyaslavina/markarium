# Accessibility

Accessibility is part of the standalone HTML edition, not an app-only feature. MD Reader is designed so that reading, navigation, editing and review do not depend exclusively on pointer coordinates or colour.

## Included in 1.0.0

- Named page landmarks and document regions.
- Semantic tab lists, tabs and tab panels for documents, comments and tasks.
- Named dialogs, menus, toolbars, progress and live status messages.
- Keyboard navigation for toolbars, tabs, menus, dialogs, notes, outline folding and the resizable notes panel.
- Visible keyboard focus and focus restoration after menus and dialogs close.
- System, day, night and high-contrast themes plus forced-colour support.
- Adjustable reader text size, optional justification and optional hyphenation.
- Reduced-motion support.
- Table heading scopes, code-language labels and explicit copy-code/copy-table controls.
- Stable heading identifiers and explicit control relationships that also improve voice control and software-agent navigation.
- Comments and tasks represented in the Notes panel as well as by in-document styling, so their existence is not communicated by colour alone.

## Verification

The 1.0.0 release was checked with keyboard-driven interaction tests, semantic DOM assertions, all four reading themes and axe-core 4.13.0. The automated audit reported zero violations for the release fixture. Automated checks cannot establish complete accessibility or replace testing with people who use assistive technology.

## Known boundaries

- Native file picker and direct-save behaviour varies by browser. Where direct writing is unavailable, saving falls back to a download.
- PDF accessibility depends on the browser's print-to-PDF implementation and is not currently claimed to produce a tagged PDF.
- Very wide Markdown tables remain horizontally scrollable to preserve their data structure.
- The desktop app will require its own accessibility verification after shared HTML improvements and native integrations are combined.

## Report a problem

Use the accessibility checkbox in the repository's bug-report form and include the browser, input method and assistive technology involved. Remove private document content before attaching an example. Security-sensitive issues should follow [`SECURITY.md`](SECURITY.md).

# Changelog

All notable user-visible changes to the standalone edition are recorded here.

## Unreleased

### Reading and editing

- The outline **Collapse** and **Expand** controls now step the folded depth one heading level at a time (deepest first) instead of folding everything at once, with the current depth shown between the two controls.

### Appearance

- Headings now use **Inter** (bundled, offline) as the display face instead of Playfair Display, for a cleaner, more contemporary look; body text is unchanged.

## 1.0.0 — 2026-08-13

First public standalone release.

### Reading and editing

- Self-contained GitHub Flavored Markdown reader and source editor.
- Offline KaTeX formulas, multi-document tabs, outline, search, wiki-links and backlinks.
- System, day, night and high-contrast themes with reader text-size, justification and hyphenation controls.
- Named copy actions for code blocks and tables; table data copies as TSV.

### Review workflow

- Text-attached highlights, comments and checkbox tasks.
- Resilient quote anchoring using exact text, surrounding context, block and section information.
- Annotation import/export and optional embedded annotation blocks.
- Table-safe annotations that do not split table structure or create stray border marks.
- Section navigation that scrolls the reader without moving the outer application frame.

### Accessibility and automation

- Semantic landmarks, tabs, panels, dialogs, menus, status and progress information.
- Keyboard paths for toolbars, notes, tabs, menus, dialogs, outline folding and panel resizing.
- Visible focus, reduced-motion, forced-colour and live-status support.
- Stable headings and explicit control relationships for assistive technologies and software agents.

### Privacy and security

- Strict Content Security Policy with automatic network connections disabled.
- Updated embedded Marked 18.0.7 and DOMPurify 3.4.9.
- Sanitized Markdown, blocked remote document images and inert unknown/local link schemes.
- Validated and bounded annotation imports.

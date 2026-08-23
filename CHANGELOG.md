# Changelog

All notable user-visible changes to the standalone edition are recorded here.

## Unreleased

### Reading and editing

- **Done** in the source editor now writes the document back to disk automatically; **Save** (⌘S / Ctrl+S) still works at any time.
- Typing in long documents is smoother: browser spell-checking is turned off for sources over ~20 000 characters (it re-scans the whole editor on every edit), the Tab key inserts in place instead of rebuilding the editor text (which also keeps native undo), the editor is layout-contained, and annotation selection tracking is skipped while editing.

### Reliability and data safety

- Write access is requested as soon as a file is opened with **Open file** or dropped onto the window, so the first save no longer stalls on a permission prompt or fails with "opened without write access". Dropped files now receive a real file handle in Chromium-based browsers.
- Restoring tabs on page load no longer fails part-way with an internal error (`foldLevel` was read before it was declared), which also left the restored document without its annotations and save controls until it was re-opened.
- File handles are remembered (in the browser's IndexedDB) and re-attached to restored tabs after a reload, so documents keep saving in place; re-opening an already-open document with **Open file** attaches the handle to the existing tab instead of only switching to it.

## 1.0.1 — 2026-08-18

### Reading and editing

- The outline **Collapse** and **Expand** controls now step the folded depth one heading level at a time (deepest first) instead of folding everything at once, with the current depth shown between the two controls.
- Currency amounts such as `$5-$10` are no longer mistaken for inline math; genuine `$…$` formulas still render.

### Reliability and data safety

- Closing a document with unsaved source edits now asks to **Save**, **Discard** or **Cancel** instead of quietly dropping the edits; on save failure the document stays open.
- The unsaved-changes warning shown when leaving the page now accounts for every open document, not only the active one.
- Autosaving annotations while quickly switching documents now writes to the document the change belongs to.
- When browser storage is full, the app now says so instead of reporting a save that did not happen.
- A malformed embedded annotation block is now left untouched rather than being stripped from the file.
- Each document now has a stable identity, so highlights and comments are no longer lost when the file is edited (here or in another editor) or renamed. Annotations saved by earlier versions are migrated automatically the first time a file is reopened.

### Review workflow

- Importing annotations now checks that the file belongs to the open document. A mismatch is flagged before anything changes, and you can **Merge** the notes with the existing ones or **Replace** them, with a one-step **Undo import**.

### Portability

- The optional embedded annotation block is now stored as base64 (format v2), so note text containing `-->` or `<!--` can no longer corrupt the file. Blocks written by older versions are still read.

### Security and dependencies

- Updated the bundled **DOMPurify** to 3.4.13 and **KaTeX** to 0.16.22.

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

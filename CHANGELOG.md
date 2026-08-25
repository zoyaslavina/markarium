# Changelog

All notable user-visible changes to the standalone edition are recorded here.

## Unreleased

### Editing, restoration and review history

- Manually integrated the collaborator’s compatible restoration and editing improvements without replacing the iPad-first navigation or Share-copy workflow.
- Supporting desktop browsers now request write access during Open, retain file handles in local IndexedDB, reconnect compatible handles to restored tabs and adopt a handle when a restored document is reopened.
- Pressing **Done** saves changed source automatically only when a real in-place write handle exists. On iPad/iPhone, Done never opens Share; **Share copy** remains an explicit user action.
- Long-document editing avoids resetting an unchanged textarea, contains editor layout/paint work, disables expensive browser spell-checking above 20,000 characters and inserts Tab text without discarding native undo history.
- Fixed restored-tab startup so outline folding state exists before the first document render.
- In Edit mode, ⌘/Ctrl+Z and ⌘/Ctrl+Shift+Z use native text undo/redo. In View mode, the same shortcuts undo/redo ordered highlights, colours, comments, tasks, resolves, deletes, re-attachments and imports.
- View-mode review history is independent per document, exists only for the current page session and is bounded to 50 steps / approximately 4 MB per document. Import undo now participates in this same ordered history instead of maintaining a conflicting snapshot.

### Agent hand-off

- Portable Markdown copies now include a small hidden Agent Brief that identifies the file as a reviewed working copy, reports whether annotations and open review notes exist, and tells receiving agents that the current user prompt remains authoritative.
- The Agent Brief contains no document text or annotation wording, makes no request by itself, and describes annotations as review data rather than a second prompt. Broader style or terminology scope applies only when an annotation explicitly says so.
- Clean Markdown and **Remove embedded review data** omit both the Agent Brief and annotation payload. Reopening a portable copy strips the brief from the editor and regenerates one current block on the next save.
- Fixed the non-iPad portable-download fallback so browsers without an in-place file handle download the copy instead of failing on an undefined save result.

### iPad, phone and split-screen work

- Added a focus-managed navigation drawer so Open file, New document and the document outline remain available when the permanent sidebar no longer fits.
- Stabilized safe-area and visual-viewport sizing through Safari chrome, software-keyboard, orientation and split-screen changes, with responsive Notes/search/preferences/dialog layouts and compact phone typography.
- Increased primary coarse-pointer targets, made heading folds visible without hover, and made the selection annotation toolbar wrap and remain inside the visible screen.
- Kept **Notes** as a dedicated right-side iPad action, made fold indicators visually larger, and positioned the compact annotation palette away from Safari’s native selection controls.
- Repeated **Edit** / **Done** switching now returns to the active text anchor without an unnecessary rerender when no source changed.
- Touch text selections now raise annotation controls reliably on iPadOS instead of depending on a mouseup event.
- The file input now accepts several Markdown files at once when the browser picker supports multiple selection.

### Safari saving

- Browsers without direct write access now label the main action **Save copy**; on iPad and iPhone it is explicitly **Share copy** and invokes the share sheet for **Save to Files**, with a download fallback elsewhere.
- A portable copy includes source edits and embedded annotations and preserves a browser backup. Safari shares are deliberately left marked unsaved until the user reopens the saved copy, because the browser cannot verify the share destination.
- iPad and iPhone no longer fall back to an unreliable browser download when sharing is unavailable, preventing filename-only text artifacts; the document stays unsaved with a clear Safari retry message instead.

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

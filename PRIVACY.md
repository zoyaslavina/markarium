# Privacy notice — Markarium.md

Last updated: 4 September 2026

This notice covers the Markarium.md standalone web edition and the Markarium.md
desktop app. Both editions are designed to process Markdown locally without an
account, advertising, analytics, telemetry or an application server.

## What Markarium.md does not collect

The developer does not collect or receive your Markdown documents, rendered
content, edits, highlights, comments, tasks, preferences, file names, usage data,
diagnostics, identifiers or location through Markarium.md. The bundled third-party
components do not add analytics or advertising. Markarium.md does not track you.

In this notice, “collect” means transmitting data off your device so that the
developer or a third party can access it. Reading a local file, keeping browser or
app state on your device, or saving a file you explicitly choose is not collection
by the developer.

## Documents and review data

Documents and review data stay on your device or in files you explicitly open,
save, import, export, download or share. Browser storage and desktop app storage
belong to the browser profile or operating-system account where you use the product.
Removing that local application data may remove preferences, restored tabs and
annotations that you have not saved or exported.

Portable Markdown can contain an embedded review block with quoted text, nearby
context, comments, tasks and a small fixed Agent Brief. This makes review data
portable; it does not encrypt it. Anyone who receives the file can extract that
information. Use a clean Markdown export or **Remove embedded review data** before
sharing when annotations should not travel with the document.

## Files, images and clipboard

Opening, saving, importing, exporting, printing, copying to the clipboard and
opening an external link require an explicit user action.

The desktop app can read and write only files you select through the system file
picker. It can also resolve supported raster images beside an opened document while
the native file grant is active. The standalone web edition follows the browser's
file-access rules; a supporting browser may retain a handle to a file you selected
so a restored tab can reconnect to it. Safari on iPad and iPhone saves through an
explicit share/copy workflow.

## Network and external services

Markarium.md makes no automatic runtime network request. Its scripts, styles,
fonts, Markdown parser, sanitizer, formula renderer and—on desktop—Mermaid renderer
are bundled with the product. Remote document resources are blocked. An external
website opens in your browser only after you activate a link.

The web edition is delivered by GitHub Pages. GitHub may process technical data
needed to deliver and protect its hosting service under the
[GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
That hosting-layer processing is separate from Markarium.md, which adds no analytics
or tracking. Apple may process App Store downloads and purchases under Apple's own
privacy terms; that activity is outside the app.

## Security and sensitive information

Do not place confidential document text in a public support issue. Remove private
content from samples and screenshots. Report a suspected vulnerability through
GitHub's private vulnerability-reporting flow described in [`SECURITY.md`](SECURITY.md).

## Your choices

You control which files Markarium.md receives and which copies you save or share.
You can remove local product data through the relevant browser or operating-system
settings, and you can remove portable review data from a document inside Markarium.md.
Because the developer does not receive document or usage data, there is no remote
Markarium.md account or developer-held document record to retrieve or delete.

## Changes and contact

Material changes to this notice will be dated here and recorded in the repository
history. For a privacy question, open a
[public support issue](https://github.com/zoyaslavina/markarium/issues/new/choose)
without including private document content. Use private vulnerability reporting for
security-sensitive matters.

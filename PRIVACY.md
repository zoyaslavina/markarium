# Privacy notice — draft

> Publication placeholder: replace `{{PRODUCT_NAME}}`, `{{SITE_URL}}`, `{{CONTACT_ROUTE}}` and `{{LAST_UPDATED}}` before launch. This notice describes the standalone web edition, not the forthcoming desktop app.

## Summary

`{{PRODUCT_NAME}}` is designed to process Markdown documents locally in your browser. The application does not require an account and does not include product analytics, advertising, telemetry or an application server.

## Document content

The application does not automatically upload the Markdown documents you open, their rendered contents, annotations or tasks. This information remains in browser storage or in files you explicitly open, save, import, export or download.

Browser storage belongs to the browser profile and device where you use the application. You can remove stored application data through your browser settings. Removing it may also remove locally stored preferences, restored tabs and annotations that were not exported or embedded in a document.

## Network and external resources

The standalone application uses a Content Security Policy that denies automatic network connections. Scripts, styles, fonts, the Markdown parser, sanitizer and formula renderer are bundled in the HTML file. Remote and relative document images are replaced with a blocked-resource notice. An external website can open only after you activate a link.

The hosted edition at `{{SITE_URL}}` is delivered by GitHub Pages. GitHub may process technical information required to deliver and protect its service according to the [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). That hosting-layer processing is separate from the application, which does not add analytics or tracking.

## Files and clipboard

Opening, saving and downloading files, importing or exporting annotations, writing to the clipboard and opening an external link require an explicit user action. Browser permissions and file-saving behaviour vary by browser.

## Sensitive information

Review documents before sharing exported Markdown, annotation JSON or screenshots. Annotations can contain quoted document text and surrounding context so that comments and tasks can remain attached after small edits.

## Changes and contact

This notice was last updated on `{{LAST_UPDATED}}`. Material changes will be recorded in the repository history and release notes.

For privacy questions or concerns, use `{{CONTACT_ROUTE}}`. Do not include private document content in a public issue. Security-sensitive reports should follow [`SECURITY.md`](SECURITY.md).

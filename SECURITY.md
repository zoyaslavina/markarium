# Security policy

## Supported version

Security fixes are applied to the current release on the `main` branch.

## Reporting a vulnerability

Please use GitHub's **Report a vulnerability** private-reporting flow for this repository. Do not include exploit details, private documents or sensitive data in a public issue.

Useful reports include:

- the affected browser and MD Reader version;
- a minimal Markdown or annotation JSON sample with private content removed;
- the expected and observed behaviour;
- whether the issue can execute active content, access a network resource, expose local data or modify a file without clear user action.

You should receive an acknowledgement through GitHub within seven days. Public disclosure should wait until a fix or mitigation is available.

## Security boundary

The standalone edition is intended to make no automatic network request. Markdown is sanitized before display, remote document resources are blocked, unknown/local link schemes are made inert, and imported annotation records are validated. Files, downloads, clipboard writes and external links require explicit user action.

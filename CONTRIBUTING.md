# Contributing

Thank you for helping improve Markarium.md. This repository deliberately has no package installation or build step: the shipped `index.html` is the standalone product.

## Before proposing a change

1. Read [`AGENTS.md`](AGENTS.md) for the architectural constraints.
2. Check [`FEATURES.md`](FEATURES.md) to determine whether the change is Shared, Standalone or App-only.
3. Keep the change local-first and usable when the file is opened directly from disk.

## Pull requests

- Explain the user problem and the behaviour change.
- Keep unrelated formatting or generated-data churn out of the change.
- Include keyboard and accessibility effects in the description.
- State whether the change can trigger network access, write files, read the clipboard or open an external page.
- Update the Info panel, README, feature catalogue and changelog when their claims are affected.
- Describe the manual and automated checks performed.

Security vulnerabilities should not be filed as public issues. Follow [`SECURITY.md`](SECURITY.md).

By contributing, you agree that your contribution may be distributed under this repository's [PolyForm Noncommercial License 1.0.0](LICENSE).

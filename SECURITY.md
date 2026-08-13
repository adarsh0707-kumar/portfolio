# Security Policy

This repository holds the source of a personal portfolio site. It is a static
front end with no backend, no database, no authentication and no user data,
so the realistic security surface is small — but reports are still welcome.

## Supported versions

Only the code on `main` is maintained, and that is what the live site is
deployed from. Older tags are historical and will not receive fixes.

| Version | Supported |
| ------- | --------- |
| `main`  | ✅        |
| Tagged releases | ❌ |

## Reporting a vulnerability

**Please do not open a public issue for a security problem.**

Report it privately instead, by either:

- **GitHub Security Advisories** — the *Security* tab of this repository,
  then *Report a vulnerability*. This is preferred.
- **Email** — [adarshku.official@gmail.com](mailto:adarshku.official@gmail.com)

Helpful things to include: what the problem is, the steps to reproduce it,
which page or file it affects, and what an attacker could actually do with it.

## What to expect

- **Acknowledgement** within 3 days.
- **An assessment** — confirmed or declined, with reasoning — within 7 days.
- **A fix** for confirmed issues as quickly as I can manage, deployed to the
  live site once merged.

If you would like credit for a report, say so and I will name you in the
commit or release notes. If you would rather stay anonymous, that is fine too.

## Out of scope

- Findings from automated scanners with no demonstrated impact.
- Missing hardening headers with no exploitable consequence.
- Vulnerabilities in third-party hosting (report those to the provider).
- Dependency advisories that only affect the build toolchain and cannot be
  reached from the deployed static output. These are still worth flagging as
  a normal issue — just not as a vulnerability report.

# ai-scan-showcase

An intentionally vulnerable Express app for demoing [AI Scan Review](https://github.com/nassar151/ai-scan-review). **Do not deploy.** The signing key is fake.

What a scan should find (11 findings):

- Code: SQL injection, command injection, eval injection, path traversal, a hard-coded JWT key, and missing CSRF protection.
- Packages: axios, jsonwebtoken and lodash (direct), and body-parser and path-to-regexp (through express).

Expected AI results:

- **Not reachable:** lodash. Its advisories cover `_.template`, `_.unset` and similar functions, but the app only calls `_.get`.
- **Medium raised to High:** path traversal. Semgrep rates it Medium, but `/files/download/:name` is public and passes the name directly into `readFileSync`, so anyone can read any file on the server.

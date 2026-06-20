# Security & Vulnerability Protocols

## 1. Defensive Baseline
The application layout enforces multiple layers of validation to safeguard health profiles:
* **Database Isolation**: All parameterized queries block SQL-Injection attempts.
* **Authentication**: Session routes expect robust encryption handshakes with short token lifetimes.
* **CORS Polling**: Domain rules restrict outside cross-origin traffic to safe, authorized origins.

## 2. Reporting a Vulnerability
Please do not register security exploits or leaked credential findings as public GitHub Issues. 

Instead, report vulnerabilities directly to our triage team via email: **security@fittrack.local** (We investigate and respond to actionable alerts within 24 hours).

# Privacy Framework - FitTrack Core

## 1. Zero-Knowledge Architecture
FitTrack operates under a strict data-minimization model. Biometric records (including heart rates, step history, and sleep cycles) are parsed on-device using local keys before transmission to centralized database storage.

## 2. Collected Indicators
We record strictly functional health markers to populate your analytics feed:
* Daily step counts and estimated metabolic rates (calories).
* Active and resting pulses (BPM streams).
* Sleep duration metrics.

## 3. Data Control Rights
Consistent with global privacy frameworks (GDPR & CCPA), you retain absolute data rights:
* **Erasure**: Purging your account executes a cascading delete across all table logs instantly.
* **Portability**: You may download your entire database footprint as standard JSON records at any point.

## 4. Third-Party Restrictions
We do not sell, rent, or lease personal identifiers. Wearable links (Apple HealthKit and Google Fit integrations) operate purely under direct sandbox explicit-consent permissions.

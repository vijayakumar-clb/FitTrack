/**
 * FitTrack Wearable Core - Sensor Monitor Service
 * Simulates background smartwatch OS biometric data capturing.
 */

class WatchSensorManager {
    constructor() {
        this.currentHeartRate = 72;
        this.accumulatedSteps = 0;
        this.isTracking = false;
    }

    // Starts localized background telemetry polling
    startTracking(callback) {
        this.isTracking = true;
        console.log("⌚ FitTrack Wearable OS: Device sensor streaming online [Secure Encrypted State]");

        this.trackingInterval = setInterval(() => {
            if (!this.isTracking) return;

            // Generate realistic health metrics fluctuations
            this.currentHeartRate = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
            this.accumulatedSteps += Math.floor(Math.random() * 12) + 2; 

            const dataPayload = {
                timestamp: new Date().toISOString(),
                heartRateBpm: this.currentHeartRate,
                totalStepsWalked: this.accumulatedSteps,
                deviceBattery: "94%"
            };

            callback(dataPayload);
        }, 4000); // Polls sensors every 4 seconds
    }

    stopTracking() {
        this.isTracking = false;
        clearInterval(this.trackingInterval);
        console.log("⌚ Watch Sensors: Paused.");
    }
}

// Example usage log setup
const watchService = new WatchSensorManager();
watchService.startTracking((biometrics) => {
    console.log(`[SENSOR ENCRYPTED COMPRESSED]: Pulse at ${biometrics.heartRateBpm} BPM | Total Steps: ${biometrics.totalStepsWalked}`);
});

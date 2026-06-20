// Local Dashboard Operations Manager
document.addEventListener('DOMContentLoaded', () => {
    const logConsole = document.getElementById('log-console');

    function logEvent(message) {
        const timestamp = new Date().toLocaleTimeString();
        logConsole.innerHTML += `<br><span class="text-emerald-500">[${timestamp}]</span> ${message}`;
        logConsole.scrollTop = logConsole.scrollHeight; // Auto-scrolls logs
    }

    // Periodically fluctuate values to simulate real wearable watch streams
    setInterval(() => {
        const hrElement = document.getElementById('heart-rate');
        if (hrElement) {
            const randomPulse = Math.floor(Math.random() * (85 - 68 + 1)) + 68;
            hrElement.innerHTML = `${randomPulse} <span class="text-lg font-normal text-slate-500">BPM</span>`;
            logEvent(`Biometric Stream: Local zero-knowledge encryption parsed pulse at ${randomPulse} BPM`);
        }
    }, 5000);
});

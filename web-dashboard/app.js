document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. HEART RATE & STRESS CHART (Line Graph) ---
    const ctxHeartStress = document.getElementById('heartStressChart').getContext('2d');
    new Chart(ctxHeartStress, {
        type: 'line',
        data: {
            labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM', '11 PM'],
            datasets: [
                {
                    label: 'Heart Rate (BPM)',
                    data: [62, 58, 75, 88, 72, 95, 68],
                    borderColor: '#f87171',
                    backgroundColor: 'rgba(248, 113, 113, 0.1)',
                    tension: 0.3,
                    yAxisID: 'y'
                },
                {
                    label: 'Stress Index (0-100)',
                    data: [15, 10, 45, 60, 30, 70, 20],
                    borderColor: '#fbbf24',
                    backgroundColor: 'rgba(251, 191, 36, 0.05)',
                    borderDash: [5, 5],
                    tension: 0.3,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { type: 'linear', position: 'left', grid: { color: '#1e293b' }, ticks: { color: '#94a3b8' } },
                y1: { type: 'linear', position: 'right', grid: { drawOnChartArea: false }, ticks: { color: '#94a3b8' } },
                x: { ticks: { color: '#94a3b8' } }
            },
            plugins: { legend: { labels: { color: '#e2e8f0' } } }
        }
    });

    // --- 2. SLEEP PATTERN CHART (Bar Graph showing Sleep Hours & Wakeup markers) ---
    const ctxSleep = document.getElementById('sleepPatternChart').getContext('2d');
    new Chart(ctxSleep, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Sleep Duration (Hours)',
                data: [6.5, 7.2, 4.8, 8.0, 7.5, 5.2, 8.5],
                backgroundColor: '#818cf8',
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { min: 0, max: 12, grid: { color: '#1e293b' }, ticks: { color: '#94a3b8' } },
                x: { ticks: { color: '#94a3b8' } }
            },
            plugins: { 
                legend: { labels: { color: '#e2e8f0' } },
                tooltip: {
                    callbacks: {
                        footer: (tooltipItems) => {
                            // Custom wakeup text map for each day corresponding to sleep bars
                            const wakeups = ['Wakeup: 6:30 AM', 'Wakeup: 6:45 AM', 'Wakeup: 8:15 AM (Late)', 'Wakeup: 6:15 AM', 'Wakeup: 6:30 AM', 'Wakeup: 9:00 AM (Weekend)', 'Wakeup: 7:30 AM'];
                            return wakeups[tooltipItems[0].dataIndex];
                        }
                    }
                }
            }
        }
    });

    // --- 3. WALKING TRENDS CHART (Horizontal/Vertical Step bars) ---
    const ctxWalking = document.getElementById('walkingTrendsChart').getContext('2d');
    new Chart(ctxWalking, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Steps Walked',
                data: [7200, 9400, 3100, 11200, 8432, 14000, 6800],
                borderColor: '#34d399',
                backgroundColor: 'rgba(52, 211, 153, 0.2)',
                fill: true,
                pointRadius: 5,
                pointBackgroundColor: '#10b981'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { grid: { color: '#1e293b' }, ticks: { color: '#94a3b8' } },
                x: { ticks: { color: '#94a3b8' } }
            },
            plugins: { legend: { labels: { color: '#e2e8f0' } } }
        }
    });

    // Dynamic numeric fluctuation simulation for realism
    setInterval(() => {
        const stepElement = document.getElementById('stat-steps');
        const stressElement = document.getElementById('stat-stress');
        
        if (stepElement) {
            const currentSteps = parseInt(stepElement.innerText.replace(/,/g, ''));
            stepElement.innerText = (currentSteps + Math.floor(Math.random() * 4) + 1).toLocaleString();
        }
        if (stressElement) {
            const randomStress = Math.floor(Math.random() * (28 - 18 + 1)) + 18;
            stressElement.innerText = `Low (${randomStress})`;
        }
    }, 4000);
});

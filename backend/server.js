const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows the server to accept JSON payloads

// Health Check Route
app.get('/api/v1/health-check', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'FitTrack API Server is running smoothly',
        timestamp: new Date()
    });
});

// Mock Endpoints for FitTrack Core Features
app.get('/api/v1/health/heart-rate', (req, res) => {
    // This will connect to the PostgreSQL database later
    res.json({ message: "Fetch heart rate data history" });
});

app.post('/api/v1/health/activity', (req, res) => {
    const { steps, distance, calories } = req.body;
    res.status(201).json({
        message: "Activity logged successfully!",
        data: { steps, distance, calories }
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 FitTrack Server running on port ${PORT}`);
});

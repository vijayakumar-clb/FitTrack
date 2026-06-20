-- FitTrack Relational Database Schema (PostgreSQL)

-- 1. Users Table (Stores authentication & account profiles)
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Activity Logs Table (Steps, distance, and calories)
CREATE TABLE IF NOT EXISTS activity_logs (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    steps INT DEFAULT 0,
    distance_meters DECIMAL(10, 2) DEFAULT 0.00,
    calories_burned INT DEFAULT 0,
    logged_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Heart Rate Logs Table (Continuous pulse tracking)
CREATE TABLE IF NOT EXISTS heart_rate_logs (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    bpm INT NOT NULL, -- Beats per minute
    logged_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Sleep Logs Table (Duration and quality analysis)
CREATE TABLE IF NOT EXISTS sleep_logs (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    duration_minutes INT NOT NULL,
    quality_score INT CHECK (quality_score BETWEEN 1 AND 100), -- 1 to 100 scale
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Indexes for fast data retrieval when viewing dashboard charts
CREATE INDEX IF NOT EXISTS idx_activity_user_date ON activity_logs(user_id, logged_date);
CREATE INDEX IF NOT EXISTS idx_heart_rate_user_time ON heart_rate_logs(user_id, logged_at);
CREATE INDEX IF NOT EXISTS idx_sleep_user_start ON sleep_logs(user_id, start_time);

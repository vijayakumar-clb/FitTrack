import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  // Dynamic health state metrics
  const [steps, setSteps] = useState(2130); // Starting low to simulate a lazy day
  const [heartRate, setHeartRate] = useState(72);
  const [sleepScore, setSleepScore] = useState(48); // Starting with poor sleep

  // Background Telemetry Simulation Loop
  useEffect(() => {
    const interval = setInterval(() => {
      // Walk simulator (adds random steps)
      setSteps(prev => prev + Math.floor(Math.random() * 8) + 1);
      // Pulse simulator
      setHeartRate(Math.floor(Math.random() * (88 - 66 + 1)) + 66);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 🧠 Local AI Rule Engine for Behavioral Coaching
  const getAICoachingAdvice = () => {
    let insights = [];
    let healthAlert = false;

    // 1. Evaluate Sleep Metrics
    if (sleepScore < 50) {
      insights.push({
        icon: "⚠️",
        type: "Poor Sleep Detected",
        tip: "Your recovery score is low. Avoid late-night screen exposure tonight and aim for a consistent bedtime to restore deep sleep cycles.",
        color: '#f87171' // Red alert
      });
      healthAlert = true;
    }

    // 2. Evaluate Walking Activity Metrics
    if (steps < 3000) {
      insights.push({
        icon: "🚶‍♂️",
        type: "Sedentary Behavior Warning",
        tip: "You've been sitting for quite a while. Let's step away from the desk! A quick 10-minute walk will boost your metabolism and clarify focus.",
        color: '#fbbf24' // Amber warning
      });
    } else if (steps >= 10000) {
      insights.push({
        icon: "🏆",
        type: "Daily Goal Achieved!",
        tip: "Fantastic work hitting the 10k threshold! Your cardiovascular endurance is improving. Keep up this brilliant momentum.",
        color: '#34d399' // Green victory
      });
    } else {
      insights.push({
        icon: "⚡",
        type: "Active Progress",
        tip: "You are on your way! Keep moving periodically to hit your step milestone.",
        color: '#60a5fa' // Blue neutral
      });
    }

    return insights;
  };

  const aiRecommendations = getAICoachingAdvice();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>FitTrack Mobile</Text>
          <Text style={styles.subtitle}>Privacy-First Biometrics</Text>
        </View>

        {/* 🤖 NEW COMPONENT: AI Edge Coaching Feed */}
        <View style={styles.aiSection}>
          <Text style={styles.aiSectionTitle}>✨ FITTRACK AI LOCAL INSIGHTS</Text>
          
          {aiRecommendations.map((insight, idx) => (
            <View key={idx} style={[styles.aiCard, { borderColor: insight.color }]}>
              <View style={styles.aiCardHeader}>
                <Text style={styles.aiCardIcon}>{insight.icon}</Text>
                <Text style={[styles.aiCardType, { color: insight.color }]}>{insight.type}</Text>
              </View>
              <Text style={styles.aiCardText}>{insight.tip}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionDividerLabel}>REAL-TIME VITALS</Text>

        {/* Biometrics Display Cards */}
        <View style={[styles.card, steps < 3000 ? styles.alertCardBorder : null]}>
          <Text style={styles.cardLabel}>TODAY'S STEPS</Text>
          <Text style={styles.cardValue}>{steps.toLocaleString()}</Text>
          <Text style={styles.cardSubtext}>Goal: 10,000 steps {steps < 3000 ? '(Low Activity)' : ''}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>HEART RATE</Text>
          <Text style={styles.cardValue}>{heartRate} <Text style={styles.unit}>BPM</Text></Text>
          <Text style={styles.cardSubtext}>Resting Average: 64 BPM</Text>
        </View>

        <View style={[styles.card, sleepScore < 50 ? styles.dangerCardBorder : null]}>
          <Text style={styles.cardLabel}>SLEEP TRACKER</Text>
          <Text style={styles.cardValue}>4h 12m</Text>
          <Text style={styles.dangerSubtext}>Quality Score: {sleepScore}/100 (Restless Sleep)</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  scrollContainer: { padding: 20 },
  header: { marginBottom: 20, marginTop: 10 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#10b981' },
  subtitle: { fontSize: 14, color: '#94a3b8', marginTop: 4 },
  
  // AI Styling
  aiSection: { marginBottom: 24 },
  aiSectionTitle: { fontSize: 11, fontWeight: '800', color: '#a78bfa', letterSpacing: 1.5, marginBottom: 10 },
  aiCard: { backgroundColor: '#1e1b4b', padding: 16, borderRadius: 12, borderWidth: 1, marginBottom: 12 },
  aiCardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  aiCardIcon: { fontSize: 18, marginRight: 8 },
  aiCardType: { fontSize: 14, fontWeight: '700' },
  aiCardText: { fontSize: 13, color: '#e2e8f0', lineHeight: 18, fontWeight: '400' },
  
  // Base Metric Cards Styling
  sectionDividerLabel: { fontSize: 11, fontWeight: '800', color: '#64748b', letterSpacing: 1.5, marginBottom: 12 },
  card: { backgroundColor: '#020617', padding: 20, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#1e293b' },
  alertCardBorder: { borderColor: '#fbbf24' },
  dangerCardBorder: { borderColor: '#f87171' },
  cardLabel: { fontSize: 11, color: '#94a3b8', fontWeight: '700', letterSpacing: 1 },
  cardValue: { fontSize: 32, fontWeight: 'bold', color: '#ffffff', marginTop: 6 },
  unit: { fontSize: 16, color: '#64748b', fontWeight: 'normal' },
  cardSubtext: { fontSize: 13, color: '#10b981', marginTop: 6, fontWeight: '500' },
  dangerSubtext: { fontSize: 13, color: '#f87171', marginTop: 6, fontWeight: '500' }
});

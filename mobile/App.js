import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [syncStatus, setSyncStatus] = useState('Synced');

  const triggerSync = () => {
    setSyncStatus('Syncing...');
    setTimeout(() => {
      setSyncStatus('Synced');
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>FitTrack Mobile</Text>
          <Text style={styles.subtitle}>Privacy-First Biometrics</Text>
        </View>

        {/* Sync Status Button */}
        <TouchableOpacity style={styles.syncButton} onPress={triggerSync}>
          <Text style={styles.syncText}>🔒 Device Security Status: {syncStatus}</Text>
        </TouchableOpacity>

        {/* Metrics Grid */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>TODAY'S STEPS</Text>
          <Text style={styles.cardValue}>8,432</Text>
          <Text style={styles.cardSub text}>Goal: 10,000 steps</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>HEART RATE</Text>
          <Text style={styles.cardValue}>72 <Text style={styles.unit}>BPM</Text></Text>
          <Text style={styles.cardSubtext}>Resting: 64 BPM</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>SLEEP TRACKER</Text>
          <Text style={styles.cardValue}>7h 45m</Text>
          <Text style={styles.cardSubtext}>Quality Score: 88/100</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  scrollContainer: { padding: 20 },
  header: { marginBottom: 24, marginTop: 10 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#10b981' },
  subtitle: { fontSize: 14, color: '#94a3b8', marginTop: 4 },
  syncButton: { backgroundColor: '#1e293b', padding: 12, borderRadius: 8, marginBottom: 20, alignItems: 'center', borderWidth: 1, borderColor: '#334155' },
  syncText: { color: '#34d399', fontWeight: '600', fontSize: 13 },
  card: { backgroundColor: '#020617', padding: 20, borderRadius: 12, marginBottom: 16, borderStyle: 'solid', borderWidth: 1, borderColor: '#1e293b' },
  cardLabel: { fontSize: 12, color: '#94a3b8', fontWeight: '700', letterSpacing: 1 },
  cardValue: { fontSize: 32, fontWeight: 'bold', color: '#ffffff', marginTop: 8 },
  unit: { fontSize: 16, color: '#64748b', fontWeight: 'normal' },
  cardSubtext: { fontSize: 13, color: '#10b981', marginTop: 6, fontWeight: '500' }
});

// === screens/StepCounter.js ===
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function StepCounter() {
    return (
        <View style={styles.container}>
            <View style={styles.ring}>
                <Ionicons name="footsteps" size={50} color="#4F46E5" />
                <Text style={styles.steps}>0</Text>
                <Text style={styles.label}>Pași Astăzi</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoBox}>
                    <Text style={styles.infoVal}>0.0</Text>
                    <Text style={styles.infoLbl}>km</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoVal}>0</Text>
                    <Text style={styles.infoLbl}>kcal</Text>
                </View>
            </View>
            <Text style={styles.note}>Senzorii necesită configurare avansată.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F3F4F6' },
    ring: { width: 220, height: 220, borderRadius: 110, borderWidth: 15, borderColor: '#E0E7FF', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', elevation: 5 },
    steps: { fontSize: 48, fontWeight: 'bold', color: '#1F2937' },
    label: { color: '#6B7280', fontSize: 14 },
    infoContainer: { flexDirection: 'row', marginTop: 40, width: '80%', justifyContent: 'space-around' },
    infoBox: { alignItems: 'center' },
    infoVal: { fontSize: 24, fontWeight: 'bold', color: '#4F46E5' },
    infoLbl: { color: '#6B7280' },
    note: { position: 'absolute', bottom: 30, color: '#9CA3AF', fontSize: 12 }
});
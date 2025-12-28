// === screens/HomeScreen.js ===
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {
    const navigation = useNavigation();

    const QuickAction = ({ title, icon, color, target }) => (
        <TouchableOpacity 
            style={[styles.actionCard, { backgroundColor: color }]} 
            onPress={() => navigation.navigate(target)}
        >
            <Ionicons name={icon} size={32} color="#fff" />
            <Text style={styles.actionText}>{title}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            {/* Hero Section */}
            <View style={styles.hero}>
                <Text style={styles.greeting}>Salut, Campionule!</Text>
                <Text style={styles.subtitle}>Ești gata să îți depășești limitele azi?</Text>
            </View>

            {/* Stats Overview Mockup */}
            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>3</Text>
                    <Text style={styles.statLabel}>Antrenamente</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>1250</Text>
                    <Text style={styles.statLabel}>Kcal Arse</Text>
                </View>
            </View>

            <Text style={styles.sectionTitle}>Acces Rapid</Text>
            
            <View style={styles.grid}>
                <QuickAction title="Planuri" icon="restaurant" color="#10B981" target="Planuri" />
                <QuickAction title="BMI" icon="speedometer" color="#3B82F6" target="BMI" />
                <QuickAction title="Timer" icon="timer" color="#F59E0B" target="Timer" />
                <QuickAction title="Istoric" icon="calendar" color="#8B5CF6" target="Workout" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F3F4F6' },
    hero: { padding: 25, backgroundColor: '#fff', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, paddingBottom: 40, elevation: 5 },
    greeting: { fontSize: 28, fontWeight: 'bold', color: '#1F2937' },
    subtitle: { fontSize: 16, color: '#6B7280', marginTop: 5 },
    statsContainer: { flexDirection: 'row', backgroundColor: '#4F46E5', marginHorizontal: 20, marginTop: -25, borderRadius: 15, padding: 20, elevation: 8, alignItems: 'center' },
    statItem: { flex: 1, alignItems: 'center' },
    statValue: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
    statLabel: { color: '#E0E7FF', fontSize: 12 },
    divider: { width: 1, height: 40, backgroundColor: '#6366F1' },
    sectionTitle: { fontSize: 20, fontWeight: 'bold', margin: 20, color: '#374151' },
    grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 20 },
    actionCard: { width: '48%', height: 120, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 15, elevation: 4 },
    actionText: { color: '#fff', fontWeight: 'bold', marginTop: 10, fontSize: 16 }
});
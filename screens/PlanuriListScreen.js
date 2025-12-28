// === screens/PlanuriListScreen.js ===
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const plans = [
    { id: 'PlanFA', title: 'Forță & Anduranță', desc: 'Construiește masă musculară.', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=80' },
    { id: 'PlanMI', title: 'Menținere Ideală', desc: 'Echilibru perfect.', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=500&q=80' },
    { id: 'PlanDI', title: 'Plan Dietetic', desc: 'Scădere sănătoasă.', img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=500&q=80' },
    { id: 'PlanVEG', title: 'Vegetarian', desc: 'Energie din plante.', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80' },
    { id: 'PlanSPORT', title: 'Performanță', desc: 'Combustibil pentru atleți.', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=500&q=80' },
];

export default function PlanuriListScreen() {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
            <Text style={styles.headerTitle}>Alege obiectivul tău</Text>
            {plans.map((plan) => (
                <TouchableOpacity 
                    key={plan.id} 
                    style={styles.card} 
                    onPress={() => navigation.navigate(plan.id)}
                    activeOpacity={0.9}
                >
                    <Image source={{ uri: plan.img }} style={styles.image} />
                    <View style={styles.infoOverlay}>
                        <Text style={styles.cardTitle}>{plan.title}</Text>
                        <Text style={styles.cardDesc}>{plan.desc}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F3F4F6', padding: 15 },
    headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#1F2937', marginBottom: 15 },
    card: { height: 180, marginBottom: 20, borderRadius: 15, overflow: 'hidden', elevation: 5, backgroundColor: '#fff' },
    image: { width: '100%', height: '100%', resizeMode: 'cover' },
    infoOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.6)', padding: 15 },
    cardTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
    cardDesc: { color: '#D1D5DB', fontSize: 14 }
});
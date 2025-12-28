import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export function PlanSPORT() {
    return (
        <ScrollView style={styles.container}>
            <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80' }} 
                style={styles.heroImage} 
            />
            <View style={styles.content}>
                <Text style={styles.title}>Performanță Sportivă</Text>
                <Text style={styles.desc}>Carbohidrați complecși pentru energie și proteine pentru refacere musculară rapidă.</Text>
                
                <View style={styles.mealBox}>
                    <Text style={styles.mealTitle}>Pre-Antrenament</Text>
                    <Text style={styles.mealText}>• Banană cu unt de arahide</Text>
                    <Text style={styles.mealText}>• Shake proteic (Whey)</Text>
                </View>

                <View style={styles.mealBox}>
                    <Text style={styles.mealTitle}>Prânz (Post-Antrenament)</Text>
                    <Text style={styles.mealText}>• Mușchi de vită la grătar</Text>
                    <Text style={styles.mealText}>• Cartofi la cuptor</Text>
                    <Text style={styles.mealText}>• Fasole verde</Text>
                </View>

                <View style={styles.mealBox}>
                    <Text style={styles.mealTitle}>Cină</Text>
                    <Text style={styles.mealText}>• Piept de curcan</Text>
                    <Text style={styles.mealText}>• Quinoa cu legume</Text>
                    <Text style={styles.mealText}>• Iaurt slab înainte de culcare</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F3F4F6' },
    heroImage: { width: '100%', height: 250 },
    content: { padding: 20, marginTop: -20, backgroundColor: '#F3F4F6', borderTopLeftRadius: 25, borderTopRightRadius: 25 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#1F2937', marginBottom: 10 },
    desc: { fontSize: 16, color: '#4B5563', marginBottom: 20, lineHeight: 22 },
    mealBox: { backgroundColor: '#fff', padding: 15, borderRadius: 12, marginBottom: 15, elevation: 2 },
    mealTitle: { fontSize: 18, fontWeight: 'bold', color: '#DC2626', marginBottom: 5 }, // Rosu pentru energie
    mealText: { fontSize: 15, color: '#374151', marginBottom: 3 }
});
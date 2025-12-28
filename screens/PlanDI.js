import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export function PlanDI() {
    return (
        <ScrollView style={styles.container}>
            <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80' }} 
                style={styles.heroImage} 
            />
            <View style={styles.content}>
                <Text style={styles.title}>Scădere în Greutate</Text>
                <Text style={styles.desc}>Focus pe proteine slabe și legume. Deficit caloric controlat pentru arderea grăsimilor.</Text>
                
                <View style={styles.mealBox}>
                    <Text style={styles.mealTitle}>Micul Dejun</Text>
                    <Text style={styles.mealText}>• 2 ouă fierte tari</Text>
                    <Text style={styles.mealText}>• Jumătate de avocado</Text>
                    <Text style={styles.mealText}>• Apă cu lămâie</Text>
                </View>

                <View style={styles.mealBox}>
                    <Text style={styles.mealTitle}>Prânz</Text>
                    <Text style={styles.mealText}>• Pește alb la grătar</Text>
                    <Text style={styles.mealText}>• Broccoli și conopidă la abur</Text>
                    <Text style={styles.mealText}>• Fără carbohidrați complecși</Text>
                </View>

                <View style={styles.mealBox}>
                    <Text style={styles.mealTitle}>Cină</Text>
                    <Text style={styles.mealText}>• Salată verde cu ton (în suc propriu)</Text>
                    <Text style={styles.mealText}>• Dressing de lămâie și puțin ulei măsline</Text>
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
    mealTitle: { fontSize: 18, fontWeight: 'bold', color: '#10B981', marginBottom: 5 }, // Verde pentru dieta
    mealText: { fontSize: 15, color: '#374151', marginBottom: 3 }
});
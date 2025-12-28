import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function PlanFA() {
    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48' }} style={styles.heroImage} />
            <View style={styles.content}>
                <Text style={styles.title}>Plan Forță & Anduranță</Text>
                <Text style={styles.desc}>Conceput pentru a susține antrenamente intense și dezvoltarea masei musculare slabe.</Text>
                
                <View style={styles.mealBox}>
                    <Text style={styles.mealTitle}>Micul Dejun</Text>
                    <Text style={styles.mealText}>• Omletă din 3 ouă cu spanac</Text>
                    <Text style={styles.mealText}>• 1 felie pâine integrală prăjită</Text>
                    <Text style={styles.mealText}>• 1 măr mediu</Text>
                </View>

                <View style={styles.mealBox}>
                    <Text style={styles.mealTitle}>Prânz</Text>
                    <Text style={styles.mealText}>• Piept de pui la grătar (200g)</Text>
                    <Text style={styles.mealText}>• Orez brun (150g)</Text>
                    <Text style={styles.mealText}>• Mix de legume la abur</Text>
                </View>

                <View style={styles.mealBox}>
                    <Text style={styles.mealTitle}>Cină</Text>
                    <Text style={styles.mealText}>• Pește alb la cuptor</Text>
                    <Text style={styles.mealText}>• Cartof dulce copt</Text>
                    <Text style={styles.mealText}>• Salată verde cu lămâie</Text>
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
    mealTitle: { fontSize: 18, fontWeight: 'bold', color: '#4F46E5', marginBottom: 5 },
    mealText: { fontSize: 15, color: '#374151', marginBottom: 3 }
});
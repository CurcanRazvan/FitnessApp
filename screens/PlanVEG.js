import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export function PlanVEG() {
    return (
        <ScrollView style={styles.container}>
            <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80' }} 
                style={styles.heroImage} 
            />
            <View style={styles.content}>
                <Text style={styles.title}>Green Power (Veg)</Text>
                <Text style={styles.desc}>Nutrienți esențiali exclusiv din plante. Bogat în fibre și vitamine.</Text>
                
                <View style={styles.mealBox}>
                    <Text style={styles.mealTitle}>Micul Dejun</Text>
                    <Text style={styles.mealText}>• Smoothie verde (spanac, măr, banană)</Text>
                    <Text style={styles.mealText}>• Semințe de chia și in</Text>
                </View>

                <View style={styles.mealBox}>
                    <Text style={styles.mealTitle}>Prânz</Text>
                    <Text style={styles.mealText}>• Curry de năut cu lapte de cocos</Text>
                    <Text style={styles.mealText}>• Orez basmati</Text>
                    <Text style={styles.mealText}>• Salată de roșii</Text>
                </View>

                <View style={styles.mealBox}>
                    <Text style={styles.mealTitle}>Cină</Text>
                    <Text style={styles.mealText}>• Paste integrale cu pesto de busuioc</Text>
                    <Text style={styles.mealText}>• Dovlecei la grătar</Text>
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
    mealTitle: { fontSize: 18, fontWeight: 'bold', color: '#059669', marginBottom: 5 }, // Verde inchis
    mealText: { fontSize: 15, color: '#374151', marginBottom: 3 }
});
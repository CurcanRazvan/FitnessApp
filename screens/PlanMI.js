import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export function PlanMI() {
    return (
        <ScrollView style={styles.container}>
            <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80' }} 
                style={styles.heroImage} 
            />
            <View style={styles.content}>
                <Text style={styles.title}>Menținere Ideală</Text>
                <Text style={styles.desc}>Un plan echilibrat caloric, perfect pentru a-ți păstra greutatea și nivelul de energie constant.</Text>
                
                <View style={styles.mealBox}>
                    <Text style={styles.mealTitle}>Micul Dejun</Text>
                    <Text style={styles.mealText}>• Iaurt grecesc cu fructe de pădure</Text>
                    <Text style={styles.mealText}>• 2 linguri de ovăz sau granola</Text>
                    <Text style={styles.mealText}>• Cafea sau ceai neîndulcit</Text>
                </View>

                <View style={styles.mealBox}>
                    <Text style={styles.mealTitle}>Prânz</Text>
                    <Text style={styles.mealText}>• Salată Caesar cu pui (fără crutoane)</Text>
                    <Text style={styles.mealText}>• Supă cremă de legume</Text>
                    <Text style={styles.mealText}>• 1 fruct la alegere</Text>
                </View>

                <View style={styles.mealBox}>
                    <Text style={styles.mealTitle}>Cină</Text>
                    <Text style={styles.mealText}>• Tocăniță de legume cu orez</Text>
                    <Text style={styles.mealText}>• O felie mică de brânză slabă</Text>
                    <Text style={styles.mealText}>• Ceai de plante</Text>
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
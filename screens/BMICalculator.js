// === screens/BMICalculator.js ===
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, Image } from 'react-native';

export default function BMICalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('#4F46E5');

    const calculateBMI = () => {
        Keyboard.dismiss();
        const w = parseFloat(weight);
        const h = parseFloat(height) / 100;
        if (w > 0 && h > 0) {
            const val = w / (h * h);
            const bmiVal = val.toFixed(1);
            setBmi(bmiVal);

            if (val < 18.5) { setMessage('Subponderal'); setColor('#F59E0B'); }
            else if (val < 25) { setMessage('Greutate Normală'); setColor('#10B981'); }
            else if (val < 30) { setMessage('Supraponderal'); setColor('#EF4444'); }
            else { setMessage('Obezitate'); setColor('#B91C1C'); }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.label}>Greutate (kg)</Text>
                <TextInput style={styles.input} placeholder="ex: 75" keyboardType="numeric" value={weight} onChangeText={setWeight} placeholderTextColor="#9CA3AF" />
                
                <Text style={styles.label}>Înălțime (cm)</Text>
                <TextInput style={styles.input} placeholder="ex: 180" keyboardType="numeric" value={height} onChangeText={setHeight} placeholderTextColor="#9CA3AF" />

                <TouchableOpacity style={styles.button} onPress={calculateBMI}>
                    <Text style={styles.btnText}>Calculează</Text>
                </TouchableOpacity>
            </View>

            {bmi && (
                <View style={[styles.resultCard, { borderColor: color }]}>
                    <Text style={[styles.bmiValue, { color: color }]}>{bmi}</Text>
                    <Text style={styles.bmiLabel}>BMI Index</Text>
                    <Text style={[styles.message, { backgroundColor: color }]}>{message}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F3F4F6', padding: 20 },
    card: { width: '100%', backgroundColor: '#fff', padding: 25, borderRadius: 20, elevation: 4 },
    label: { fontSize: 14, fontWeight: 'bold', color: '#4B5563', marginBottom: 8, marginTop: 10 },
    input: { backgroundColor: '#F9FAFB', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 10, padding: 15, fontSize: 16 },
    button: { backgroundColor: '#4F46E5', padding: 15, borderRadius: 10, marginTop: 25, alignItems: 'center' },
    btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
    resultCard: { marginTop: 30, alignItems: 'center', width: '100%', padding: 20, backgroundColor: '#fff', borderRadius: 20, borderWidth: 2, elevation: 4 },
    bmiValue: { fontSize: 48, fontWeight: 'bold' },
    bmiLabel: { fontSize: 14, color: '#6B7280', marginBottom: 15 },
    message: { color: '#fff', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, fontWeight: 'bold', overflow: 'hidden' }
});
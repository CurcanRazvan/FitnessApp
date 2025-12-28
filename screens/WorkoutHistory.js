import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput, Keyboard, Platform, KeyboardAvoidingView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function WorkoutHistory() {
    // State pentru lista de antrenamente
    const [workouts, setWorkouts] = useState([]);
    
    // State pentru Modal si Formular
    const [modalVisible, setModalVisible] = useState(false);
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [calories, setCalories] = useState('');

    const addWorkout = () => {
        if (type && duration) {
            const newWorkout = {
                id: Date.now().toString(),
                type,
                duration,
                calories: calories || '0',
                date: new Date().toLocaleDateString('ro-RO')
            };
            setWorkouts([newWorkout, ...workouts]); // Adaugam la inceputul listei
            
            // Resetam formularul
            setType('');
            setDuration('');
            setCalories('');
            setModalVisible(false);
        }
    };

    const renderWorkoutItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.iconContainer}>
                <Ionicons name="barbell" size={24} color="#fff" />
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.type}</Text>
                <Text style={styles.cardDate}>{item.date}</Text>
            </View>
            <View style={styles.cardStats}>
                <Text style={styles.statText}>{item.duration} min</Text>
                <Text style={styles.statSub}>Durată</Text>
            </View>
            <View style={[styles.cardStats, { marginLeft: 15 }]}>
                <Text style={styles.statText}>{item.calories}</Text>
                <Text style={styles.statSub}>Kcal</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {workouts.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Ionicons name="clipboard-outline" size={80} color="#D1D5DB" />
                    <Text style={styles.emptyText}>Niciun antrenament încă</Text>
                    <Text style={styles.emptySub}>Apasă pe + pentru a adăuga activitate.</Text>
                </View>
            ) : (
                <FlatList
                    data={workouts}
                    renderItem={renderWorkoutItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listContent}
                />
            )}

            {/* Buton Plutitor Adaugare */}
            <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
                <Ionicons name="add" size={30} color="#fff" />
            </TouchableOpacity>

            {/* Modal Formular */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Adaugă Antrenament</Text>
                        
                        <Text style={styles.label}>Tip Activitate</Text>
                        <TextInput 
                            style={styles.input} 
                            placeholder="ex: Alergare, Sală, Înot" 
                            value={type}
                            onChangeText={setType}
                        />

                        <View style={styles.row}>
                            <View style={{ flex: 1, marginRight: 10 }}>
                                <Text style={styles.label}>Durată (min)</Text>
                                <TextInput 
                                    style={styles.input} 
                                    placeholder="30" 
                                    keyboardType="numeric"
                                    value={duration}
                                    onChangeText={setDuration}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.label}>Calorii (kcal)</Text>
                                <TextInput 
                                    style={styles.input} 
                                    placeholder="250" 
                                    keyboardType="numeric"
                                    value={calories}
                                    onChangeText={setCalories}
                                />
                            </View>
                        </View>

                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.cancelBtn} onPress={() => setModalVisible(false)}>
                                <Text style={styles.cancelText}>Anulează</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.saveBtn} onPress={addWorkout}>
                                <Text style={styles.saveText}>Salvează</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F3F4F6' },
    listContent: { padding: 20, paddingBottom: 100 },
    
    // Empty State
    emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    emptyText: { fontSize: 20, fontWeight: 'bold', color: '#374151', marginTop: 15 },
    emptySub: { color: '#9CA3AF', marginTop: 5 },

    // Card Styles
    card: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 16, padding: 15, marginBottom: 15, alignItems: 'center', elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
    iconContainer: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#4F46E5', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
    cardContent: { flex: 1 },
    cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#1F2937' },
    cardDate: { fontSize: 12, color: '#9CA3AF', marginTop: 2 },
    cardStats: { alignItems: 'center' },
    statText: { fontSize: 16, fontWeight: 'bold', color: '#4F46E5' },
    statSub: { fontSize: 10, color: '#6B7280' },

    // Floating Action Button
    fab: { position: 'absolute', bottom: 25, right: 25, width: 60, height: 60, borderRadius: 30, backgroundColor: '#4F46E5', justifyContent: 'center', alignItems: 'center', elevation: 8, shadowColor: '#4F46E5', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 5 },

    // Modal Styles
    modalOverlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' },
    modalContent: { backgroundColor: '#fff', borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 25, elevation: 10 },
    modalTitle: { fontSize: 22, fontWeight: 'bold', color: '#1F2937', marginBottom: 20, textAlign: 'center' },
    label: { fontSize: 14, fontWeight: '600', color: '#4B5563', marginBottom: 5 },
    input: { backgroundColor: '#F9FAFB', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 10, padding: 12, fontSize: 16, marginBottom: 15 },
    row: { flexDirection: 'row' },
    modalButtons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
    cancelBtn: { flex: 1, padding: 15, backgroundColor: '#F3F4F6', borderRadius: 10, marginRight: 10, alignItems: 'center' },
    saveBtn: { flex: 1, padding: 15, backgroundColor: '#4F46E5', borderRadius: 10, marginLeft: 10, alignItems: 'center' },
    cancelText: { color: '#4B5563', fontWeight: 'bold' },
    saveText: { color: '#fff', fontWeight: 'bold' }
});
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [laps, setLaps] = useState([]); // Stocam turele aici
    const intervalRef = useRef(null);

    const start = () => {
        if (!running) {
            setRunning(true);
            const startTime = Date.now() - time;
            intervalRef.current = setInterval(() => {
                setTime(Date.now() - startTime);
            }, 10); // Milisecunde precise
        }
    };

    const stop = () => {
        setRunning(false);
        clearInterval(intervalRef.current);
    };

    const reset = () => {
        stop();
        setTime(0);
        setLaps([]); // Resetam si turele
    };

    const lap = () => {
        setLaps([time, ...laps]); // Adaugam timpul curent la inceputul listei
    };

    const formatTime = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const milliseconds = Math.floor((ms % 1000) / 10);
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds < 10 ? '0' : ''}${milliseconds}`;
    };

    return (
        <View style={styles.container}>
            {/* Zona Ceasului */}
            <View style={styles.header}>
                <View style={styles.timerCircle}>
                    <Text style={styles.timeText}>{formatTime(time)}</Text>
                </View>
            </View>

            {/* Controale */}
            <View style={styles.controls}>
                {/* Buton Stanga: Reset sau Lap */}
                {!running ? (
                    <TouchableOpacity style={[styles.btn, styles.resetBtn]} onPress={reset} disabled={time === 0}>
                        <Text style={styles.btnText}>Reset</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={[styles.btn, styles.lapBtn]} onPress={lap}>
                        <Text style={styles.btnText}>Tură</Text>
                    </TouchableOpacity>
                )}

                {/* Buton Dreapta: Start sau Stop */}
                {!running ? (
                    <TouchableOpacity style={[styles.btn, styles.startBtn]} onPress={start}>
                        <Text style={[styles.btnText, { color: '#10B981' }]}>Start</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={[styles.btn, styles.stopBtn]} onPress={stop}>
                        <Text style={[styles.btnText, { color: '#EF4444' }]}>Stop</Text>
                    </TouchableOpacity>
                )}
            </View>

            {/* Lista de Ture (Laps) */}
            <View style={styles.lapsContainer}>
                <View style={styles.lapsHeader}>
                    <Text style={styles.lapHeaderText}>Nr.</Text>
                    <Text style={styles.lapHeaderText}>Timp Tură</Text>
                </View>
                <ScrollView style={styles.scrollView}>
                    {laps.map((lapTime, index) => (
                        <View key={index} style={styles.lapItem}>
                            <Text style={styles.lapText}>Lap {laps.length - index}</Text>
                            <Text style={styles.lapTimeText}>{formatTime(lapTime)}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#111827', paddingTop: 60 },
    header: { alignItems: 'center', marginBottom: 40 },
    timerCircle: { width: 280, height: 280, borderRadius: 140, borderWidth: 3, borderColor: '#374151', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1F2937', elevation: 10 },
    timeText: { fontSize: 56, color: '#F3F4F6', fontWeight: '300', fontVariant: ['tabular-nums'] },
    
    controls: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', paddingHorizontal: 40, marginBottom: 30 },
    btn: { width: 80, height: 80, borderRadius: 40, justifyContent: 'center', alignItems: 'center', borderWidth: 2 },
    
    startBtn: { backgroundColor: 'rgba(16, 185, 129, 0.15)', borderColor: '#10B981' },
    stopBtn: { backgroundColor: 'rgba(239, 68, 68, 0.15)', borderColor: '#EF4444' },
    resetBtn: { backgroundColor: 'rgba(107, 114, 128, 0.15)', borderColor: '#9CA3AF' },
    lapBtn: { backgroundColor: 'rgba(59, 130, 246, 0.15)', borderColor: '#3B82F6' },
    
    btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },

    lapsContainer: { flex: 1, backgroundColor: '#1F2937', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 },
    lapsHeader: { flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#374151', paddingBottom: 10, marginBottom: 10 },
    lapHeaderText: { color: '#9CA3AF', fontWeight: 'bold' },
    lapItem: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: 'rgba(55, 65, 81, 0.5)' },
    lapText: { color: '#D1D5DB', fontSize: 16 },
    lapTimeText: { color: '#F3F4F6', fontSize: 16, fontFamily: 'monospace' },
});
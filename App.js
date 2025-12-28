// === App.js ===
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import { StatusBar } from 'expo-status-bar';

// Importuri ecrane
import HomeScreen from './screens/HomeScreen';
import WorkoutHistory from './screens/WorkoutHistory';
import StepCounter from './screens/StepCounter';
import Stopwatch from './screens/Stopwatch';
import BMICalculator from './screens/BMICalculator';
import PlanuriListScreen from './screens/PlanuriListScreen';

// Importuri Planuri
import PlanFA from './screens/PlanFA';
import { PlanMI } from './screens/PlanMI';
import { PlanDI } from './screens/PlanDI';
import { PlanVEG } from './screens/PlanVEG';
import { PlanSPORT } from './screens/PlanSPORT';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Tema personalizată pentru a scăpa de fundalul alb plictisitor
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4F46E5', // Indigo modern
    background: '#F3F4F6', // Gri foarte deschis, profesional
    card: '#ffffff',
    text: '#1F2937',
  },
};

function PlanuriStack() {
    return (
        <Stack.Navigator screenOptions={{ 
            headerStyle: { backgroundColor: '#4F46E5' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
        }}>
            <Stack.Screen name="PlanuriList" component={PlanuriListScreen} options={{ title: 'Nutriție & Planuri' }} />
            <Stack.Screen name="PlanFA" component={PlanFA} options={{ title: 'Forță & Anduranță' }} />
            <Stack.Screen name="PlanMI" component={PlanMI} options={{ title: 'Menținere Ideală' }} />
            <Stack.Screen name="PlanDI" component={PlanDI} options={{ title: 'Scădere în Greutate' }} />
            <Stack.Screen name="PlanVEG" component={PlanVEG} options={{ title: 'Green Power' }} />
            <Stack.Screen name="PlanSPORT" component={PlanSPORT} options={{ title: 'Performanță Sportivă' }} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer theme={MyTheme}>
            <StatusBar style="light" />
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') iconName = focused ? 'grid' : 'grid-outline';
                        else if (route.name === 'Workout') iconName = focused ? 'barbell' : 'barbell-outline';
                        else if (route.name === 'Steps') iconName = focused ? 'footsteps' : 'footsteps-outline';
                        else if (route.name === 'Timer') iconName = focused ? 'timer' : 'timer-outline';
                        else if (route.name === 'BMI') iconName = focused ? 'speedometer' : 'speedometer-outline';
                        else if (route.name === 'Planuri') iconName = focused ? 'restaurant' : 'restaurant-outline';
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#4F46E5',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: { height: 60, paddingBottom: 10, paddingTop: 10 },
                    headerStyle: { backgroundColor: '#4F46E5' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Dashboard' }} />
                <Tab.Screen name="Planuri" component={PlanuriStack} options={{ headerShown: false, title: 'Nutriție' }} />
                <Tab.Screen name="Workout" component={WorkoutHistory} options={{ title: 'Antrenamente' }} />
                <Tab.Screen name="BMI" component={BMICalculator} options={{ title: 'Calculator BMI' }} />
                <Tab.Screen name="Timer" component={Stopwatch} options={{ title: 'Cronometru' }} />
                <Tab.Screen name="Steps" component={StepCounter} options={{ title: 'Pedometru' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
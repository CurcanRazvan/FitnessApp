# 🏋️ FitnessApp (Expo + React Native)

Aplicatie de fitness construita in React Native cu Expo. Include UI modern (cards, spacing, iconite), navigatie Tab + Stack si functionalitati utile pentru laborator: BMI, cronometru, istoricul antrenamentelor, planuri alimentare si un Step Counter cu increment manual pentru demo.

![Expo](https://img.shields.io/badge/Expo-SDK_54-000?style=for-the-badge&logo=expo&logoColor=fff)
![React Native](https://img.shields.io/badge/React_Native-0.81-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

---

## ✅ Functionalitati

- **Home (Dashboard)**: acces rapid catre module
- **BMI Calculator**: calcul + categorie
- **Stopwatch**: start, pause, reset
- **Workout History**: adaugare/stergere sesiuni, salvare locala (AsyncStorage)
- **Step Counter**:
  - citire pasi (pedometer) daca telefonul suporta
  - buton de increment manual (+1 / +10) pentru demo
- **Planuri alimentare**: lista + ecrane dedicate, fiecare cu poza

---

## 🧱 Tehnologii

- React Native + Expo
- React Navigation (Bottom Tabs + Native Stack)
- @expo/vector-icons (Ionicons)
- expo-sensors (Pedometer)
- AsyncStorage

---

## 📂 Structura proiectului

```text
FitnessApp/
├─ assets/
│  ├─ icon.png
│  ├─ adaptive-icon.png
│  ├─ splash-icon.png
│  └─ favicon.png
├─ components/
│  └─ ui.js
├─ screens/
│  ├─ HomeScreen.js
│  ├─ BMICalculator.js
│  ├─ StepCounter.js
│  ├─ Stopwatch.js
│  ├─ WorkoutHistory.js
│  ├─ PlanuriListScreen.js
│  ├─ PlanFA.js
│  ├─ PlanMI.js
│  ├─ PlanDI.js
│  ├─ PlanVEG.js
│  └─ PlanSPORT.js
├─ theme.js
├─ App.js
├─ index.js
├─ app.json
└─ package.json
```

---

## 🚀 Cum rulezi aplicatia

### Cerinte
- Node.js instalat (recomandat LTS)
- Expo Go pe telefon (Android/iOS)
- Telefonul si PC-ul pe aceeasi retea Wi-Fi (pentru conexiune LAN)

Verifica Node:
```bash
node -v
```

### Instalare
Cloneaza si intra in folder:
```bash
git clone https://github.com/<username>/<repo>.git
cd <repo>
```

Instaleaza dependintele:
```bash
npm install
```

Recomandat (compatibilitate pentru React Navigation in Expo):
```bash
npx expo install react-native-screens react-native-safe-area-context
```

### Pornire
Start normal:
```bash
npx expo start
```

Daca ai probleme (cache / bundler):
```bash
npx expo start --clear
```

### Scan QR
- Android: Expo Go -> Scan QR
- iOS: Camera -> Scan QR

## 👤 Autor
Made by Razvan Curcan

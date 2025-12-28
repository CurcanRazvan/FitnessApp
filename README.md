 #🏋️ FitnessApp (Expo + React Native)

Aplicatie de fitness construita in React Native cu Expo. Include un UI modern (cards, spacing, iconite), navigatie Tab + Stack si functionalitati utile pentru laborator: BMI, cronometru, istoricul antrenamentelor, planuri alimentare si un Step Counter cu increment manual pentru demo.

![Expo](https://img.shields.io/badge/Expo-SDK_54-000?style=for-the-badge&logo=expo&logoColor=fff)
![React Native](https://img.shields.io/badge/React_Native-0.81-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

---

## ✅ Functionalitati

- **Home (Dashboard)**: acces rapid catre module
- **BMI Calculator**: calcul + categorie
- **Stopwatch**: start, pause, reset
- **Workout History**: adaugare/anulare sesiuni, salvare locala (AsyncStorage)
- **Step Counter**:
  - citire pasi (pedometer) daca telefonul suporta
  - **buton de increment manual** pentru demo
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
├─ app.json
└─ package.json
🚀 Cum rulezi aplicatia
1) Cerinte
Node.js instalat (recomandat LTS)

Expo Go pe telefon (Android/iOS)

Verifica Node:

bash
Copy code
node -v
2) Instalare
Cloneaza si intra in folder:

bash
Copy code
git clone https://github.com/<username>/<repo>.git
cd <repo>
Instaleaza dependintele:

bash
Copy code
npm install
(Optional, recomandat pentru compatibilitate Expo):

bash
Copy code
npx expo install react-native-screens react-native-safe-area-context
3) Pornire
bash
Copy code
npx expo start -c
Se afiseaza un QR in terminal

Android: Expo Go -> Scan QR

iOS: Camera -> Scan QR

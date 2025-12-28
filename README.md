# 🏋️‍♂️ FitnessApp

Acesta este un proiect de aplicație mobilă de fitness ("all-in-one") creat în **React Native** cu **Expo**. Proiectul a fost construit în scop educațional pentru a învăța conceptele avansate de dezvoltare mobilă: navigare între ecrane, manipularea timpului (cronometru), calcule matematice în timp real (BMI) și gestionarea listelor de date.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)

---

## 📁 Structura fișierelor

Am organizat codul modular pentru a fi ușor de întreținut:

```text
FitnessApp/
├── assets/                  # Resurse statice (imagini, iconițe)
│   └── screenshots/         # Capturi de ecran pentru documentație
├── screens/                 # Ecranele principale ale aplicației
│   ├── HomeScreen.js        # Meniul principal (Dashboard)
│   ├── BMICalculator.js     # Logica de calcul pentru indicele corporal
│   ├── Stopwatch.js         # Cronometru cu funcție de "Lap"
│   ├── WorkoutHistory.js    # Lista activităților (folosind FlatList)
│   └── StepCounter.js       # (În lucru) Monitorizare pași
├── App.js                   # Configurația principală și Navigarea (Stack)
├── app.json                 # Configurări Expo
└── package.json             # Dependințe și scripturi
🚀 Cum rulezi aplicația
Dacă vrei să testezi proiectul local pe calculatorul tău, urmează acești pași:

1. Instalează Node.js și Git
Asigură-te că ai mediul pregătit. Verifică în terminal:

Bash

node -v
git --version
2. Clonează proiectul
Descarcă codul sursă de pe GitHub:

Bash

git clone [https://github.com/CurcanRazvan/FitnessApp.git](https://github.com/CurcanRazvan/FitnessApp.git)
cd FitnessApp
3. Instalează dependențele
Instalează librăriile necesare (React Navigation, Expo, etc.):

Bash

npm install
4. Pornește serverul de dezvoltare
Bash

npx expo start
5. Testează pe telefon
Descarcă aplicația Expo Go din App Store (iOS) sau Google Play (Android).

Scanează codul QR care apare în terminal.

🎮 Funcționalități implementate
Aplicația oferă un set de unelte esențiale pentru antrenament:

✅ Calculator BMI Interactiv: Introduceți greutatea și înălțimea pentru a afla indicele de masă corporală și categoria de risc.

✅ Cronometru Avansat (Stopwatch): Precizie la milisecundă, cu funcționalitate de Laps (Ture) pentru monitorizarea intervalelor.

✅ Jurnal de Antrenament: Listă dinamică unde poți vedea istoricul exercițiilor.

✅ Navigare Fluidă: Tranziții native între ecrane folosind React Navigation.

✅ Interfață Responsive: Design adaptabil folosind Flexbox, care arată bine pe diverse dimensiuni de ecran.

🧠 Ce am învățat
Dezvoltând această aplicație, am aprofundat următoarele concepte tehnice:

React Native Core: Cum se construiește o interfață folosind componente native (View, Text, TouchableOpacity, ScrollView).

State Management (useState): Gestionarea stării complexe, cum ar fi cronometrul care se actualizează la fiecare 10ms sau input-urile utilizatorului la BMI.

Lifecycle Methods (useEffect): Utilizarea hook-urilor pentru a gestiona intervalele de timp (pentru cronometru) și montarea componentelor.

React Navigation: Configurarea unui Stack.Navigator pentru a trece de la ecranul de Home la celelalte module.

Manipularea Listelor: Randarea eficientă a listelor lungi folosind componenta FlatList și map.

Stilizare: Utilizarea StyleSheet și a sistemului Flexbox pentru aliniere și layout.

Made with ❤️ by Curcan Razvan


### Ce să faci acum:
1.  Dă **Copy-Paste** la tot textul de mai sus în fișierul `README.md`.
2.  Deschide terminalul și scrie:
    ```bash
    git add .
    git commit -m "Update README profesional stil portofoliu"
    git push
    ```
3.  Verifică pe GitHub. Va arăta exact ca în modelul trimis de tine, dar personalizat pe aplicația ta.

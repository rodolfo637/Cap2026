```javascript
// Configuración de Firebase (proporcionada por el usuario)
const firebaseConfig = {
  apiKey: "AIzaSyDx51kbwTjdRL_XjbFZ352aqWGhub-eGxg",
  authDomain: "gestion-cap.firebaseapp.com",
  projectId: "gestion-cap",
  storageBucket: "gestion-cap.firebasestorage.app",
  messagingSenderId: "634447801",
  appId: "1:634447801:web:229622aa91cc10e9d17868"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Constantes del sistema (AJUSTAR SEGÚN NECESIDAD)
const DOMINIOS_PERMITIDOS = ['ejemplo.edu.ar', 'regionx.edu.ar']; // Cambiar por los dominios reales
const ZONAS_DISPONIBLES = ['zona1131', 'zona1151', 'zona1171']; // Cambiar por las zonas reales
const ESTADOS_TRAMITE = [
  'Email Recibido del CE',
  'CAP enviado a Region1',
  'CAP recibido del CE',
  'CAP devuelto a Zona',
  'CAP aprobado',
  'CAP rechazado'
];

// Exportar para uso global
window.db = db;
window.DOMINIOS_PERMITIDOS = DOMINIOS_PERMITIDOS;
window.ZONAS_DISPONIBLES = ZONAS_DISPONIBLES;
window.ESTADOS_TRAMITE = ESTADOS_TRAMITE;

```javascript
// Variables globales para el usuario actual
let currentUser = null;
let currentUserData = {
  email: '',
  nombre: '',
  sede: '',
  rol: 'secretario' // por defecto
};

// Observador de autenticación
firebase.auth().onAuthStateChanged(async (user) => {

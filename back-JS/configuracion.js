
// Importa las funciones que necesitas de los SDKs que necesitas
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";


// TODO: Reemplaza lo siguiente con la configuración del proyecto Firebase de tu aplicación
const firebaseConfig = {
  apiKey: "AIzaSyC9N9zxFkwQ7X-juSXmQKomfN05aii4XXA",
  authDomain: "dbjobsage.firebaseapp.com",
  projectId: "dbjobsage",
  storageBucket: "dbjobsage.appspot.com",
  messagingSenderId: "118928666783",
  appId: "1:118928666783:web:2fb3c9a2d2e9c89fabf2aa",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Cloud Firestore y obtén una referencia al servicio
export const db = getFirestore(app);
console.log(db)


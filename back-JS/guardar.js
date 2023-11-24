import { db } from '../back-JS/configuracion.js';

document.getElementById('tuboton').addEventListener('click', guardar);
function guardar(){
    db.collection("usuarios").add({
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        contraseña: document.getElementById('password').value,
        correo: document.getElementById('correo').value,
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}
// let botonCambio1 = document.getElementById("botonCambio1");
// let botonCambio2 = document.getElementById("botonCambio2");
// let crear = document.getElementById("crearCuenta");
// let iniciar = document.getElementById("iniciarCuenta");
let x = document.getElementById("myInput");
let y = document.getElementById("myInput2");

// botonCambio1.addEventListener('click',()=>{
// 	crear.style.display = "none";
// 	iniciar.style.display = "block";
// });

// botonCambio2.addEventListener('click',()=>{
// 	iniciar.style.display = "none";
// 	crear.style.display = "block";
// });

function myFunctionRegister() {
	if (x.type && y.type === "password") {
	  x.type = "text";
	  y.type = "text";
	} else {
	  x.type = "password";
	  y.type = "password";
	}
}

function myFunctionLogin() {
	if (x.type === "password") {
	  x.type = "text";
	} else {
	  x.type = "password";
	}
}
let botonCambio1= document.getElementById("botonCambio1");
let botonCambio2=document.getElementById("botonCambio2");
let crear= document.getElementById("crearCuenta");
let iniciar=document.getElementById("iniciarCuenta");

botonCambio1.addEventListener('click',()=>{
	crear.style.display="none";
	iniciar.style.display="block";
});

botonCambio2.addEventListener('click',()=>{
	iniciar.style.display="none";
	crear.style.display="block";
});
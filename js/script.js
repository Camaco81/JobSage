let botonDesplegable = document.getElementById('botonDesplegable');
let menu = document.getElementById('menu');
let clasOculatar = document.querySelector('.oculto');
let iconList = document.querySelector('.bi-list')


botonDesplegable.addEventListener('click',()=>{
	menu.classList.toggle('oculto');
	menu.classList.toggle('motrar');
	
});
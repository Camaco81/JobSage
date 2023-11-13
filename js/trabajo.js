
let menu = document.getElementById("menu")
let botonOpen = document.getElementById("open");
let botonClose = document.getElementById("close");

botonOpen.addEventListener("click",()=>{
	menu.style.display="flex"
})

botonClose.addEventListener("click",()=>{
	menu.style.display="none";
});
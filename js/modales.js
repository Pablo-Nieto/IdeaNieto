const carritoAbrir = document.getElementById('boton-carrito');
const carritoCerrar = document.getElementById('carritoCerrar');

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

carritoAbrir.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active')
})
carritoCerrar.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active')
})
modalCarrito.addEventListener('click',(e)=>{
    e.stopPropagation()
})
contenedorModal.addEventListener('click', ()=>{
    carritoCerrar.click()
})

let cerrar = document.querySelectorAll(".close") [0];
let abrir = document.querySelectorAll(".botonComprar") [0];
let modal = document.querySelectorAll(".modal") [0];
let modalContainer = document.querySelectorAll(".modal-container") [0];

abrir.addEventListener('click', ()=> {
    modalContainer.classList.toggle('modal-container-active')
})
cerrar.addEventListener('click', ()=> {
    modalContainer.classList.toggle('modal-container-active')
})

modal.addEventListener('click',(e)=>{
    e.stopPropagation()
})
modalContainer.addEventListener('click', ()=>{
    cerrar.click()
})





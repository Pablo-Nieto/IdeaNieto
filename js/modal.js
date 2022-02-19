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




const formularioAbrir = document.getElementById('botonComprar');
const formularioCerrar = document.getElementById('botonCancelar');

const compraModal = document.getElementsByClassName('modal-compra')[0]
const modalForm = document.getElementsByClassName('modal-form')[0]

formularioAbrir.addEventListener('click', ()=> {
    compraModal.classList.toggle('modal-active')
})
formularioCerrar.addEventListener('click', ()=> {
    compraModal.classList.toggle('modal-active')
})
modalForm.addEventListener('click',(e)=>{
    e.stopPropagation()
})
modalForm.addEventListener('click', ()=>{
    formularioCerrar.click()
})
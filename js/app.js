
/*Desafío*/

//variables globales

let carritoDeCompras = []
let stockProductos = []
const contenedorProductos = document.getElementById('contenedor__productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecTipo = document.getElementById('selecTipo');
const buscador = document.getElementById('search')

//Filtro con uso de operador ternario 

selecTipo.addEventListener('change', ()=>{
  selecTipo.value == "todos" ? mostrarProductos(stockProductos) : mostrarProductos(stockProductos.filter(el=>el.tipo == selecTipo.value))
  })


//buscador con uso de operador ternario
buscador.addEventListener('input', ()=>{
   buscador.value == "" ? mostrarProductos(stockProductos) : mostrarProductos(stockProductos.filter(el => el.nombre.toLowerCase().includes(buscador.value.toLowerCase())))
})

const setData = async () => {
    try{
        const result = await fetch("stock.json");
        const data = await result.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

setData();

fetch('stock.json')
    .then(Response => Response.json())
    .then(data => {mostrarProductos(data)
        data.forEach(el => stockProductos.push(el))})
    .catch(error => console.log(error));
            
    
//Lógica de E-commerce
//mostrarProductos(stockProductos)

function mostrarProductos(array) {
  contenedorProductos.innerHTML = "";
  for (const producto of array) {
    const {img, nombre,  tipo, precio, id} = producto //desestructuración
    let div = document.createElement('div')
    div.className = 'producto'
    div.innerHTML = `
                    <div class="card">
                         <img src=${img} class="imagen">   
                         <span class="card-title">${nombre}</span>
                         </div>
                         <div class="card-content">
                              <p>Tipo: ${tipo}</p>
                              <p> precio: $${precio}</p> 
                              <button id="botonAgregar${id}" class="boton">Agregar al carrito</button> 
                         </div>
                    </div>
    `
    contenedorProductos.appendChild(div);

    let btnAgregar = document.getElementById(`botonAgregar${producto.id}`)

    btnAgregar.addEventListener('click', ()=>{
        agregarAlCarrito(producto.id)
            Toastify({
                text: "🛒 Producto agregado",
                className: "info",
                style: {
                background: "#29D552",
              }
            }).showToast();
        })
    }
}


function agregarAlCarrito(id) {
    let repetido = carritoDeCompras.find(item => item.id == id)
    if(repetido){
        console.log(repetido?.nombre || "el producto no ha sido encontrado"); //ACCESO CONDICIONAL A UN OBJETO
        repetido.cantidad += 1    
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id= cantidad${repetido.id}>Cantidad:${repetido.cantidad}</p>`
        actualizarCarrito()
    }else{

        let productoAgregar = stockProductos.find(elemento => elemento.id == id)
        console.log(productoAgregar?.nombre || "el producto no ha sido encontrado"); //ACCESO CONDICIONAL A UN OBJETO
        carritoDeCompras = [...carritoDeCompras, productoAgregar]  //uso de spread
        actualizarCarrito()
        mostrarCarrito(productoAgregar)
        
    }
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
}  




function mostrarCarrito(productoAgregar){
    let div = document.createElement('div')
        div.className = 'productoEnCarrito'
        div.innerHTML =`
                        <p>${productoAgregar.nombre}</p>
                        <p>Precio: $${productoAgregar.precio}</p>
                        <p id= cantidad${productoAgregar.id}>Cantidad:${productoAgregar.cantidad}</p>
                        <button id=botonEliminar${productoAgregar.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)
    
        let btnEliminar = document.getElementById(`botonEliminar${productoAgregar.id}`)
        btnEliminar.addEventListener('click',()=>{
            if (productoAgregar.cantidad == 1){
                btnEliminar.parentElement.remove()                         
                carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id != productoAgregar.id)
                actualizarCarrito()
                localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
                Toastify({
                        text: "✖ Producto eliminado",
                        className: "info",
                        style: {
                        background: "#FF0000",
                      }
                    }).showToast();
            }else {
                 productoAgregar.cantidad -= 1
                document.getElementById(`cantidad${productoAgregar.id}`).innerHTML = `<p id= cantidad${productoAgregar.id}>Cantidad:${productoAgregar.cantidad}</p>`
                actualizarCarrito()
                localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
                Toastify({
                  text: "✖ Producto eliminado",
                  className: "info",
                  style: {
                    background: "#FF0000",
                  }
                }).showToast();
            }     
        })
}

//función para actualizar el carrito
document.getElementById('botonVaciar').style.display = 'none';
document.getElementById('botonComprar').style.display = 'none';

function actualizarCarrito() {
    if(carritoDeCompras.length > 0) {
        document.getElementById('botonVaciar').style.display = 'inline-block'
        document.getElementById('botonComprar').style.display = 'inline-block'
    }else{
        document.getElementById('botonVaciar').style.display = 'none'
        document.getElementById('botonComprar').style.display = 'none'
    }
    contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)
}


//función para guardar la información en el LocalStorage
function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito')) || []  //operador lógico OR

        recuperarLS.forEach(element => {
            mostrarCarrito(element)
            carritoDeCompras.push(element)
            actualizarCarrito()
        });   
}

recuperar()


// boton para vaciar el carrito

const btnVaciar = document.getElementById('botonVaciar')

btnVaciar.addEventListener('click',()=>{

   vaciarCarrito()

   Toastify({
      text: "Carrito vacío",
      className: "info",
      style: {
        background: "#FF0000",
      }
    }).showToast();
})


function vaciarCarrito() {
    carritoDeCompras = []
    stockProductos.map(el=> el.cantidad = 1)
    contenedorCarrito.innerHTML = "";
    localStorage.clear();
    actualizarCarrito();
} 




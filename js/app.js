
/*2ºDa preentrega*/

//variables globales
let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor__productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecTipo = document.getElementById('selecTipo');
const buscador = document.getElementById('search')

//Filtro 

selecTipo.addEventListener('change', ()=>{
  selecTipo.value == "todos" ? mostrarProductos(stockProductos) : mostrarProductos(stockProductos.filter(el=>el.tipo == selecTipo.value))
  })


//buscador
buscador.addEventListener('input', ()=>{
   buscador.value == "" ? mostrarProductos(stockProductos) : mostrarProductos(stockProductos.filter(el => el.nombre.toLowerCase().includes(buscador.value.toLowerCase())))
})


//Lógica de E-commerce
mostrarProductos(stockProductos)

function mostrarProductos(array) {
  contenedorProductos.innerHTML = "";
  for (const producto of array) {
    const {img, nombre,  tipo, precio, id} = producto
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
    })
  }
}

function agregarAlCarrito(id) {
    let repetido = carritoDeCompras.find(item => item.id == id)
    if(repetido){
        console.log(repetido?.nombre || "el producto no ha sido encontrado");
        repetido.cantidad = repetido.cantidad + 1
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id= cantidad${repetido.id}>Cantidad:${repetido.cantidad}</p>`
        actualizarCarrito()
    }else{

        let productoAgregar = stockProductos.find(elemento => elemento.id == id)
        console.log(productoAgregar?.nombre || "el producto no ha sido encontrado");
        carritoDeCompras.push(productoAgregar)
        actualizarCarrito()
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
            }else {
                 productoAgregar.cantidad = productoAgregar.cantidad - 1
                document.getElementById(`cantidad${productoAgregar.id}`).innerHTML = `<p id= cantidad${productoAgregar.id}>Cantidad:${productoAgregar.cantidad}</p>`
                actualizarCarrito()
            }     
        })
    }
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
}  



//función para actualizar el carrito
function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)
}


//función para guardar la información en el LocalStorage
function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    if(recuperarLS){
        recuperarLS.forEach(element => {
            agregarAlCarrito(element.id)
        });
    }
}

recuperar()

// boton para vaciar el carrito
const btnVaciar = document.getElementById('botonVaciar')
btnVaciar.addEventListener('click',()=>{
   vaciarCarrito()
})


function vaciarCarrito() {
    carritoDeCompras = []
    stockProductos.map(el=> el.cantidad = 1)
    contenedorCarrito.innerHTML = "";
    localStorage.clear();
    actualizarCarrito();
} 





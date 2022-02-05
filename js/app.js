
/*desafío*/

//uso de un array para contener dentro la lista de objetos (mis productos)


let stockProductos = [
    {id: 1, nombre: "Yerba Roapipo", tipo: "yerba agroecológica", precio: 388.43, descuento: 70, img: 'assets/img/roapipo.jpg'},
    {id: 2, nombre: "Yerba Kalena", tipo: "yerba agroecológica", precio: 388.43, descuento: 70, img: 'assets/img/kalena.jpg'},
    {id: 3, nombre: "Yerba Coffee", tipo: "yerba blend", precio: 669.42, descuento: 100, img: 'assets/img/matecoffee.png'},
    {id: 4, nombre: "Yerba Flower Power", tipo: "yerba blend", precio: 669.42, descuento: 100, img: 'assets/img/mateflower.png'},
    {id: 5, nombre: "Yerba Ginger Mate", tipo: "yerba blend", precio: 669.42, descuento: 100, img: 'assets/img/mateginger.png'},
    {id: 6, nombre: "Yerba Tres Mentas", tipo: "yerba blend", precio: 669.42, descuento: 100, img: 'assets/img/matementas.png'},
    {id: 7, nombre: "Té Frutos Rojos", tipo: "té en hebras", precio: 454.54, descuento:50, img: 'assets/img/tefrutosrojos.jpg'},
    {id: 8, nombre: "Té Mango", tipo: "té en hebras", precio: 454.54, descuento: 50, img: 'assets/img/temango.jpg'},
    {id: 9, nombre: "Té Maracuyá", tipo: "té en hebras", precio: 454.54, descuento: 50, img: 'assets/img/temaracuya.jpg'},
    {id: 10, nombre: "Té Chocolate y Menta", tipo: "té en hebras", precio: 454.54, descuento: 50, img: 'assets/img/tecym.jpg'},
]

const contenedorProductos = document.getElementById('contenedor__productos');
const selecTipo = document.getElementById('selecTipo');

selecTipo.addEventListener('change', ()=>{
  console.log(selecTipo.value)
  if(selecTipo.value == "todos"){
    mostrarProductos(stockProductos)
  }
  else{
    mostrarProductos(stockProductos.filter(el=>el.tipo == selecTipo.value))
  }
})


mostrarProductos(stockProductos)

function mostrarProductos(array) {
  contenedorProductos.innerHTML = "";
  array.forEach(producto =>{
    let div = document.createElement('div')
    div.className = 'producto'
    div.innerHTML = `
                    <div class="card">
                            <img src=${producto.img} class="imagen">   
                            <span class="card-title titulo">${producto.nombre}</span> 
                            </div>
                            <div class="card-content">
                                <p>Tipo: ${producto.tipo}</p>
                                <p>descuento: $${producto.descuento}</p>
                                <p> precio: $${producto.precio}</p> 
                                <button class="boton">Agregar al carrito</button>
                            </div>
                    </div>
    `
    contenedorProductos.appendChild(div)
  })
}

let carritoDeCompras = []

agregarAlCarrito()

function agregarAlCarrito() {//esta función permite agregar al carrito mi producto, eligiendo por prompt el "id" correspondiente

    let elijoProducto = parseInt(prompt('ingrese el ID de su producto en caso de querer comprar')) 

    let productoAgregar = stockProductos.find((el) => el.id == elijoProducto)
    carritoDeCompras.push(productoAgregar)
     console.log(carritoDeCompras)
    actualizarCarrito()
    
}

function actualizarCarrito() {//mediante esta función se calcula el valor final del producto con el iva y el descuento incluidos
    console.log('cantidad de productos agregados ' + carritoDeCompras.length)
    let suma = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)
    let descuento = carritoDeCompras.reduce((acc, el) => acc + el.descuento, 0)
    let iva = suma * 0.21
    console.log('la suma total de su Carrito es $' + ((suma + iva) - descuento).toFixed(2))
}

const existe = stockProductos.some(producto => producto.nombre == "Yerba Playadito")
console.log(existe); //el método some permite saber si existe o no determinado objeto dentro de mi array

const baratos = stockProductos.filter(producto => producto.precio < 400)
console.log(baratos);
//el método filter permite mostrar los productos dentro del array, cuyo precio  sea menor a 400

let usuario = document.getElementById("usuario");
let contraseña = document.getElementById("contraseña");

usuario.onchange = () => {console.log(usuario.value)};
contraseña.onchange = () => {console.log(contraseña.value)};
//Muestra por consola los datos ingresados por el usuario


























/*desafío complementario*/

//solicita nombre y apellido al usuario mediante un prompt, con el uso de condicionales para devolver distintos mensajes, dependiendo si llena o no los espacios

let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if ((nombreIngresado !="") && (apellidoIngresado !="")) {
    alert("Bienvenido/a: "+ nombreIngresado + apellidoIngresado);
}

else {
    alert("No ingresó ningún dato");
}

//uso de while para preguntar al usuario si desea comprar y el uso de un prompt para que finalice el ciclo

let entrada =prompt("¿Le gustaría comprar?").toLowerCase();

while(entrada != "aceptar"){
   switch (entrada) {
       case "si":
            alert("Desea comprar");
            break;
       default:
           alert("No desea comprar");
           break;
   }
   entrada = prompt("Para continuar escriba 'aceptar'.");
}

//uso de un array para contener dentro la lista de objetos (mis productos)


let stockProductos = [
    {id: 1, nombre: "Yerba Roapipo", tipo: "yerba agroecológica", precio: 388.43, descuento: 70},
    {id: 2, nombre: "Yerba Kalena", tipo: "yerba agroecológica", precio: 388.43, descuento: 70},
    {id: 3, nombre: "Yerba Coffee", tipo: "yerba blend", precio: 669.42, descuento: 100},
    {id: 4, nombre: "Yerba Flower Power", tipo: "yerba blend", precio: 669.42, descuento: 100},
    {id: 5, nombre: "Yerba Ginger Mate", tipo: "yerba blend", precio: 669.42, descuento: 100},
    {id: 6, nombre: "Yerba Tres Mentas", tipo: "yerba blend", precio: 669.42, descuento: 100},
    {id: 7, nombre: "Té Frutos Rojos", tipo: "té en hebras", precio: 454.545, descuento:50},
    {id: 8, nombre: "Té Mango", tipo: "té en hebras", precio: 454.545, descuento: 50},
    {id: 9, nombre: "Té Maracuyá", tipo: "té en hebras", precio: 454.545, descuento: 50},
    {id: 10, nombre: "Té Chocolate y Menta", tipo: "té en hebras", precio: 454.545, descuento: 50},
]

let carritoDeCompras = []

function mostrarProductos() {//muestra los productos en la consola
    stockProductos.forEach((producto)=>{
        console.log(producto);
    })
}

mostrarProductos()

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





/*Ejemplo 1: función simple para dar la bienvenida*/

/*function Saludar () {
	alert("Bienvenidos/as")
}

Saludar();*/

/*Ejemplo 2: función simple para hacer una suma con números predeterminados y con números ingresados por el usuario*/ 

/*function suma () {
	let num1 = 10;
	let num2 = 20;
	let resultado = num1 + num2; 
	alert (resultado);
}

suma();*/

/*function suma() {
	let num1 = parseInt(prompt("ingrese un número"));
	let num2 = parseInt(prompt("ingrese un segundo número"));
	let resultado = num1 + num2;
	alert(resultado);
}

suma();*/


/*Ejemplo 3:función con parámetros para realizar una resta*/

/*function resta (num1 , num2) {
	let result = num1 - num2;
	alert("El resultado de tu resta es " + result);
}

resta(30 , 10);
resta(320 , 210);
resta( 50 , 85);
resta(80 , 40);*/


/*ejemplo 4:*/

/*function resta (num1 , num2 , num3) {
	let result = (num1 - num2) * num3;
	alert("El resultado de tu resta es " + result);
}

resta(30 , 10 , 2);*/


/*ejercicio 5:función con parámetros y el uso de "string"*/

/*function identidad ( nombre , apellido) {
	let identificación = "Pablo " + "Nieto";
	alert(identificación);
}

identidad();*/


/*ejercicio 6:ejemplo aplicando return*/

/*function suma (n1 , n2) {
	return n1 + n2;
}

let resultado = suma(10 , 50);
let resultado2 = suma(50 , 90);
let resultado3 = suma(-20 , 70);

alert( "primer resultado:" + resultado + " segundo resultado:" + resultado2 + " tercer resultado:" + resultado3);*/


/*ejercicio 7:calculadora funcional con datos ingresados por el usuario (ejemplo mio)*/

/*let numero1 = parseInt(prompt("ingrese un número"));
let numero2 = parseInt(prompt("ingrese un segundo número"));
let signo = prompt("ingrese un signo");
function calculadora(numero1, numero2, operacion) {
    switch (operacion) {
        case "+":
            return numero1 + numero2;
            break;
        case "-":
            return numero1 - numero2;
            break;
        case "*":
            return numero1 * numero2;
            break;
        case "/":
            return numero1 / numero2;
            break;
        default:
            return 0;
            break;
    }
}
alert(calculadora(numero1, numero2, signo));*/

/*ejercicio 7:calculadora del ejemplo de la diapositiva (con datos predeterminados)*/

/*function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10, 5, "*"));*/


/*ejercicio 8:explicación de scope con ejemplos*/

/*
//El scope o ámbito de una variable es la zona del programa en la cual se define, el contexto al que pertenece la misma dentro de un algoritmo, restringiendo su uso y alcance.
//JavaScript define dos ámbitos para las variables: global y local.

//Si una variable se declara fuera de cualquier función o bloque, automáticamente se transforma en variable global. Y puede ser referenciada desde cualquier punto del programa
ejemplo 1:
let resultado = 0
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}
sumar(5,6);
//Se puede acceder a la variable resultado porque es global
console.log(resultado);

//Cuando definimos una variable dentro de una función o bloque es una variable local,  y será accesible sólo dentro de ese espacio. Si queremos utilizarla por fuera, la variable no existirá para JS.
ejemplo 2:
function sumar(primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero;
}
//No se puede acceder a la variable resultado fuera del bloque
console.log(resultado);

//Hay que entender que las variables globales y locales se identifican como diferentes entre sí, y pueden existir en el programa bajo el mismo nombre sin conflicto.
ejemplo 3:
let nombre = “John Doe” // variable global

function saludar() {
    let nombre = “Juan Coder” // variable local
    console.log(nombre)
}
//Accede a nombre global
console.log(nombre)   // → “John Doe”

//Accede a nombre local
saludar() // → “Juan Coder”

//Entender que cada scope local es un espacio cerrado nos permite crear bloques de trabajo bien diferenciados e independientes, sin preocuparnos por repetir nombres de variables,
 //sabiendo que se entienden como diferentes según dónde las llamemos.
ejemplo 4:
function sumar(num1, num2) {
     let resultado = num1 + num2
	 return resultado
}

function restar(num1, num2) {
     let resultado = num1 - num2
	 return resultado
}*/


/*ejercicio 9:calcular el precio del producto*/

/*const suma  = (a,b) => a + b //es una variable que en vez de tener un valor de un dato, tiene el valor de una función
const resta = (a,b) => a - b
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21 //en este caso "x" hace referencia a la variable precioProducto
let precioProducto  = 500
let descuento = 50 
//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
console.log(nuevoPrecio)*/

/*explicación: La función iva toma el valor de la variable "precioProducto" (500) y calcula el 21%. Luego con la variable suma aplica la función de sumar 500 + 105 (500 * 0.21).
 Para luego con la variable resta, restar el resultado de esa suma, por el valor de la variable "descuento" (50).
 Dandome como resultado el valor de la variable "nuevoPrecio" que luego será mostrada mediante un conole.log */



/*desafío*/

let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if ((nombreIngresado !="") && (apellidoIngresado !="")) {
	alert("Bienvenido/a: "+ nombreIngresado + apellidoIngresado);
}

else {
	alert("No ingresó ningún dato");
}

let entrada = parseInt(prompt("elegir línea de productos: 1-Yerbas agroecológicas 2-Yerbas blend 3-té en hebras (escriba el número correspondiente a la línea)"));

while(entrada != "aceptar"){
   switch (entrada) {
       case 1:
            alert("eligió Yerbas agroecológicas");
            break;
        case 2:
            alert("sin stock");
            break;
        case 3:
            alert("sin stock");
            break;
       default:
           alert("No seleccionó ninguna línea");
           break;
   }
   entrada = prompt("Para continuar escriba 'aceptar'.");
}

let entrada2 = parseInt(prompt("Si eligió la línea de yerbas agroecológicas seleccione: 1-Yerba Roapipo 2-Yerba Kalena (escriba el número correspondiente al Producto)"));

while(entrada2 != "aceptar"){
	switch (entrada2) {
		case 1:
			alert("Eligió Yerba Roapipo");
			break;
		case 2:
			alert("Eligió Yerba Kalena");
			break;
		default:
			alert("No seleccionó ningún producto");
			break;
	}
	entrada2 = prompt("Para continuar escriba 'aceptar'.");
}


const suma  = (a,b) => a + b
const resta = (a,b) => a - b
const iva = x => x * 0.21
let valorUnitario  = 300
let descuento = 70 

let valorFinal = resta(suma(valorUnitario, iva(valorUnitario)), descuento) 
alert ("Precio total: $" + valorFinal);

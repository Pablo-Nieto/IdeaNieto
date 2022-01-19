
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

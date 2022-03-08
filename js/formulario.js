//declaracion de constantes

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')

//Creo expresiones donde pido ciertas condiciones para los inputs

const expresiones = {
	nombre: /^[a-zA-ZÁ-ÿ\s]{3,20}$/, 
    apellido: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    domicilio: /^[a-zA-ZÀ-ÿ\s0-9.\s]{1,30}$/,
    numeroTarjeta: /^[0-9\s]{19}$/,
    nombreTarjeta: /^[a-zA-ZÁ-ÿ\s]{3,20}$/,
    expiracion:/^[0-9\W]{5}$/,
    codigoSeguridad:/^\d{3,4}$/,
}

// los inputs tienen un valor falso al inicio
const campos = {
	nombre: false,
	apellido: false,
	correo: false,
	domicilio: false,
	numeroTarjeta: false,
    nombreTarjeta: false,
    expiracion: false,
    codigoSeguridad: false
}

//validacion del formulario
const validarFormulario = (e) => {
   switch  (e.target.name) {
       case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
       break;
       case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
       break;
       case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
       break;
       case "domicilio":
            validarCampo(expresiones.domicilio, e.target, 'domicilio');
       break;
       case "numeroTarjeta":
            validarCampo(expresiones.numeroTarjeta, e.target, 'numeroTarjeta');
       break;
       case "nombreTarjeta":
            validarCampo(expresiones.nombreTarjeta, e.target, 'nombreTarjeta');
       break;
       case "expiracion":
            validarCampo(expresiones.expiracion, e.target, 'expiracion');
       break;
       case "codigoSeguridad":
            validarCampo(expresiones.codigoSeguridad, e.target, 'codigoSeguridad');
       break;
   }
}

//validacion de inputs
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

//validacion de caracteres al presionar teclas
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

//validacion el formulario al enviarse
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.apellido && campos.nombre && campos.domicilio && campos.correo && campos.codigoSeguridad &&terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 4000);
	}
});





//funcion para finalizar la simulacion de compra
const btnPagar = document.getElementById('botonPagar')

btnPagar.addEventListener('click', () =>
    finalizarCompra() 
)

function finalizarCompra() {
   contenedorCarrito.innerHTML = `<p>compra procesada</p>`
   carritoDeCompras = []
   localStorage.clear()
   actualizarCarrito()
   setTimeout(()=>{
   contenedorCarrito.innerHTML = ""
   actualizarCarrito()
    }, 3000)
}
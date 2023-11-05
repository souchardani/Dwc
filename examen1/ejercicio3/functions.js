const PATTERN = /^[A-Za-záéíóúÑñ\s]+$/;
let edadPersona;
let nombrePersona;
let emailPersona;

//error 1: no se llama a la funcion inicio
document.addEventListener("DOMContentLoaded", inicio);

function inicio() {
  edadPersona = document.getElementById("edad");
  nombrePersona = document.getElementById("nombre");
  emailPersona = document.getElementById("email");

  //error2: asignar el displaynone solo al array de elementos con la clase informacion
  let oculto = document.getElementsByClassName("informacion");
  oculto[0].style.display = "none";
  //error3: llamar a la funcion validar en vez de validarformulario
  document.getElementById("validar").addEventListener("click", (e) => {
    //error 8: falta el prevent default del boton para que no se recargue la pagina
    e.preventDefault();
    validar();
  });
  document
    .querySelector("input[type=button]")
    .addEventListener("click", limpiar);
}

function limpiar() {
  window.location.reload();
}

function validarFormulario(e) {
  //error4: no llamar a la funcion validar
  //error5: cambiar el orden de display block
  //error6: no llamar al elemento del array informacion
  document.getElementsByClassName("informacion")[0].style.display = "block";
  let actividadSelect = document.getElementById("actividad");
  actividadSelect.addEventListener("change", mostrarInformacion);
}

function mostrarInformacion(e) {
  let opcion = e.target.value;
  console.log(opcion);
  let texto = document.getElementById("info");
  let textoError = document.getElementById("errorAct");

  //error11: comparacion de texto mal hecha
  //error12: edadpersona.value
  //errror13: que el value en vez de ser riesgo es 3
  if (opcion == 3 && edadPersona.value < 18) {
    textoError.innerHTML = "No puedes seleccionar esta actividad";
  } else {
    textoError.innerHTML = "";
    texto.innerHTML =
      "Gracias " +
      nombrePersona.value +
      ". Te enviamos al mail la información solicitada sobre la actividad.";
  }
}

function validar() {
  //error9: recargamos los valores del campo de texto
  inicio();
  //error7: comillas en el id
  let formularioError = document.getElementById("formError");
  let error = "";

  if (edadPersona.validity.valueMissing) {
    error = "La edad es un campo obligatorio.";
  }

  if (nombrePersona.validity.valueMissing) {
    error = "El nombre es un campo obligatorio.";
  }

  if (emailPersona.validity.valueMissing) {
    error = "El mail es un campo obligatorio.";
  }

  //error14: nombrepersona.value && patterns false
  if (!PATTERN.test(nombrePersona.value)) {
    error = "El nombre solo debe de contener letras o espacios.";
  }

  if (error != "") {
    //error10 : en vez de value es textContent
    formularioError.textContent = error;
  } else {
    formularioError.textContent = "";
    validarFormulario();
  }
}

let nombre;
let puntuacion;
let pais;
let tabla;

document.addEventListener("DOMContentLoaded", init);

function init() {
  //botones
  const btnCrear = document.querySelector("#enviar");
  const btnBorrar = document.querySelector("#borrar");
  const tabletr = document.querySelectorAll("tr");

  //campos del formulario

  btnCrear.addEventListener("click", validar);
  btnBorrar.addEventListener("click", borrarUltimo);

  tabletr.forEach((elemento) => {
    elemento.addEventListener("mouseenter", (event) => {
      event.target.style.background = "red";
    });

    elemento.addEventListener("mouseleave", (event) => {
      event.target.style.background = "";
    });
  });
}

function validar() {
  //obtenemos los valores de los campos del formulario
  obtenerValues();
  //los tres campos deben ser obligatorios
  let campos = obligatorios();
  if (campos) {
    //El campo de nombre solo puede contener caracteres alfabéticos
    let validnombre = validarCampo(nombre);
    if (validnombre) {
      let nota = validarNota();
      if (nota) {
        let validpais = validarCampo(pais);
        if (validpais) anadirElemento();
      }
    }
  }
}

function anadirElemento() {
  obtenerValues();
  const tr = document.createElement("tr");
  tbody.append(tr);
  //td1
  const td1 = document.createElement("td");
  td1.textContent = nombre.value;

  //td2
  const td2 = document.createElement("td");
  td2.textContent = puntuacion.value;

  //td3
  const td3 = document.createElement("td");
  const imgtd3 = document.createElement("img");
  imgtd3.src = `img/${pais.value}.png`;
  td3.append(imgtd3);
  //añadimos elementos al html
  tr.append(td1);
  tr.append(td2);
  tr.append(td3);
  //al final borramos el formulario
  borrarFormulario();
  init();
}

function borrarUltimo() {
  obtenerValues();
  const ultimo = tbody.querySelector("tr:last-child");
  if (ultimo == tbody.querySelector("tr:nth-child(1)")) {
    console.log("no puedes borrar la cabecera");
  } else {
    tbody.removeChild(ultimo);
  }
}

function borrarFormulario() {
  pais.value = "";
  nombre.value = "";
  puntuacion.value = "";
}

function obtenerValues() {
  tabla = document.querySelector("#participantes");
  tbody = tabla.querySelector(":first-child");
  nombre = document.querySelector("#nombre");
  puntuacion = document.querySelector("#puntuacion");
  pais = document.querySelector("#pais");
}

function obligatorios() {
  let confirmado;
  nombre.value == "" || puntuacion.value == "" || pais.value == ""
    ? alert("Todos los campos son obligatorios")
    : (confirmado = true);
  return confirmado;
}

function validarCampo(texto) {
  let expresion = /^[a-zA-ZáéíóúñÁÉÍÓÚÑs\s]+$/g;
  let validado = expresion.test(texto.value);
  if (!validado) alert(`El ${texto.id} esta mal escrito`);
  return validado;
}

function validarNota() {
  let validado;
  puntuacion.value >= 0 && puntuacion.value <= 100
    ? (validado = true)
    : (validado = false);
  if (!validado) alert("la nota debe estar entre 0 y 100");
  return validado;
}

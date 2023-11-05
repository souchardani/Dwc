let txtNombre;
let txtPuntuacion;
let txtPais;
let btnAnadir;

document.addEventListener("DOMContentLoaded", function () {
  //botones
  btnAnadir = document.getElementById("enviar");
  btnAnadir.addEventListener("click", anadirFila);
  btnEliminar = document.getElementById("borrar");
  btnEliminar.addEventListener("click", eliminarFila);
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("blur", (e) => {
      console.log(e.target);
      if (e.target.value == "") {
        alert(`Debes completar el campo ${e.target.name}`);
      }
    });
  });
});

function obtenerValores() {
  //1 obtener los valores de las cajas de texto
  //textos
  txtNombre = document.getElementById("nombre");
  txtPuntuacion = document.getElementById("puntuacion");
  txtPais = document.getElementById("pais");
}

function anadirFila() {
  validado = validar();
  if (validado) {
    obtenerValores();
    let tr = document.createElement("tr");
    let tdNombre = document.createElement("td");
    tdNombre.textContent = txtNombre.value;
    let tdPuntuacion = document.createElement("td");
    tdPuntuacion.textContent = txtPuntuacion.value;
    let tdPais = document.createElement("td");
    let img = document.createElement("img");
    img.src = `/img/${txtPais.value}.png`;
    tdPais.appendChild(img);
    tr.appendChild(tdNombre);
    tr.appendChild(tdPuntuacion);
    tr.appendChild(tdPais);
    //obtenemos la tabla
    let tabla = document.getElementById("participantes");
    tabla.append(tr);
    borrarFormulario();
  }
}

function eliminarFila() {
  //obtenemos la tabla
  let tabla = document.getElementById("participantes");
  let ultimotr = tabla.querySelectorAll("tr");
  if (ultimotr.length > 1) {
    tabla.removeChild(ultimotr[ultimotr.length - 1]);
  }
}

function borrarFormulario() {
  txtNombre.value = "";
  txtPuntuacion.value = "";
  txtPais.value = "";
}

function validar() {
  obtenerValores();
  let validado = false;
  validarCampos();
}

let txtNombre;
let txtPuntuacion;
let txtPais;
let btnAnadir;
let inputs;

document.addEventListener("DOMContentLoaded", function () {
  //botones
  btnAnadir = document.getElementById("enviar");
  btnAnadir.addEventListener("click", anadirFila);
  btnEliminar = document.getElementById("borrar");
  btnEliminar.addEventListener("click", eliminarFila);
  inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("blur", (e) => {
      validarVacio(e);
    });
  });
});

function obtenerValores() {
  //1 obtener los valores de las cajas de texto
  //textos
  txtNombre = document.getElementById("nombre");
  txtPuntuacion = document.getElementById("puntuacion");
  txtPais = document.getElementById("pais");
  inputs = document.querySelectorAll("input");
}

function anadirFila() {
  let validado = validar();
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
  let campos = validarCampos();
  if (campos) {
    let validNombre = validarTexto(txtNombre);
  }
}

function validarVacio(e) {
  if (e.target.value == "") {
    alert(`Debes completar el campo ${e.target.name}`);
  }
}

function validarCampos() {
  obtenerValores();
  let alguno = 0;
  inputs.forEach((input) => {
    if (input.value == "") {
      alguno++;
    }
    if (alguno > 0) {
      return false;
    } else {
      return true;
    }
  });
}

function validarTexto() {}

let txtNombre;
let txtApellido;
let inputs;
let inputMarcas;
let form;
// let coches = [
//   {
//     marca: "Mercedes",
//     modelos: ["mercedes1", "mercedes2", "mercedes3"],
//   },
//   {
//     marca: "BMW",
//     modelos: ["BMW1", "BMW2", "BMW3"],
//   },
//   {
//     marca: "toyota",
//     modelos: ["toyota1", "toyota2", "toyota3"],
//   },

// ];
const coches = {
  toyota: ["Corolla", "Camry", "Rav4"],
  honda: ["Civic", "Accord", "CR-V"],
  ford: ["Fiesta", "Focus", "Mustang"],
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  txtNombre = document.getElementById("Nombre");
  txtApellido = document.getElementById("Apellido");
  inputs = document.querySelectorAll(
    "input[type=text],textarea,select,input[type=radio],input[type=number], input[type=email]"
  );
  inputMarcas = document.getElementById("marca");
  inputMarcas.addEventListener("change", cargarModelo);
  colortxt();
  cargarMarcas();
  form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    validar(e);
  });
}

function colortxt() {
  inputs.forEach((element) => {
    element.addEventListener("focus", () => {
      element.style.backgroundColor = "gray";
    });
  });
  inputs.forEach((element) => {
    element.addEventListener("blur", () => {
      element.style.backgroundColor = "white";
    });
  });
}

function cargarMarcas() {
  //   coches.forEach((element) => {
  //     let option = document.createElement("option");
  //     option.textContent = element.marca;
  //     option.value = element.marca;
  //     inputMarcas.appendChild(option);
  //   });
  Object.keys(coches).forEach((key) => {
    let option = document.createElement("option");
    option.textContent = key;
    option.value = key;
    inputMarcas.appendChild(option);
  });
}

function cargarModelo() {
  inputMarcas = document.getElementById("marca");
  let valor = inputMarcas.value;
  console.log(valor);
  inputModelo = document.getElementById("modelo");
  inputModelo.innerHTML = "";
  coches[valor].forEach((element) => {
    let option = document.createElement("option");
    option.textContent = element;
    option.value = element;
    inputModelo.appendChild(option);
  });
}

function validar(e) {
  let isValid = true;
  inputs.forEach((element) => {
    if (element.value == "") {
      isValid = false;
      element.style.backgroundColor = "red";
      alert("El campo " + element.name + " no puede estar vacio");
    }
  });
  if (!isValid) {
    e.preventDefault();
  }
}

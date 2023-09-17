let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
abecedario = abecedario.split("");
let mensajesCifrados = [];
let desplazamiento = 4;

function descifrar() {
  let mensaje = document.getElementById("cajaTexto").value;
  let mensajeDescifrado = "";
  let comprobarMayuscula = (function (texto) {
    return texto.toUpperCase() == texto;
  })(mensaje);

  console.log(comprobarMayuscula);

  if (comprobarMayuscula) {
    for (let i = 0; i < mensaje.length; i++) {
      let letraOriginal = mensaje.charAt(i);
      let letraEnAbecedario = abecedario.indexOf(letraOriginal);
      if (letraEnAbecedario == -1) {
        mensajeDescifrado += " ";
      } else if (letraEnAbecedario >= abecedario.length - desplazamiento) {
        abecedario = abecedario.concat(abecedario);
        mensajeDescifrado += abecedario[letraEnAbecedario + desplazamiento];
      } else {
        mensajeDescifrado += abecedario[letraEnAbecedario + desplazamiento];
      }
    }
    document
      .getElementById("MensajeFinal")
      .classList.remove("d-none", "alert-warning");
    document
      .getElementById("MensajeFinal")
      .classList.add("d-block", "alert-success");
    document.getElementById(
      "MensajeFinal"
    ).innerHTML = `Se ha descifrado tu mensaje: ${mensajeDescifrado}`;
  } else {
    document.getElementById("comprobar-mayuscula").classList.toggle("d-none");
  }
}
function cifrar() {
  let desplazamiento = 4;
  let mensajeCifrado = "";
  let mensaje = document.getElementById("cajaTexto").value;
  let comprobarMayuscula = (function (texto) {
    return texto.toUpperCase() == texto;
  })(mensaje);

  if (comprobarMayuscula) {
    for (let i = 0; i < mensaje.length; i++) {
      let letraOriginal = mensaje.charAt(i);

      let letraEnAbecedario = abecedario.indexOf(letraOriginal);

      if (letraEnAbecedario == -1) {
        mensajeCifrado += " ";
      } else if (letraEnAbecedario - desplazamiento < 0) {
        abecedario = abecedario.concat(abecedario);

        letraEnAbecedario = abecedario.lastIndexOf(letraOriginal);
        mensajeCifrado += abecedario[letraEnAbecedario - desplazamiento];
      } else {
        mensajeCifrado += abecedario[letraEnAbecedario - desplazamiento];
      }
    }
    document.getElementById("MensajeFinal").classList.remove("d-none");
    document
      .getElementById("MensajeFinal")
      .classList.add("d-block", "alert-warning");
    document.getElementById(
      "MensajeFinal"
    ).innerHTML = `Se ha cifrado tu mensaje: ${mensajeCifrado}`;
    AnadirMensaje(mensajeCifrado);
  } else {
    document.getElementById("comprobar-mayuscula").classList.toggle("d-none");
  }
}

//*******AÑADIR MENSAJE CIFRADO A LA LISTA */
function AnadirMensaje(mensaje) {
  mensajesCifrados.push(mensaje);
  document.getElementById("mensajesCifrados").innerHTML = "";
  mensajesCifrados.forEach(function (mensaje) {
    document.getElementById(
      "mensajesCifrados"
    ).innerHTML += `<li>${mensaje}</li>`;
  });
}
//****MUETRA LA CAJA DE TEXTO PARA CIFRAR O DESCIFRAR */
function mostrarTexto(boton) {
  if (boton.id == "Cifrar") {
    let opcion = (document.getElementById("cajatexto").innerHTML =
      "<input  class='form-control w-50' id='cajaTexto' type='text' placeholder='Introduce el mensaje a cifrar EN MAYUSCULAS'/><br><br><button class='btn btn-dark' onclick='cifrar()'>Cifrar Mensaje</button>");
  } else {
    let opcion = (document.getElementById("cajatexto").innerHTML =
      "<input class='form-control w-50' id='cajaTexto' type='text' placeholder='Introduce el mensaje a Descifrar EN MAYUSCULAS'/><br><br><button class='btn btn-dark' onclick='descifrar()'>Descifrar Mensaje</button>");
  }
}

//*******PARA NO ELIMINAR EL ALERT DE BOOTSTRAP */
var alertMsg = document.getElementById("comprobar-mayuscula");
var closeButton = alertMsg.querySelector(".btn-close");

closeButton.addEventListener("click", function () {
  alertMsg.classList.add("d-none");
});

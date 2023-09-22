function init() {
  window.location.reload(true);
}

let preguntaActual = null;
let respuestaActual = null;
let categoriaActual = null;
let contador = 0;
let esCorrectaOno = null;
let contadorVictorias = 0;
let contadorDerrotas = 0;

let categorias = [
  {
    categoria: "Geografía",
    preguntas: [
      {
        pregunta: "¿Cuál es la capital de Francia?",
        respuesta: "paris",
      },
      {
        pregunta: "¿Cuál es el río más largo del mundo?",
        respuesta: "nilo",
      },
      {
        pregunta: "¿En qué continente se encuentra Australia?",
        respuesta: "oceania",
      },
    ],
    color: "bg-info",
  },
  {
    categoria: "Arte",
    preguntas: [
      {
        pregunta: "¿Quién pintó la Mona Lisa?",
        respuesta: "leonardo da vinci",
      },
      {
        pregunta:
          "¿Qué movimiento artístico se caracteriza por cubrir objetos con papel y pegamento?",
        respuesta: "arte povera",
      },
      {
        pregunta: "¿Cuál es la obra más famosa de Vincent van Gogh?",
        respuesta: "la noche estrellada",
      },
    ],
    color: "bg-warning",
  },
  {
    categoria: "Espectáculos",
    preguntas: [
      {
        pregunta: "¿Quién interpretó a James Bond en la película 'Skyfall'?",
        respuesta: "daniel craig",
      },
      {
        pregunta: "¿En qué año se estrenó la primera película de 'Star Wars'?",
        respuesta: "1977",
      },
      {
        pregunta:
          "¿Qué director dirigió la trilogía 'El Señor de los Anillos'?",
        respuesta: "peter jackson",
      },
    ],
    color: "bg-danger",
  },
  {
    categoria: "Historia",
    preguntas: [
      {
        pregunta: "¿En qué año comenzó la Primera Guerra Mundial?",
        respuesta: "1914",
      },
      {
        pregunta: "¿Quién fue el primer presidente de los Estados Unidos?",
        respuesta: "george washington",
      },
      {
        pregunta:
          "¿En qué año se firmó la Declaración de Independencia de Estados Unidos?",
        respuesta: "1776",
      },
    ],
    color: "bg-primary",
  },
  {
    categoria: "Ciencias",
    preguntas: [
      {
        pregunta: "¿Cuál es el símbolo químico del oxígeno?",
        respuesta: "o",
      },
      {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        respuesta: "jupiter",
      },
      {
        pregunta:
          "¿Cuál es el proceso por el cual las plantas producen su propio alimento?",
        respuesta: "fotosintesis",
      },
    ],
    color: "bg-info",
  },
  {
    categoria: "Deportes",
    preguntas: [
      {
        pregunta: "¿Cuál es el deporte más popular en Brasil?",
        respuesta: "futbol",
      },
      {
        pregunta:
          "¿En qué deporte se utiliza una pelota amarilla y una raqueta?",
        respuesta: "tenis",
      },
      {
        pregunta:
          "¿Cuántos jugadores hay en un equipo de baloncesto en la cancha durante un partido?",
        respuesta: "cinco",
      },
    ],
    color: "bg-primary",
  },
];

function ContadorDePreguntas() {
  mostrarJuego();
  if (contador < categorias.length) {
    console.log("Estamos el la respuesta:" + contador);
    let numeroRandom = Math.floor(Math.random() * 3);
    categoriaActual = categorias[contador].categoria;
    preguntaActual = categorias[contador].preguntas[numeroRandom].pregunta;
    respuestaActual = categorias[contador].preguntas[numeroRandom].respuesta;
    console.log("La respuesta actual:" + respuestaActual);
    MostrarDatos();
  } else {
    //alert("Has llegado al final del juego");
    comprobarVictoriaODerrota();
  }
}

function MostrarDatos() {
  let txtCategoria = document.getElementById("txtCategoria");
  let txtPregunta = document.getElementById("txtPregunta");
  txtCategoria.innerHTML = `${categoriaActual}`;
  txtPregunta.innerHTML = `${preguntaActual}`;
  anadirColores();
}

let verificarCorrecta = function ComprobarRespuesta() {
  let respuestaEscrita = comprobartxtNoVacio();
  if (respuestaEscrita) {
    let respuestaUsuario = document.getElementById("inputRespuesta").value;
    respuestaUsuario = respuestaUsuario.toLowerCase().trim();
    esCorrectaOno = respuestaUsuario.includes(respuestaActual) ? true : false;
    modificarContadores();
    esCorrectaOno
      ? (document.getElementById("CorrectaIncorrecta").innerHTML =
          "<span class='text-bg-success p-3 rounded-pill'>Correcta<span>")
      : (document.getElementById("CorrectaIncorrecta").innerHTML =
          "<span class='text-bg-danger p-3 rounded-pill'>Incorrecta<span>");
  } else {
    alert("debes completar los campo");
  }
  comprobarVictoriaODerrota();
};

function modificarContadores() {
  if (esCorrectaOno) {
    contadorVictorias++;
    document.getElementById("txtVictorias").innerHTML = `${contadorVictorias}`;
  } else {
    contadorDerrotas++;
    document.getElementById("txtDerrotas").innerHTML = `${contadorDerrotas}`;
  }
}

function comprobartxtNoVacio() {
  let comprobarTexto = document.getElementById("inputRespuesta").value;
  if (
    comprobarTexto == "" ||
    comprobarTexto == undefined ||
    comprobarTexto == null
  ) {
    return false;
  } else {
    document
      .getElementById("enviarRespuesta")
      .setAttribute("data-bs-toggle", "modal");

    return true;
  }
}

function siguientePregunta() {
  obtenerCajaTexto = document.getElementById("inputRespuesta").value = "";
  if (contador <= 6) eliminarColor();
  contador++;
  ContadorDePreguntas();
}

function comprobarVictoriaODerrota() {
  if (contadorVictorias == 4) {
    localStorage.setItem("NumeroRespuestas", contadorVictorias);
    localStorage.setItem("tipoRespuesta", "Correctas");
    localStorage.setItem("resultado", "Ganado");
    window.location.href = "final.html";
  } else if (contadorDerrotas == 3) {
    localStorage.setItem("NumeroRespuestas", contadorDerrotas);
    localStorage.setItem("tipoRespuesta", "Incorrectas");
    localStorage.setItem("resultado", "Perdido");
    window.location.href = "final.html";
  } else if (contador == categorias.length) {
    window.location.href = "final.html";
  }
}

function mostrarJuego() {
  document.getElementById("HeroSection").style.display = "none";
  document.getElementById("PantallaJuego").style.display = "block";
}

function anadirColores() {
  categoriaActual = categorias[contador].color;
  document.getElementById("colorHeader").classList.add(categoriaActual);
  document.getElementById("txtCategoria").classList.add(categoriaActual);
  document.getElementById("enviarRespuesta").classList.add(categoriaActual);
}

function eliminarColor() {
  categoriaActual = categorias[contador].color;
  document.getElementById("colorHeader").classList.remove(categoriaActual);
  document.getElementById("txtCategoria").classList.remove(categoriaActual);
  document.getElementById("enviarRespuesta").classList.remove(categoriaActual);
}

//event listeners
btnEntrar = document
  .getElementById("entrarJuego")
  .addEventListener("click", ContadorDePreguntas);

btnEnviarRespuesta = document
  .getElementById("enviarRespuesta")
  .addEventListener("click", verificarCorrecta);

btnSiguientePregunta = document
  .getElementById("siguientePregunta")
  .addEventListener("click", siguientePregunta);

inputRespuesta = document.getElementById("inputRespuesta");
inputRespuesta.addEventListener("blur", function () {
  comprobartxtNoVacio();
});

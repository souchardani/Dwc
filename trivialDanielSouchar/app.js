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
        respuesta: "París",
      },
      {
        pregunta: "¿Cuál es el río más largo del mundo?",
        respuesta: "Amazonas",
      },
      {
        pregunta: "¿En qué continente se encuentra Australia?",
        respuesta: "Oceanía",
      },
    ],
  },
  {
    categoria: "Arte",
    preguntas: [
      {
        pregunta: "¿Quién pintó la Mona Lisa?",
        respuesta: "Leonardo da Vinci",
      },
      {
        pregunta:
          "¿Qué movimiento artístico se caracteriza por cubrir objetos con papel y pegamento?",
        respuesta: "Arte Povera",
      },
      {
        pregunta: "¿Cuál es la obra más famosa de Vincent van Gogh?",
        respuesta: "La noche estrellada",
      },
    ],
  },
  {
    categoria: "Espectáculos",
    preguntas: [
      {
        pregunta: "¿Quién interpretó a James Bond en la película 'Skyfall'?",
        respuesta: "Daniel Craig",
      },
      {
        pregunta: "¿En qué año se estrenó la primera película de 'Star Wars'?",
        respuesta: "1977",
      },
      {
        pregunta:
          "¿Qué director dirigió la trilogía 'El Señor de los Anillos'?",
        respuesta: "Peter Jackson",
      },
    ],
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
        respuesta: "George Washington",
      },
      {
        pregunta:
          "¿En qué año se firmó la Declaración de Independencia de Estados Unidos?",
        respuesta: "1776.",
      },
    ],
  },
  {
    categoria: "Ciencias",
    preguntas: [
      {
        pregunta: "¿Cuál es el símbolo químico del oxígeno?",
        respuesta: "O",
      },
      {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        respuesta: "Júpiter.",
      },
      {
        pregunta:
          "¿Cuál es el proceso por el cual las plantas producen su propio alimento?",
        respuesta: "fotosíntesis.",
      },
    ],
  },
  {
    categoria: "Deportes",
    preguntas: [
      {
        pregunta: "¿Cuál es el deporte más popular en Brasil?",
        respuesta: "Fútbol",
      },
      {
        pregunta:
          "¿En qué deporte se utiliza una pelota amarilla y una raqueta?",
        respuesta: "tenis.",
      },
      {
        pregunta:
          "¿Cuántos jugadores hay en un equipo de baloncesto en la cancha durante un partido?",
        respuesta: "cinco",
      },
    ],
  },
];

function ContadorDePreguntas() {
  if (contador < categorias.length) {
    let numeroRandom = Math.floor(Math.random() * 3);
    categoriaActual = categorias[contador].categoria;
    preguntaActual = categorias[contador].preguntas[numeroRandom].pregunta;
    respuestaActual = categorias[contador].preguntas[numeroRandom].respuesta;
    console.log(respuestaActual);
    console.log(`El numero de la pregunta es: ${numeroRandom}`);
    MostrarDatos();
  } else {
    alert("Has llegado al final del juego");
    comprobarVictoriaODerrota();
  }
}

function MostrarDatos() {
  let txtCategoria = document.getElementById("txtCategoria");
  let txtPregunta = document.getElementById("txtPregunta");
  txtCategoria.innerHTML = `${categoriaActual}`;
  txtPregunta.innerHTML = `${preguntaActual}`;
}

let verificarCorrecta = function ComprobarRespuesta() {
  let respuestaEscrita = comprobartxtNoVacio();
  if (respuestaEscrita) {
    let respuestaUsuario = document.getElementById("inputRespuesta").value;
    esCorrectaOno = respuestaUsuario.includes(respuestaActual) ? true : false;
    modificarContadores();
  } else {
    alert("Debes escribir Una Respuesta Antes de enviar");
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
    return true;
  }
}

function siguientePregunta() {
  contador++;
  ContadorDePreguntas();
}

function comprobarVictoriaODerrota() {
  if (contadorVictorias >= 4) {
    alert("has ganado");
  } else if (contadorDerrotas >= 3) {
    alert("has perdido");
  }
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

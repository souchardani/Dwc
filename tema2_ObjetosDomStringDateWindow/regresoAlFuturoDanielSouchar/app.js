//calculamos la diferencia de tiempoo
function diferenciaTiempo() {
  // Obtenemos los valores de los campos de entrada
  const presenteMes = document.getElementById("presenteMes").value;
  const presenteDia = parseInt(document.getElementById("presenteDia").value);
  const presenteAno = parseInt(document.getElementById("presenteAno").value);
  const presenteHora = parseInt(document.getElementById("presenteHora").value);
  const presenteMinuto = parseInt(
    document.getElementById("presenteMinuto").value
  );

  const destinoMes = document.getElementById("destinoMes").value;
  const destinoDia = parseInt(document.getElementById("destinoDia").value);
  const destinoAno = parseInt(document.getElementById("destinoAno").value);
  const destinoHora = parseInt(document.getElementById("destinoHora").value);
  const destinoMinuto = parseInt(
    document.getElementById("destinoMinuto").value
  );

  //calculamos fechas
  const fechaPresente = new Date(
    presenteAno,
    obtenerNumeroMes(presenteMes),
    presenteDia,
    presenteHora,
    presenteMinuto
  );
  const fechaDestino = new Date(
    destinoAno,
    obtenerNumeroMes(destinoMes),
    destinoDia,
    destinoHora,
    destinoMinuto
  );

  //diferencia de tiempo en milisegundos
  const diferenciaTiempo = fechaDestino - fechaPresente;

  if (diferenciaTiempo === 0) {
    mostrarResultado("No te moverás en el tiempo.");
  } else if (diferenciaTiempo < 0) {
    mostrarResultado(
      `Viajarás al pasado ${calcularTiempoPasado(diferenciaTiempo)}.`
    );
  } else {
    mostrarResultado(
      `Viajarás al futuro ${calcularTiempoFuturo(diferenciaTiempo)}.`
    );
  }
}

// Función para obtener el número del mes
function obtenerNumeroMes(mes) {
  const meses = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];
  return meses.indexOf(mes.toLowerCase());
}

// Función para calcular el tiempo en el pasado
function calcularTiempoPasado(time) {
  const segundos = Math.floor(Math.abs(time) / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const anos = Math.floor(dias / 365);
  return `${anos} años, ${dias % 365} días, ${horas % 24} horas y ${
    minutos % 60
  } minutos`;
}

// Función para calcular el tiempo en el futuro
function calcularTiempoFuturo(time) {
  const segundos = Math.floor(time / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const anos = Math.floor(dias / 365);
  return `${anos} años, ${dias % 365} días, ${horas % 24} horas y ${
    minutos % 60
  } minutos`;
}

function mostrarResultado(mensaje) {
  const mensajeElement = document.getElementById("mensaje");
  mensajeElement.textContent = mensaje;
}

//añadimos el event listener
document.getElementById("calcular").addEventListener("click", diferenciaTiempo);

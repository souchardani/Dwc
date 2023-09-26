let fechaPresente = null;
let fechaDestino = null;

function CalcularAno() {
  presenteAno = fechaPresente.getFullYear();
  viajeAno = fechaDestino.getFullYear();
  console.log(presenteAno);
  console.log(viajeAno);

  console.log(`presente año ${presenteAno}`);
  if (presenteAno > destinoAno) {
    intervalAno = presenteAno - destinoAno;
    return "pasado";
  } else if (destinoAno > presenteAno) {
    intervalAno = destinoAno - presenteAno;
    return "futuro";
  } else {
    intervalAno = 0;
    return "igual";
  }
}

function CalcularDia() {
  if (presenteDia > destinoDia) {
    intervalDia = presenteDia - destinoDia;
    return "pasado";
  } else if (destinoDia > presenteDia) {
    intervalDia = destinoDia - presenteDia;
    return "futuro";
  } else {
    intervalDia = 0;
    return "igual";
  }
}

function calcularMensaje() {
  let tipoAno = CalcularAno();
  console.log("intervalo años: " + intervalAno);
  console.log("tipo año: " + tipoAno);
  let tipoDia = CalcularDia();
  console.log("intervalo dias: " + intervalDia);
  console.log(`Futuro dia: ${tipoDia}`);
  if (tipoAno == "futuro") {
    mensaje = `Has viajado al futuro: ${intervalAno} Años, ${intervalDia} dias,`;
  } else if (tipoAno == "pasado") {
    mensaje = `Has viajado al pasado: ${intervalAno} Años, ${intervalDia} dias,`;
  } else {
    //los años son iguales
    if (tipoDia == "futuro") {
      mensaje = `Has viajado al futuro: ${intervalAno} Años, ${intervalDia} dias,`;
    } else if (tipoDia == "pasado") {
      mensaje = `Has viajado al pasado: ${intervalAno} Años, ${intervalDia} dias,`;
    } else {
      //los dias son iguales
      console.log("hola");
    }
  }
  return mensaje;
}

function MostrarMensaje() {
  calcularFechas();
  let mensaje = null;
  let intervalAno = null;
  let MostrarMensaje = document.getElementById("mensaje");
  mensaje = calcularMensaje();
  MostrarMensaje.innerHTML = mensaje;
}

document.getElementById("calcular").addEventListener("click", MostrarMensaje);

function calcularFechas() {
  let presenteAno = document.getElementById("presenteAno").value;
  let destinoAno = document.getElementById("destinoAno").value;
  let presenteDia = document.getElementById("presenteDia").value;
  let destinoDia = document.getElementById("destinoDia").value;
  let presenteMes = document.getElementById("presenteMes").value;
  let destinoMes = document.getElementById("destinoMes").value;
  let presenteHora = document.getElementById("presenteHora").value;
  let presenteMinuto = document.getElementById("presenteMinuto").value;
  let destinoHora = document.getElementById("destinoHora").value;
  let destinoMinuto = document.getElementById("destinoMinuto").value;

  presenteMes = convertirMes(presenteMes);
  destinoMes = convertirMes(destinoMes);
  console.log(presenteMes);
  console.log(destinoMes);

  fechaPresente = new Date(
    presenteAno,
    presenteMes,
    presenteDia,
    presenteHora,
    presenteMinuto
  );
  fechaDestino = new Date(
    destinoAno,
    destinoMes,
    destinoDia,
    destinoHora,
    destinoMinuto
  );

  console.log(fechaPresente);
  console.log(fechaDestino);
}

function convertirMes(presenteMes) {
  let meses = [
    "ENE",
    "FEB",
    "MAR",
    "ABR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DIC",
  ];

  indice = meses.indexOf(presenteMes);
  return indice;
}

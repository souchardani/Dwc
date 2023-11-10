// 1. Realiza un script de comprobación de palíndromos, que determine si la
// cadena de texto introducida por el usuario se lee de la misma forma
// desde la derecha y desde la izquierda (exceptuando los espacios)
// El script pedirá frases sucesivamente hasta que se introduzca la cadena
// "&quot;"FIN"&quot"; (en mayúsculas o minúsculas).
// Es obligatorio el uso de al menos las siguientes funciones de String:
//  charAt() para buscar el carácter en una posición dada.
//  toLowerCase() / toUpperCase() para no discriminar entre
// mayúsculas y minúsculas.
// Ejercicio 1
let texto = prompt("Introduce una frase:");
while (texto.toLowerCase() !== "fin") {
  const textoSinEspacios = texto.replace(/\s/g, "").toLowerCase();
  const textoInvertido = textoSinEspacios.split("").reverse().join("");
  if (textoSinEspacios === textoInvertido) {
    alert("Es un palíndromo.");
  } else {
    alert("No es un palíndromo.");
  }
  texto = prompt("Introduce otra frase (o escribe 'FIN' para terminar):");
}

// 2. Realiza un script que genere de manera aleatoria una cantidad de
// números cuyo valor estará entre 1 y 50. La cantidad de números a
// generar también será un número aleatorio entre 500 y 1000.
// Una vez generados los números, se mostrará un mensaje indicativo de
// cuál ha sido el número más frecuente. Para ello, tendremos que llevar
// cuenta del número de veces que se ha repetido cada número.

// Ejercicio 2
const cantidadNumeros = Math.floor(Math.random() * (1000 - 500) + 500);
const numerosAleatorios = [];
for (let i = 0; i < cantidadNumeros; i++) {
  numerosAleatorios.push(Math.floor(Math.random() * 50) + 1);
}
const contador = {};
let maxFrecuencia = 0;
let numFrecuente;
numerosAleatorios.forEach((numero) => {
  contador[numero] = (contador[numero] || 0) + 1;
  if (contador[numero] > maxFrecuencia) {
    maxFrecuencia = contador[numero];
    numFrecuente = numero;
  }
});
alert(
  `El número más frecuente es el ${numFrecuente}, que aparece ${maxFrecuencia} veces.`
);

// 3. Realiza un script de que cambie automáticamente la URL de la página
// una vez transcurridos 10 segundos. La URL se tomará aleatoriamente
// de entre un array con 10 URLs, definido estáticamente al comienzo del
// script. Utiliza setTimeout() para establecer el tiempo de espera.

// Ejercicio 3
const urls = [
  "https://www.ejemplo1.com",
  "https://www.ejemplo2.com",
  "https://www.ejemplo3.com",
  "https://www.ejemplo4.com",
  "https://www.ejemplo5.com",
  "https://www.ejemplo6.com",
  "https://www.ejemplo7.com",
  "https://www.ejemplo8.com",
  "https://www.ejemplo9.com",
  "https://www.ejemplo10.com",
];
function cambiarURL() {
  const randomIndex = Math.floor(Math.random() * urls.length);
  window.location.href = urls[randomIndex];
}
setTimeout(cambiarURL, 10000);

// 4. Realiza un script que muestre la fecha actual. Utiliza una hoja de estilos
// que vincularás desde la página HTML para mejorar la apariencia del
// calendario:

// Ejercicio 4
const fechaActual = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const fechaFormateada = fechaActual.toLocaleDateString("es-ES", options);
alert(fechaFormateada);

// 5. Realiza un script que muestre la hora actual, que se actualizará de
// manera dinámica usando la función setInterval()

// Ejercicio 5
function mostrarHoraActual() {
  const fecha = new Date();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundos = fecha.getSeconds();
  const horaActual = `${hora}:${minutos}:${segundos}`;
  console.log(horaActual);
}
setInterval(mostrarHoraActual, 1000);

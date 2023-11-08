// 1. Crea un programa en el que crees 4 variables, 2 cadenas y 2
// números, con los siguientes valores: tu nombre, tu apellido, tu edad y tu
// año de nacimiento.
//  Muestra en un mensaje de alerta una frase que incluya comillas
// simples.
//  Muestra en un mensaje de alerta tu nombre y apellidos separados
// por un salto de línea.
//  Muestra en un mensaje de alerta la suma de las variables edad y
// año de nacimiento.
//  Muestra en un mensaje de alerta la suma de todas las variables.
// Ejercicio 1
const nombre = "Juan";
const apellido = "Perez";
const edad = 30;
const anoNacimiento = 1992;

// Muestra en un mensaje de alerta una frase que incluya comillas simples.
alert("Este es un ejemplo de mensaje con comillas simples.");

// Muestra en un mensaje de alerta tu nombre y apellidos separados por un salto de línea.
alert(nombre + "\n" + apellido);

// Muestra en un mensaje de alerta la suma de las variables edad y año de nacimiento.
alert(edad + anoNacimiento);

// Muestra en un mensaje de alerta la suma de todas las variables.
alert(
  nombre +
    " " +
    apellido +
    " tiene " +
    edad +
    " años y nació en el año " +
    anoNacimiento
);

// 2. Define un array numérico formado por números del 1 al 9. El script
// debería comprobar si hay algún número fuera de su posición,
// informando SOLO del primer caso que se encuentre. Por ejemplo, en el
// array [1,2,3,9,5,6,7,8,9] se debería obtener el mensaje &quot;Error en la
// posición 3, hay un 9 cuando se esperaba un 4&quot;. En caso de que todos
// los elementos estén en la posición correcta, se mostrará un mensaje
// indicativo. Los mensajes se mostrarán en forma de mensajes de alerta.
// Ejercicio 2
const numeros = [1, 2, 3, 9, 5, 6, 7, 8, 9];
let mensaje = "";
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] !== i + 1) {
    mensaje = `Error en la posición ${i}, hay un ${
      numeros[i]
    } cuando se esperaba un ${i + 1}.`;
    break;
  }
}
if (mensaje === "") {
  mensaje = "Todos los elementos están en la posición correcta.";
}
alert(mensaje);

// 3. Realiza una nueva versión del script anterior donde se detecten TODOS
// los números que estén fuera del orden esperado. Al igual que en el caso
// anterior, si todos los elementos están en la posición correcta se mostrará
// un mensaje indicativo. Los mensajes se mostrarán en forma de
// mensajes de alerta.
// Ejercicio 3
const numeros2 = [1, 2, 3, 9, 5, 6, 7, 8, 9];
let mensajes = [];
numeros2.forEach((numero, indice) => {
  if (numero !== indice + 1) {
    mensajes.push(
      `Error en la posición ${indice}, hay un ${numero} cuando se esperaba un ${
        indice + 1
      }.`
    );
  }
});
if (mensajes.length === 0) {
  mensajes.push("Todos los elementos están en la posición correcta.");
}
mensajes.forEach((mensaje) => {
  alert(mensaje);
});

// 4. Realiza un script que pida un número por pantalla y a continuación
// genere sus tablas de multiplicar, sumar y dividir del 1 al 10 (es decir, el
// resultado de multiplicar, sumar y dividir el número indicado
// sucesivamente por los números del 1 al 10. El resultado se presentará
// en 3 mensajes de alerta (uno para cada operación).
// Ejercicio 4
const numeroIngresado = parseInt(prompt("Ingresa un número:"));
let mensajeMultiplicar = "";
let mensajeSumar = "";
let mensajeDividir = "";
for (let i = 1; i <= 10; i++) {
  mensajeMultiplicar += `${numeroIngresado} x ${i} = ${numeroIngresado * i}\n`;
  mensajeSumar += `${numeroIngresado} + ${i} = ${numeroIngresado + i}\n`;
  if (i !== 0) {
    mensajeDividir += `${numeroIngresado} / ${i} = ${numeroIngresado / i}\n`;
  } else {
    mensajeDividir += `${numeroIngresado} / ${i} = Infinito\n`;
  }
}
alert(mensajeMultiplicar);
alert(mensajeSumar);
alert(mensajeDividir);

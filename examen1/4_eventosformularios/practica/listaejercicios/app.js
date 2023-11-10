// LISTA DE EJERCICIOS DE JAVASCRIPT (1ª Evaluación)
// Objetos Nativos de Javascript
// Objeto Date.- Calcular el tiempo restante en milisegundos entre la fecha actual y la fecha Maya del fin
// del mundo (21 de Diciembre de 2012).
const fechaFinMundo = new Date("2012-12-21");
const fechaActual = new Date();
const tiempoRestante = fechaFinMundo.getTime() - fechaActual.getTime();
console.log(
  `Tiempo restante en milisegundos hasta el fin del mundo maya: ${tiempoRestante}`
);

// Objeto Math.- Calcular el área de un círculo tras solicitar el radio desde un cuadro de diálogo.
const radio = prompt("Introduce el radio del círculo:");
const area = Math.PI * Math.pow(radio, 2);
console.log(`El área del círculo es: ${area}`);

// Objeto Number.- Mostrar el valor de la constante Pi formateado a 4 decimales.
const piFormateado = Math.PI.toFixed(4);
console.log(`Valor de pi formateado a 4 decimales: ${piFormateado}`);

// Objeto String.- Solicitar una cadena de texto desde teclado, presentar el número de caracteres que
// contiene y presentar la propia cadena en cursiva, en itálica y en tachado.
const cadena = prompt("Introduce una cadena de texto:");
const numCaracteres = cadena.length;
console.log(`Número de caracteres: ${numCaracteres}`);
console.log(`Cadena en cursiva: ${cadena.italics()}`);
console.log(`Cadena en itálica: ${cadena.italics()}`);
console.log(`Cadena tachada: ${cadena.strike()}`);

// Objeto Array.- Solicitar una frase desde teclado, almacenar cada palabra en un array y mostrar los
// siguientes datos:
// - La primera palabra de la frase.
// - La última palabra de la frase.
// - El número de palabras de la frase.
// - Todas las palabras ordenadas alfabéticamente.
const frase = prompt("Introduce una frase:");
const palabras = frase.split(" ");
console.log(`Primera palabra: ${palabras[0]}`);
console.log(`Última palabra: ${palabras[palabras.length - 1]}`);
console.log(`Número de palabras: ${palabras.length}`);
console.log(`Palabras ordenadas alfabéticamente: ${palabras.sort()}`);

// Funciones
// 1. Función booleana que recibe un número entero positivo y determina si es primo.
function esPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero > 1;
}

// 3. Función numérica que recibe dos números enteros y devuelve la resta del mayor menos el menor.
function restaMayorMenor(num1, num2) {
  return Math.max(num1, num2) - Math.min(num1, num2);
}

// General
// 1. Juego del número secreto. La página generará un número al azar entre 1 y 100 (ambos inclusive).El
// usuario irá introduciendo números por teclado y el ordenador le irá dando pistas: “mi número es
// menor” o “mi número es mayor”, hasta que el usuario acierte. Entonces se le felicitará y se indicará el
// número de intentos que necesitó para acertar el número secreto.
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinado = false;

while (!adivinado) {
  intentos++;
  const numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));
  if (numeroUsuario === numeroSecreto) {
    adivinado = true;
    console.log(`Felicidades, has acertado! Número de intentos: ${intentos}`);
  } else if (numeroUsuario < numeroSecreto) {
    console.log("Mi número es mayor");
  } else {
    console.log("Mi número es menor");
  }
}

// Formularios
// 1. Diseñar un formulario que cuente con los siguientes campos relativos a un usuario:
// - El nombre (no puede estar vacío).
// - La dirección de correo (debe ser válida).
// - Una contraseña (de al menos 8 caracteres y que cuente al menos con un dígito).
// - Repetición de la contraseña (debe coincidir con la anterior, obviamente).
// - Una operación matemática de suma entre dos números enteros de un dígito determinados al azar (por
// ej. 5 + 3 = ?) con el fin de solicitar su resultado para evitar “bots”.
// - Una casilla de verificación de “Acepto las condiciones” inicialmente desactivada. Hasta que esta opción
// no se verifique no se habilitará el botón de envío.
// - Un botón de envío con el texto “Crear cuenta”.
// Los elementos irán validándose de forma individual, de modo que si no es correcto aparecerá un texto
// en rojo encima del elemento indicando el error y éste tomará el foco.
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const suma = document.getElementById("suma").value;
  const condiciones = document.getElementById("condiciones").checked;

  // Realiza las validaciones necesarias aquí y muestra los mensajes de error correspondientes.
  // Puedes usar el método innerHTML para mostrar los mensajes de error.

  // Ejemplo de validación de contraseña y confirmación de contraseña
  if (password !== confirmPassword) {
    document.getElementById("errorConfirmPassword").innerHTML =
      "Las contraseñas no coinciden";
  }

  // Ejemplo de validación de la suma
  const resultadoSuma = parseInt(suma);
  if (resultadoSuma !== 8) {
    document.getElementById("errorSuma").innerHTML = "La suma es incorrecta";
  }

  // Ejemplo de validación de aceptar condiciones
  if (!condiciones) {
    alert("Debes aceptar las condiciones");
  }

  // Realiza más validaciones según sea necesario y muestra los mensajes de error correspondientes.
  // Si todo está correcto, puedes enviar el formulario con submit() o realizar otras acciones necesarias.
});

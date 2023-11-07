let string =
  "España se ha proclamado campeona del Eurobasket después de derrotar a Francia (88-76) en la gran final de Berlín";
console.log(`La cadena es: ${string}`);

//¿Cuántas letras tiene la frase?
console.log("¿Cuántas letras tiene la frase?");
let cadenaSoloLetras = string.replace(/[^a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]/g, "");
console.log("Cadena con solo letras:" + cadenaSoloLetras);
console.log(`${cadenaSoloLetras.length}`);
console.log("--------------------------------");

//¿Qué carácter hay en la posición número 25?
console.log(" ¿Qué carácter hay en la posición número 25?");
console.log(`${string.charAt(25)}`);
console.log("--------------------------------");

//¿En qué posición está la primera letra d? ¿Y la última? ¿Cómo conseguirías sacar la segunda letra d?
console.log("Primera Letra D");
console.log(`${string.indexOf("d")}`);
console.log("Ultima Letra D");
console.log(`${string.lastIndexOf("d")}`);
console.log("Segunda letra d del string:");
var posicion1 = string.indexOf("d");
var posicion2 = string.indexOf("d", posicion1 + 1);
console.log(posicion2);
console.log("--------------------------------");

//¿En qué posición está la palabra “Eurobasket”?
console.log("Posicion de EuroBasket:");
console.log(`${string.indexOf("Eurobasket")}`);
console.log("--------------------------------");

//¿Cómo sabes si existe la palabra “Portugal” en la frase?
console.log("Saber si existe Portugal");
if (string.indexOf("Portugal") == -1) {
  console.log("No se encuentra");
} else {
  console.log("La cadena ha sido encontrada");
}
console.log("--------------------------------");

//¿Cómo sabes si la frase empieza o acaba con la palabra “Berlín”?
console.log("la frase empieza o acaba con la palabra “Berlín”?");
if (string.endsWith("Berlín")) {
  console.log("La cadena termina con Berlin");
} else if (string.startsWith("Berlín")) {
  console.log("La cadena empieza con Berlin");
} else {
  console.log("La cadena no empieza ni termina con Berlin");
}
console.log("--------------------------------");

//Añade a la frase “el día 18 de septiembre de 2022” y guarda todo en una variable.
let string2 = string.concat(" el día 18 de septiembre de 2022");
console.log(string2);
console.log("--------------------------------");

//Extrae de la frase anterior las letras que hay entre las posiciones 26 y 35.
console.log(
  "Extrae de la frase anterior las letras que hay entre las posiciones 26 y 35"
);
console.log(`${string.substring(26, 35)}`);
console.log("--------------------------------");

//Extrae de la frase anterior las letras que hay a partir de la posición 40.
console.log(
  "Extrae de la frase anterior las letras que hay a partir de la posición 40."
);
console.log(`${string.substring(40)}`);
console.log("--------------------------------");

//Añade a la frase 5 espacios por delante y 10 por detrás.
//Luego busca el método que elimine esos espacios en blanco sin tener que indicarle exactamente el número de ellos que hay.
console.log(
  "Añade a la frase 5 espacios por delante y 10 por detrás. Luego busca el método que elimine esos espacios en blanco sin tener que indicarle exactamente el número de ellos que hay."
);
let cadenaNueva = string.padStart(117, " ");
cadenaNueva = cadenaNueva.padEnd(127, " ");
console.log(cadenaNueva);
console.log("Eliminamos del string");
console.log(`Cadena limpia: ${cadenaNueva.trim("")}`);
console.log("--------------------------------");

//Convierte la frase en todo letras minúsculas. Y luego en todo letras mayúsculas.
console.log(`Cadena Minuscula: ${string.toLowerCase()}`);
console.log(`Cadena Mayuscula: ${string.toUpperCase()}`);
console.log("--------------------------------");

//Convierte la frase en un array en el que cada posición tenga una palabra usando un único método.
console.log(
  "Convierte la frase en un array en el que cada posición tenga una palabra usando un único método."
);
let splitString = string.split(" ");
console.log(splitString);
console.log("--------------------------------");

//Extrae del array anterior las posiciones 0, 6 y 11.
console.log("Extrae del array anterior las posiciones 0, 6 y 11.");
console.log(`Array: ${splitString[0]}`);
let spliceArray = splitString.toSpliced(0, 1);
spliceArray = spliceArray.toSpliced(6, 1);
spliceArray = spliceArray.toSpliced(11, 1);
console.log(spliceArray);
console.log("--------------------------------");

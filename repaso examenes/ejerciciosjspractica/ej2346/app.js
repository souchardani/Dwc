// 2) Se pide un texto al usuario. Si ese texto no existe en un array, se guarda. Si ya existe en el array,
// se muestra un mensaje al usuario que le indica “El texto introducido ya existe”.

// Array para almacenar los textos introducidos por el usuario
const textos = [];

// Función para verificar si un texto ya existe en el array
function verificarTexto(texto) {
  if (textos.includes(texto)) {
    alert("El texto introducido ya existe.");
  } else {
    textos.push(texto);
    alert("Texto añadido correctamente.");
  }
}
// Llamada a la función para interactuar con el usuario
const textoUsuario = prompt("Por favor, introduzca un texto:");
verificarTexto(textoUsuario);

// 3) ) Introduce en un array los nombres de 5 alumnos. Se pide al usuario un número entre 1 y 5. Cuando lo introduzca,
//se mostrará por pantalla el nombre alojado en esa posición del array.
// Array con los nombres de los alumnos
const alumnos = ["Juan", "María", "Carlos", "Sofía", "Luisa"];

// Función para mostrar el nombre según la posición ingresada por el usuario
function mostrarNombreAlumno() {
  const numero = parseInt(prompt("Introduce un número entre 1 y 5:"));
  if (numero >= 1 && numero <= 5) {
    const nombreAlumno = alumnos[numero - 1];
    alert(`El alumno en la posición ${numero} es: ${nombreAlumno}`);
  } else {
    alert("El número introducido no está en el rango válido.");
  }
}

// Llamada a la función para interactuar con el usuario
mostrarNombreAlumno();

// 4) En una tienda tenemos los siguientes productos:
// 	Producto1(nombre, precio): Leche, 1’5
// 	Producto2: Queso, 5’90
// Producto3: Manzana, 1’10
// Producto4: Pera, 0’90
// Crea una función que pide al usuario que introduzca un precio.
//Se recogerá este valor y se mostrará por pantalla todos los productos que superen en precio el valor introducido.
// Si no hay ninguno, deberá aparecer un mensaje que diga “No existen productos que superen el precio”.
// Definición de los productos y sus precios
const productos = [
  { nombre: "Leche", precio: 1.5 },
  { nombre: "Queso", precio: 5.9 },
  { nombre: "Manzana", precio: 1.1 },
  { nombre: "Pera", precio: 0.9 },
];

// Función para mostrar los productos que superan un precio dado
function mostrarProductosSuperiores(precio) {
  let productosSuperiores = false;
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio > precio) {
      console.log(`${productos[i].nombre}: ${productos[i].precio}`);
      productosSuperiores = true;
    }
  }
  if (!productosSuperiores) {
    console.log("No existen productos que superen el precio introducido.");
  }
}

// Interacción con el usuario y llamada a la función
const precioIntroducido = parseFloat(prompt("Introduce un precio:"));
mostrarProductosSuperiores(precioIntroducido);

// 6) Crea 4 coches con las siguientes propiedades:
// •	Matricula: Tipo cadena.
// •	Marca: Tipo cadena.
// •	Año matriculacion: Tipo integer.
// Guarda los cuatro coches en dos arrays diferentes (dos en cada uno). Concatena los
// dos arrays y muestra por pantalla la información de los coches ordenados por año de matriculación, de menor a mayor.

// Definición de la clase Coche
class Coche {
  constructor(matricula, marca, annoMatriculacion) {
    this.matricula = matricula;
    this.marca = marca;
    this.annoMatriculacion = annoMatriculacion;
  }
}

// Crear los cuatro coches
const coche1 = new Coche("1234ABC", "Toyota", 2018);
const coche2 = new Coche("5678DEF", "Ford", 2015);
const coche3 = new Coche("9876GHI", "BMW", 2017);
const coche4 = new Coche("5432JKL", "Honda", 2019);

// Guardar los coches en dos arrays diferentes
const array1 = [coche1, coche2];
const array2 = [coche3, coche4];

// Concatenar los dos arrays
const coches = array1.concat(array2);

// Ordenar los coches por año de matriculación
coches.sort((a, b) => a.annoMatriculacion - b.annoMatriculacion);

// Mostrar la información de los coches ordenados por año de matriculación
coches.forEach((coche) => {
  console.log(
    `Matrícula: ${coche.matricula}, Marca: ${coche.marca}, Año de matriculación: ${coche.annoMatriculacion}`
  );
});

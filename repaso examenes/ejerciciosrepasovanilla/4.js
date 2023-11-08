// Realiza la validación del formulario proporcionado en el enunciado de acuerdo
// a los siguientes requisitos:

// 1. Programar el código de JavaScript en los ficheros independientes que
// sean precisos. Se recomienda incluir en un fichero todas las funciones
// creadas para las validaciones fomentando así su posible reutilización en
// otras aplicaciones. Todos los eventos se definirán de acuerdo a la
// notación recomendada por el W3C.
// 2. Una vez que los datos se introduzcan en los campos de texto del
// formulario, se pasarán automáticamente a mayúsculas. Utiliza para ello
// el evento onblur de los mismos.
// 3. Al pulsar el botón &quot;Enviar datos&quot; se comprobará si los campos marcados
// con * se han introducido. En caso negativo, se mostrará un mensaje

// DDWEC05 – Ejercicios propuestos
// UT5: Gestión de Eventos y Formularios en Javascript
// indicativo en la caja de error correspondiente al campo correspondiente
// (podrán mostrarse varios mensajes de error simultáneamente).
// NOTA: Por defecto, las cajas de error tienen la propiedad display:none, lo
// que hace que no se muestre. Para cambiar el estilo de una de las cajas de
// texto, tendremos que cambiar dicha propiedad CSS (este aspecto se estudiará
// con más profundidad en el tema 6:):
// document.getElementById(&quot;id_caja&quot;).style.display=&quot;block&quot;. Si
// queremos ocultar la caja de nuevo tendremos que hacer
// document.getElementById(&quot;id_caja&quot;).style.display=&quot;none&quot;. Una vez
// que los errores que muestran la caja se han corregido deberían dejar de
// mostrarse los mismos.
// NOTA 2: para poder actualizar el contenido de un contenedor o div la
// propiedad que tenemos que modificar para ese objeto es innerHTML.
// 4. Los dos campos de contraseña deben coincidir, además de tener una
// extensión mínima de 8 caracteres. De no ser así, se mostrará un
// mensaje indicativo en la caja de error correspondiente a la contraseña.
// La validación se realizará al salir de la caja &quot;password2&quot;.
// 5. El NIF debería validarse mediante una expresión regular que permita
// únicamente 8 números y una letra. Además, habrá que validar si la letra
// introducida se corresponde con el propio DNI, utilizando el algoritmo
// explicado en el siguiente enlace (puede usarse la función propuesta en
// el mismo).
// 6. La fecha de nacimiento debería validarse mediante una expresión
// regular para que sea introducida en el formato &quot;XX/XX/XXXX&quot; o &quot;XX-XX-
// XXXX, siendo XX valores numéricos. Además, hay que validar que la
// edad del usuario a fecha actual esté entre 16 y 116 años. La validación
// se realizará una vez que se ha introducido la fecha, y el error se
// mostrará en la caja de error correspondiente a la fecha.
// 7. El email se validará utilizando una expresión regular. Los valores antes
// de la @ pueden contener cualquier carácter alfanumérico y los
// caracteres . y -, mientras que los valores tras la @ pueden contener
// caracteres alfanuméricos, y el tipo de dominio puede tener una longitud
// de 2 o 3 caracteres. La validación se realizará una vez introducido el
// email, y el error se mostrará en la caja de error correspondiente.
// 8. Almacenar en una cookie el número de intentos de envío del formulario
// que se van produciendo y mostrar un mensaje en el contenedor
// &quot;intentos&quot; similar a: &quot;Intento de Envíos del formulario: X&quot;. Es decir cada
// vez que le demos al botón de enviar tendrá que incrementar el valor de
// la cookie en 1 y mostrar su contenido en el div antes mencionado.
// 9. El formulario sólo se enviará cuando todos los elementos sean
// correctos. En caso de que algún elemento no se valide correctamente,
// se anulará el envío del formulario. Si se produce algún error, se pondrá
// el foco en el elemento correspondiente. Si hay varios errores, el foco lo
// tendrá el elemento que esté definido antes en el formulario.
// Las expresiones regulares se explicarán con los comentarios adecuados

// DDWEC05 – Ejercicios propuestos
// UT5: Gestión de Eventos y Formularios en Javascript
// [NOTA: De acuerdo a criterios de usabilidad el formulario podría obedecer a
// otros criterios menos proclives a fallos, como en el caso del campo fecha.
// También podrían haberse usado campos de validación de formularios de
// HTML5. El ejemplo actual se pone con fines didáctico].
// A continuación se muestra un ejemplo de error tras no introducir los campos
// &quot;nombre&quot; y &quot;apellidos&quot;

const formulario = document.getElementById("formulario");
const errorNombre = document.getElementById("errorNombre");
const errorApellido = document.getElementById("errorApellido");
const errorPassword = document.getElementById("errorPassword");
const errorPassword2 = document.getElementById("errorPassword2");
let intentos = 0;

formulario.addEventListener("submit", function (e) {
  intentos++;
  document.getElementById(
    "intentos"
  ).innerText = `Intento de Envíos del formulario: ${intentos}`;
  let isValid = true;

  if (document.getElementById("nombre").value === "") {
    errorNombre.style.display = "block";
    isValid = false;
  } else {
    errorNombre.style.display = "none";
  }

  if (document.getElementById("apellido").value === "") {
    errorApellido.style.display = "block";
    isValid = false;
  } else {
    errorApellido.style.display = "none";
  }

  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;

  if (password.length < 8) {
    errorPassword.innerText = "La contraseña debe tener al menos 8 caracteres.";
    errorPassword.style.display = "block";
    isValid = false;
  } else if (password !== password2) {
    errorPassword.innerText = "Las contraseñas no coinciden.";
    errorPassword.style.display = "block";
    isValid = false;
  } else {
    errorPassword.style.display = "none";
  }

  if (!isValid) {
    e.preventDefault();
  }
});

document.getElementById("password2").addEventListener("blur", function () {
  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;

  if (password !== password2) {
    errorPassword2.innerText = "Las contraseñas no coinciden.";
    errorPassword2.style.display = "block";
  } else {
    errorPassword2.style.display = "none";
  }
});

//SOLUCION MAS COMPLETA
// const formulario = document.getElementById("formulario");
// const errorNombre = document.getElementById("errorNombre");
// const errorApellido = document.getElementById("errorApellido");
// const errorPassword = document.getElementById("errorPassword");
// const errorPassword2 = document.getElementById("errorPassword2");
// const errorNif = document.getElementById("errorNif");
// const errorFecha = document.getElementById("errorFecha");
// const errorEmail = document.getElementById("errorEmail");
// let intentos = 0;

formulario.addEventListener("submit", function (e) {
  intentos++;
  document.getElementById(
    "intentos"
  ).innerHTML = `Intento de Envíos del formulario: ${intentos}`;
  let isValid = true;

  // Validar campos obligatorios
  if (document.getElementById("nombre").value === "") {
    errorNombre.style.display = "block";
    isValid = false;
  } else {
    errorNombre.style.display = "none";
  }

  if (document.getElementById("apellido").value === "") {
    errorApellido.style.display = "block";
    isValid = false;
  } else {
    errorApellido.style.display = "none";
  }

  // Validar contraseñas
  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;

  if (password.length < 8) {
    errorPassword.innerHTML = "La contraseña debe tener al menos 8 caracteres.";
    errorPassword.style.display = "block";
    isValid = false;
  } else if (password !== password2) {
    errorPassword.innerHTML = "Las contraseñas no coinciden.";
    errorPassword.style.display = "block";
    isValid = false;
  } else {
    errorPassword.style.display = "none";
  }

  // Validar NIF
  const nif = document.getElementById("nif").value;
  const regexNif = /^\d{8}[a-zA-Z]$/;

  if (!regexNif.test(nif)) {
    errorNif.innerHTML = "El NIF no tiene un formato válido.";
    errorNif.style.display = "block";
    isValid = false;
  } else {
    errorNif.style.display = "none";
  }

  // Validar fecha de nacimiento
  const fecha = document.getElementById("fecha").value;
  const regexFecha =
    /^(0[1-9]|[12][0-9]|3[01])[\/|-](0[1-9]|1[0-2])[\/|-]\d{4}$/;
  const parts = fecha.split(/\/|-/);
  const userDate = new Date(parts[2], parts[1] - 1, parts[0]);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - userDate.getFullYear();

  if (!regexFecha.test(fecha) || age < 16 || age > 116) {
    errorFecha.innerHTML =
      "La fecha de nacimiento no tiene un formato o edad válidos.";
    errorFecha.style.display = "block";
    isValid = false;
  } else {
    errorFecha.style.display = "none";
  }

  // Validar email
  const email = document.getElementById("email").value;
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

  if (!regexEmail.test(email)) {
    errorEmail.innerHTML = "El email no tiene un formato válido.";
    errorEmail.style.display = "block";
    isValid = false;
  } else {
    errorEmail.style.display = "none";
  }

  if (!isValid) {
    e.preventDefault();
  }
});

document.getElementById("password2").addEventListener("blur", function () {
  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;

  if (password !== password2) {
    errorPassword2.innerHTML = "Las contraseñas no coinciden.";
    errorPassword2.style.display = "block";
  } else {
    errorPassword2.style.display = "none";
  }
});

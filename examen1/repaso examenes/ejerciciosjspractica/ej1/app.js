// 1) Se pide al usuario que seleccione/escriba “Francia, Mexico, India o Japon”.
// Se mostrará al usuario en pantalla la hora actual del país que ha seleccionado:
// “En este momento en XXXXXXXX son las XX:XX:XX”.

// Función para obtener la hora actual de una ubicación específica
function obtenerHora(pais) {
  let hora;
  switch (pais) {
    case "Francia":
      hora = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });
      break;
    case "Mexico":
      hora = new Date().toLocaleString("es-MX", {
        timeZone: "America/Mexico_City",
      });
      break;
    case "India":
      hora = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
      break;
    case "Japon":
      hora = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
      break;
    default:
      hora = "No se reconoce el país seleccionado.";
  }
  return hora;
}

// Función para manejar la interacción con el usuario
function mostrarHora() {
  const pais = prompt(
    "Por favor, seleccione/escriba 'Francia', 'Mexico', 'India' o 'Japon':"
  );
  const hora = obtenerHora(pais);
  alert(`En este momento en ${pais} son las ${hora}.`);
}

// Llamada a la función para mostrar la hora al usuario
mostrarHora();

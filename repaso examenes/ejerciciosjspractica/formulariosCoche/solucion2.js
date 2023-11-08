document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const requiredFields = document.querySelectorAll("input");
  const marcaSelect = document.getElementById("marca");
  const modeloSelect = document.getElementById("modelo");

  // 1) Cambiar el color al campo cuando obtiene el foco
  form.addEventListener("focusin", function (event) {
    if (
      event.target.tagName === "INPUT" ||
      event.target.tagName === "SELECT" ||
      event.target.tagName === "TEXTAREA"
    ) {
      event.target.style.backgroundColor = "green";
    }
  });

  form.addEventListener("focusout", function (event) {
    if (
      event.target.tagName === "INPUT" ||
      event.target.tagName === "SELECT" ||
      event.target.tagName === "TEXTAREA"
    ) {
      event.target.style.backgroundColor = "";
    }
  });

  // 3) Cargar marcas y modelos al iniciar el formulario
  const marcas = ["Marca 1", "Marca 2", "Marca 3"]; // Ejemplo de lista de marcas
  const modelosPorMarca = {
    "Marca 1": ["Modelo 1A", "Modelo 1B", "Modelo 1C"],
    "Marca 2": ["Modelo 2A", "Modelo 2B", "Modelo 2C"],
    "Marca 3": ["Modelo 3A", "Modelo 3B", "Modelo 3C"],
  }; // Ejemplo de modelos por marca

  marcas.forEach(function (marca) {
    const option = document.createElement("option");
    option.textContent = marca;
    marcaSelect.appendChild(option);
  });

  marcaSelect.addEventListener("change", function () {
    const selectedMarca = marcaSelect.value;
    while (modeloSelect.firstChild) {
      modeloSelect.removeChild(modeloSelect.firstChild);
    }
    if (selectedMarca) {
      modelosPorMarca[selectedMarca].forEach(function (modelo) {
        const option = document.createElement("option");
        option.textContent = modelo;
        modeloSelect.appendChild(option);
      });
    }
  });

  // 4) Validar formulario al enviar
  form.addEventListener("submit", function (event) {
    let isValid = true;
    requiredFields.forEach(function (field) {
      if (!field.value) {
        alert(`El campo ${field.name} no puede estar vacío.`);
        field.focus();
        isValid = false;
      }
    });
    if (!isValid) {
      event.preventDefault();
    }
  });
});

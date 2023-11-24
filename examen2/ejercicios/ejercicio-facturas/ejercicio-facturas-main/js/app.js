window.onload = function () {
  obtenerProductos();
};

// //evento del click del boton de agregar factura
// document
//   .getElementById("anadirFactura")
//   .addEventListener("click", anadirFactura);

document
  .getElementById("anadirFactura")
  .addEventListener("click", anadirFactura);

document.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.key === "Enter") {
    anadirFactura();
  }
});

function obtenerProductos() {
  fetch("php/productos.php", {
    method: "POST",
  })
    .then((resp) => resp.json())
    .then((data_resp) => {
      // la data_resp nos llega en formato JSON
      cargarProductosLista(data_resp);
    });
}

function cargarProductosLista(datos) {
  let trtabla = document.getElementById("tbodyproductos");
  for (const dato of datos) {
    let tr = document.createElement("tr");
    string = `
        <td>${dato.descripcion}</td>
        <td>${dato.codigo}</td>
        <td>${dato.precio}€</td>
    `;
    tr.innerHTML = string;
    trtabla.appendChild(tr);
  }
}

function anadirFactura() {
  //obtenemos el producto del input
  let prod = document.querySelector("#txtProducto");
  if (prod.value) {
    alert(prod.value);
    //reinicamos la caja de texto
    prod.value = "";
  } else {
    alert("El campo de texto no puede estar vacio");
  }
}

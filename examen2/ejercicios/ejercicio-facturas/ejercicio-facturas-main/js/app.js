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
    //traemos los datos de ese producto del php
    fetch("php/productoFactura.php", {
      method: "POST",
      body: prod.value,
    })
      .then((response) => response.json())
      .then((resultado) => {
        console.log("Resultado del servidor:", resultado);
        if (resultado.length == 0) {
          alert("El producto no se encuentra en la base de datos");
        } else {
          let cant = document.querySelector("#txtCantidad");
          agregarFilaFactura(resultado, cant.value);
        }
      })
      .then((resultado2) => {
        // reiniciamos las cajas de texto
        prod.value = "";
        document.querySelector("#txtCantidad").value = "";
        actualizarTotales();
      })
      .catch((error) => console.error("Fetch error:", error));
  } else {
    alert("El campo de texto no puede estar vacio");
  }
}

function agregarFilaFactura(producto, cantidad) {
  // obtenemos la tabla
  let tabla = document.getElementById("tablaFactura");

  // creamos una nueva fila
  let fila = document.createElement("tr");

  // agregamos las celdas con la información del producto
  fila.innerHTML = `
    <td>${producto[0].codigo}</td>
    <td>${cantidad}</td>
    <td>${producto[0].descripcion}</td>
    <td class="text-center font-medium text-green-500">${
      producto[0].precio
    }€</td>
    <td class="text-lg text-center">${calcularPrecioTotal(
      producto[0].precio,
      cantidad
    )}€</td>
  `;

  // agregamos la fila a la tabla
  tabla.appendChild(fila);

  // actualizamos los totales
  actualizarTotales();
}

function calcularPrecioTotal(precioUnitario, cantidad) {
  return (precioUnitario * cantidad).toFixed(2);
}

function actualizarTotales() {
  // Obtén la tabla y las filas
  let tabla = document.getElementById("tablaFactura");
  let filas = tabla.getElementsByTagName("tr");

  // Inicializa variables para los totales
  let subtotal = 0;
  let ivaPorcentaje = 0.21; // Cambia esto si el porcentaje de IVA es diferente
  let total = 0;

  // Recorre todas las filas, comenzando desde la segunda (ignorando la fila de encabezado)
  for (let i = 1; i < filas.length; i++) {
    let celdas = filas[i].querySelectorAll("td");

    // Verifica que haya suficientes celdas en la fila
    if (celdas.length >= 5) {
      let cantidad = parseInt(celdas[1].textContent.trim(), 10);
      let precioUnitario = parseFloat(
        celdas[3].textContent.trim().replace("€", "")
      );
      let precioTotal = parseFloat(
        celdas[4].textContent.trim().replace("€", "")
      );

      // Verifica que las conversiones sean válidas antes de sumar
      if (!isNaN(cantidad) && !isNaN(precioUnitario) && !isNaN(precioTotal)) {
        subtotal += precioTotal;
      }
    }
  }

  // Calcula el IVA y el total
  let iva = subtotal * ivaPorcentaje;
  total = subtotal + iva;

  // Actualiza los elementos en el HTML con los nuevos valores
  document.getElementById("txSubtotal").textContent = subtotal.toFixed(2);
  document.getElementById("txtIva").textContent = iva.toFixed(2);
  document.getElementById("txTotal").textContent = total.toFixed(2);
}

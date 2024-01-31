<template>
  <h1>Compras de {{ usuario }}</h1>
  <h2>Productos</h2>
  <table>
    <thead>
      <tr>
        <th>Producto</th>
        <th>Descripcion</th>
        <th>Precio</th>
        <th>Stock</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="producto in productos" :key="producto.id">
        <td>{{ producto.title }}</td>
        <td>{{ producto.description }}</td>
        <td>{{ producto.price }}</td>
        <td>{{ producto.stock }}</td>
        <td><button @click="comprarProducto(producto.id)">Comprar</button></td>
      </tr>
    </tbody>
  </table>
  <h2>Lista de la compra de {{ usuario }}</h2>
  <table>
    <thead>
      <tr>
        <th>Producto</th>
        <th>Precio Unidad</th>
        <th>Unidades Compradas</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="producto in productosComprados" :key="producto.id">
        <td>{{ producto.title }}</td>
        <td>{{ producto.price }}</td>
        <td>{{ producto.cantidad }}</td>
      </tr>
    </tbody>
  </table>
  <h1>Total Compra {{ total }}</h1>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      productos: [],
      usuario: "",
      productosComprados: [],
    };
  },
  created() {
    axios.get("json/products.json").then((response) => {
      this.productos = response.data.products;
      console.log(this.productos);
    });
    this.usuario = sessionStorage.getItem("nombreUsuario");
    if (this.usuario == null) {
      this.usuario = "Invitado";
    }
  },
  computed: {
    total() {
      let total = 0;
      this.productosComprados.forEach((producto) => {
        total += producto.price * producto.cantidad;
      });
      return total;
    },
  },
  methods: {
    comprarProducto(id) {
      let productoDB = this.productos.find((producto) => producto.id == id);
      if (productoDB.stock > 0) {
        productoDB.stock--;
        //encontrar producto en productosComprados
        let existe = this.productosComprados.find(
          (producto) => producto.id == id
        );
        if (existe) {
          const productoComprado = this.productosComprados.find(
            (producto) => producto.id == id
          );
          productoComprado.cantidad++;
        } else {
          let productoAComprar = {
            id: productoDB.id,
            title: productoDB.title,
            price: productoDB.price,
            cantidad: 1,
          };
          this.productosComprados.push(productoAComprar);
        }
      } else {
        alert("No hay stock");
      }
    },
  },
};
</script>

<style scoped>
td,
tr,
table {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
}

table {
  width: 90vw;
}
</style>

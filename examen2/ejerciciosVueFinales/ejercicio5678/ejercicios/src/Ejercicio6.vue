<template>
  <h1>Ejercicio 6</h1>
  <h2>Crea un gato</h2>
  <div>Titulo: <input type="text" /></div>
  <div>
    Filtro:
    <select v-model="filter">
      <option value="mono">mono</option>
      <option value="negate">negate</option>
      <option value="custom">custom</option>
    </select>
  </div>
  <div>
    Color:
    <select>
      <option>Azul</option>
      <option>Rojo</option>
      <option>Verde</option>
    </select>
  </div>
  <div>Tamaño: <input v-model="width" type="text" /></div>
  <br /><br /><button @click="getGato">Mostrar Gato</button> <br /><br />
  <comp-hijo :url="htmlimg"></comp-hijo>
</template>

<script>
import CompHijo from "./components/ejercicio6/CompHijo.vue";
export default {
  components: {
    CompHijo,
  },
  data() {
    return {
      htmlimg: "",
      filter: "",
      width: "100",
    };
  },
  computed: {
    url() {
      return `https://cataas.com/cat?filter=${this.filter}&width=${this.width}`;
    },
  },
  mounted() {
    this.getGato();
  },
  methods: {
    getGato() {
      console.log(this.url);
      fetch(this.url)
        .then((res) => {
          return res.url;
        })
        .then((data) => {
          this.htmlimg = data;
        });
    },
  },
};
</script>

<style></style>

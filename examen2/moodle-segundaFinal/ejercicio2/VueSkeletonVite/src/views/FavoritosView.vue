<template>
  <h2>En esta pagina te mostraremos los eventos turisticos que has elegido</h2>
  <hr />
  <table>
    <tr>
      <th>Evento</th>
      <th>Fecha</th>
      <th>Territorio</th>
      <th>Mas Info</th>
      <th>Quitar de favoritos</th>
    </tr>
    <tr v-for="evento in favoritos">
      <td>{{ evento.nombre }}</td>
      <td>{{ evento.fecha }}</td>
      <td>{{ evento.territorio }}</td>
      <td>{{ evento.masInfo }}</td>
      <td>
        <button @click="eliminarFavorito(nombre)">Eliminar de favoritos</button>
      </td>
    </tr>
  </table>
</template>

<script>
import { useStore } from "../stores/store.js";
import { mapWritableState } from "pinia";

export default {
  name: "FavoritosView",
  computed: {
    ...mapWritableState(useStore, ["Getfavoritos", "favoritos"]),
  },
  methods: {
    eliminarFavorito(nombre) {
      const favorito = this.favoritos.find(
        (favorito) => favorito.nombre == nombre
      );
      const index = this.favoritos.indexOf(favorito);
      this.favoritos.splice(index, 1);
      alert("Se ha eliminado el favorito");
      console.log(this.favoritos);
    },
  },
};
</script>

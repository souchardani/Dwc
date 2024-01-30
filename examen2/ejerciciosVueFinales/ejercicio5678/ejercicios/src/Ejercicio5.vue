<template>
  <h1>Ejercicio 5</h1>
  <h2>Pokeguia</h2>
  <div>
    Nombre: <input v-model="buscarNombre" type="text" />
    <button @click="buscarPoke">Buscar</button>
  </div>
  <div>
    <select v-model="filtro" @change="pokeSelected(filtro)">
      <option
        :value="pokemon.url"
        v-for="pokemon in allPokes"
        @change="pokeSelected(pokemon.url)"
      >
        {{ pokemon.name }}
      </option>
    </select>
  </div>
  <p v-if="loading">Cargando...</p>
  <poke-guia v-else :src="selectedPokeObj.img" :name="selectedPokeObj.name">
  </poke-guia>
  <div>
    <h2>Habilidades</h2>
    <p v-for="habilidad in selectedPokeObj.abilities">
      {{ habilidad.ability.name }}
    </p>
  </div>
  <div>
    <h2>Movimientos</h2>
    <p v-for="movimiento in selectedPokeObj.moves">
      {{ movimiento.move.name }}
    </p>
  </div>
</template>

<script>
import PokeGuia from "./components/ejercicio5/PokeGuia.vue";
export default {
  components: {
    PokeGuia,
  },
  data() {
    return {
      allPokes: [],
      selectedPoke: "",
      selectedPokeObj: {},
      filtro: "",
      loading: false,
      buscarNombre: "",
    };
  },
  mounted() {
    fetch("https://pokeapi.co/api/v2/pokemon/?offseet=20&limit=20")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.allPokes = data.results;
        this.selectedPoke = this.allPokes[0];
        this.pokeSelected(this.selectedPoke.url);
      });
  },
  methods: {
    pokeSelected(url) {
      console.log(this.filtro);
      this.loading = true;
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.loading = false;
          this.selectedPokeObj = data;
          this.selectedPokeObj.img = data.sprites.front_default;
        });
    },
    buscarPoke() {
      const poke = this.allPokes.find((poke) =>
        poke.name.includes(this.buscarNombre)
      );
      this.pokeSelected(poke.url);
    },
  },
};
</script>

<style></style>

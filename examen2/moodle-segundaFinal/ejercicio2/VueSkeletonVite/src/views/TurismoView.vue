<template>
  <img src="../assets/turismo_200x200.png" alt="" />
  <h1>Creacion de ruta turistica</h1>
  <p>Selecciona una opción</p>
  <div>
    Selecciona provincia:
    <select
      @change="filtrado('provincia')"
      v-model="filtroProvincia"
      name=""
      id=""
    >
      <option selected value="">Elige una opcion (por defecto)</option>
      <option value="todas">Todas</option>
      <option value="Araba">Araba</option>
      <option value="Bizkaia">Bizkaia</option>
      <option value="Gipuzkoa">Gipuzkoa</option>
    </select>
  </div>
  <div>
    <br />
    Selecciona mes del evento:
    <select @change="filtrado('mes')" v-model="filtroMes" name="" id="">
      <option value="nofilter">Elige una opcion (Todas)</option>
      <option value="01">Enero</option>
      <option value="02">Febrero</option>
      <option value="03">Marzo</option>
      <option value="04">Abril</option>
      <option value="05">Mayo</option>
      <option value="06">Junio</option>
      <option value="07">Julio</option>
      <option value="08">Agosto</option>
      <option value="09">Septiembre</option>
      <option value="10">Octubre</option>
      <option value="11">Noviembre</option>
      <option value="12">Diciembre</option>
    </select>
  </div>
  <br /><br />
  <table>
    <tr>
      <th>Evento</th>
      <th>Fecha</th>
      <th>Territorio</th>
      <th>Descripcion</th>
      <th>Mas Info</th>
      <th>Favoritos</th>
    </tr>
    <tr :class="getClass(item)" v-for="item in turismoFiltro" :key="item.id">
      <td>{{ item.documentName }}</td>
      <td>{{ item.eventStartDate }}</td>
      <td>{{ item.territory }}</td>
      <td>{{ item.documentDescription }}</td>
      <td>
        <a :href="item.friendlyUrl">{{ item.friendlyUrl }}</a>
      </td>
      <td>
        <button @click="addFavorito(item.documentName)">Hacer Favorito</button>
      </td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
import { useStore } from "../stores/store.js";
import { mapWritableState } from "pinia";

export default {
  name: "TurismoView",
  data() {
    return {
      turismo: [],
      turismoFiltro: [],
      filtroProvincia: "",
      filtroMes: "nofilter",
    };
  },
  computed: {
    ...mapWritableState(useStore, ["Getfavoritos", "favoritos"]),
  },
  methods: {
    filtrado(tipo) {
      if (this.filtroProvincia == "") {
        this.turismoFiltro = [];
      } else {
        if (this.filtroProvincia == "todas") {
          if (this.filtroMes == "nofilter") {
            this.turismoFiltro = this.turismo;
          } else {
            this.turismoFiltro = this.turismo.filter(
              (item) => item.eventSearchDate1.slice(4, 6) == this.filtroMes
            );
          }
        } else {
          if (this.filtroMes == "nofilter") {
            this.turismoFiltro = this.turismo.filter(
              (item) => item.territory == this.filtroProvincia
            );
          } else {
            this.turismoFiltro = this.turismo.filter(
              (item) =>
                item.territory == this.filtroProvincia &&
                item.eventSearchDate1.slice(4, 6) == this.filtroMes
            );
          }
        }
      }
    },
    getClass(item) {
      if (item.territory == "Araba") {
        return "red";
      } else if (item.territory == "Bizkaia") {
        return "blue";
      } else if (item.territory == "Gipuzkoa") {
        return "green";
      } else {
        return "white";
      }
    },
    addFavorito(nombre) {
      const evento = this.turismo.find((item) => item.documentName == nombre);
      if (this.favoritos.find((item) => item.nombre == evento.documentName)) {
        alert("Ya esta en favoritos");
        return;
      }
      this.favoritos.push({
        nombre: evento.documentName,
        fecha: evento.eventStartDate,
        territorio: evento.territory,
        masInfo: evento.friendlyUrl,
      });
      console.log(this.favoritos);
      alert("Se ha añadido a favoritos");
    },
  },
  async mounted() {
    const datos = await axios.get("json/agenda.json");
    this.turismo = datos.data;
    console.log(this.turismo);
  },
};
</script>

<style>
table,
td,
th {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
}

.red {
  background-color: rgb(240, 162, 162);
}
.blue {
  background-color: rgb(162, 162, 240);
}

.green {
  background-color: rgb(162, 240, 162);
}
</style>

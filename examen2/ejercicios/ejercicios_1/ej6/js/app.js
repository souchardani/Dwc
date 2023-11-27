const vueApp = {
  data() {
    return {
      txtDeporte: "",
      deportes: [
        {
          nombre: "Nadar",
          estado: false,
        },
        {
          nombre: "Tenis",
          estado: false,
        },
      ],
    };
  },
  computed: {},
  methods: {
    agregarDeporte() {
      this.deportes.push({ nombre: this.txtDeporte, estado: false });
    },
    completar(deporte) {
      deporte.estado = !deporte.estado;
    },
    eliminar(indice) {
      alert("Se ha eliminado el deporte: " + this.deportes[indice].nombre);
      this.deportes.splice(indice, 1);
    },
  },
};

Vue.createApp(vueApp).mount("#app");

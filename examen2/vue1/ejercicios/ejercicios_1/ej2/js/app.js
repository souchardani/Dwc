const vueApp = {
  data() {
    return {
      message: "Hola mundo con Vue",
      frutas: [
        { nombre: "Manzana", stock: 0 },
        { nombre: "Pera", stock: 10 },
        { nombre: "Platano", stock: 11 },
        // { nombre: "Mandarina", stock: 48 },
        // { nombre: "Kiwi", stock: 0 },
      ],
      txtFruta: "",
    };
  },
  methods: {
    agregarFruta() {
      let fruta = {
        nombre: this.txtFruta,
        stock: 0,
      };
      this.frutas.unshift(fruta);
    },
  },
};

Vue.createApp(vueApp).mount("#app");

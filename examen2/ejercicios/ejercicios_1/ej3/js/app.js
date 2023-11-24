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
  computed: {
    cantidadFrutas() {
      let sumFrutas = 0;
      this.frutas.forEach((element) => {
        sumFrutas += element.stock;
      });
      return sumFrutas;
    },
  },
  methods: {
    agregarFruta() {
      let fruta = {
        nombre: this.txtFruta,
        stock: 0,
      };
      this.frutas.push(fruta);
    },
    sumarFruta(fruta) {
      fruta.stock += 1;
    },
  },
};

Vue.createApp(vueApp).mount("#app");

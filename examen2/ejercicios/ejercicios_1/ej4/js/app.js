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
      rangoValor: 5,
      filtradoRango: false,
      busquedaFruta: "",
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
    frutasBusca() {
      return this.frutas.filter((fruta) =>
        fruta.nombre.includes(this.busquedaFruta)
      );
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
    filtrarRango() {
      this.filtradoRango = true;
      let frutasRango = this.frutas.filter((fruta) => {
        return fruta.stock >= this.rangoValor;
      });
      return frutasRango;
    },
    frutasFiltro() {
      if (this.filtradoRango) {
        return this.filtrarRango();
      } else {
        return this.frutas;
      }
    },
  },
};

Vue.createApp(vueApp).mount("#app");

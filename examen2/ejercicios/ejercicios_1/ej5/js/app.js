const vueApp = {
  data() {
    return {
      txtClase: "bg-warning",
      activo: true,
      toggle1: true,
      toggle2: false,
    };
  },
  computed: {},
  methods: {
    toggleInfo() {
      this.toggle1 = !this.toggle1;
      this.toggle2 = !this.toggle2;
    },
  },
};

Vue.createApp(vueApp).mount("#app");

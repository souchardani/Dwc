const app = Vue.createApp({
  data() {
    return {
      posicionx: "",
      posiciony: "",
    };
  },
  methods: {
    hover(event) {
      console.log("entrando evento");
      this.posicionx = event.clientX;
      this.posiciony = event.clientY;
    },
  },
});

app.mount("#app");

import { defineStore } from "pinia";
export const useStore = defineStore("store", {
  state: () => ({ count: 0, name: "Eduardo", favoritos: [] }),
  getters: {
    doubleCount: (state) => state.count * 2,
    Getfavoritos: (state) => {
      return state.favoritos;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

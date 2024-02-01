<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/TX.jpg" />
    <br />
    <img alt="Vue logo" src="../assets/euskadi-azul_200x200.jpg" />
    <HelloWorld msg="Ongi etorri"></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

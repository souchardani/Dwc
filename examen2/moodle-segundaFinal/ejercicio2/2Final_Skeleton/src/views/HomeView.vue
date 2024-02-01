<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <HelloWorld msg="This is a Hello World message"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

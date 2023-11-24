<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    

      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink :to="{name:'about'}">About</RouterLink> |
        <RouterLink to="/servicios">Servicios</RouterLink> |
        <RouterLink to="/blog">Blog</RouterLink> |
        <RouterLink to="/contactos">Contactos</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

.router-link-exact-active{
  color: red;
}

</style>

<template>
  <h1>Pagina de login</h1>
  <h2>Datos de acceso</h2>
  <div>Email: <input type="text" v-model="email" /></div>
  <br /><br />
  <div>Password: <input type="text" v-model="password" /></div>
  <br /><br />
  <button @click="login">login</button>
  <button @click="loginInvitado">Usuario invitado</button>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      usuarios: [],
    };
  },
  methods: {
    login() {
      let usuario = this.usuarios.find(
        (usuario) => usuario.email == this.email
      );
      if (usuario) {
        if (usuario.password == this.password) {
          alert("Bienvenido " + usuario.name);
          //guardar en sessionStorage
          sessionStorage.setItem("nombreUsuario", usuario.name);
          this.$router.push("/compras");
        } else {
          alert("Password incorrecto");
        }
      } else {
        alert("Usuario no encontrado");
      }
    },
    loginInvitado() {
      sessionStorage.clear();
      alert("Bienvenido usuario invitado");
      this.$router.push("/compras");
    },
  },
  mounted() {
    axios.get("json/usuarios.json").then((response) => {
      this.usuarios = response.data;
    });
  },
};
</script>

<style scoped>
button {
  margin: 10px;
}
</style>

<template>
    <div class="home">
        <img alt="Turismo logo" src="../assets/turismo_200x200.png">  
    </div>
    <h1>Creación de ruta turística</h1>
  
    <h3>FILTROS</h3>
    <p>Los filtros NO son excluyentes, es decir se puede filtrar por territorio, por mes del evento y por territorio y mes</p>
    <label for="territorios">Selecciona provincia:</label>
    <select v-model="territorio">
      <option disabled value="">Elige una opción</option>
      <option value="Todos">Todos</option>
      <option value="Araba">Araba</option>
      <option value="Bizkaia">Bizkaia</option>
      <option value="Gipuzkoa">Gipuzkoa</option>
    </select>
    
    <label for="Fechas">Selecciona mes del evento:</label>
    <select v-model="mes">
      <option  value="">Elige una opción (Todos)</option>
      <option value="01">Enero</option>
      <option value="02">Febrero</option>
      <option value="03">Marzo</option>
      <option value="04">Abril</option>
      <option value="05">Mayo</option>
      <option value="06">Junio</option>
      <option value="07">Julio</option>
      <option value="08">Agosto</option>
      <option value="09">Setiembre</option>
      <option value="10">Octubre</option>
      <option value="11">Noviembre</option>
      <option value="12">Diciembre</option>
    </select>
    <hr><hr>
    <table class="content-table">
      <thead>
        <tr>
        <th scope="col">Evento</th>
        <th scope="col">Fecha</th>
        <th scope="col">Territorio</th>
        <th scope="col">Descripción</th>
        <th scope="col">Más Info</th>
        <th scope="col">Favoritos</th>
      </tr>
      </thead>
      <tbody>
        <tr :style="backClass(evento.territory)" scope="row" v-for="evento in eventosSelect">
          <td>{{ evento.documentName }}</td>
          <td>{{ evento.eventStartDate }}</td>
          <td>{{ evento.territory }}</td>
          <td>{{ evento.documentDescription }}</td>
          <td><a  target="_BLANK" :href="evento.friendlyUrl">{{ evento.friendlyUrl }}</a></td>
          <!-- <td><img class="imagen" src="../assets/like.png" alt="like" @click="btnLike($event,evento)"></td> -->
          <td><button id="btnFavorito" style="background-color: lightgrey;" @click="btnPulsado($event,evento)">Añadir a favorito</button></td>         
        </tr>
      </tbody>
    </table>
      
    <p><hr></p>
</template>

<script>
 import axios from 'axios';
 export default {
    data(){
      return{
        usuario:'',
        eventos:[],
        territorio:'',
        mes:'',
        imagenLike:'',
        favoritos:[]
      }
    },
      mounted() {
        this.cargarEventos()
      },
      computed:{
        eventosSelect(){
          if (this.territorio != "Todos"){
            if (this.mes !="")
              return this.eventos.filter((evento) => (evento.territory == this.territorio) && (evento.eventStartDate.substring(3,5)==this.mes) );
            if (this.mes =='')
              return this.eventos.filter((evento) => (evento.territory == this.territorio))
          }
          else {
            if (this.mes !="")
              return this.eventos.filter((evento) => (evento.eventStartDate.substring(3,5)==this.mes))
            if (this.mes =='')
              return this.eventos;            
          } 
            
        }
      }, 
  methods:{
    cargarEventos(){
      axios.get('../json/agenda.json')
            .then((respuesta) => {
                console.log(respuesta);
                this.eventos = respuesta.data;
            });
    },
    backClass(valor){
      if (valor=="Araba"){
        return {'background-color':'coral'}
      }
      else if (valor=="Bizkaia"){
        return {'background-color':'bisque'}
      }
      else if (valor == "Gipuzkoa"){
        return {'background-color':'darkkhaki'}
      }
    },
    /* btnLike(e,evento){
      // cambio de la imagen al hacer click
      alert(evento.territory)
      alert(e.target.src)
      if (e.target.src==require("../assets/like_2.png"))
        e.target.src=require("../assets/like.png")
      else
        e.target.src=require("../assets/like_2.png")
    }, */
    btnPulsado(e,evento){
      alert(evento.documentName)
      if (sessionStorage.getItem('favoritos') != null){
        // alert("Entradas sucesivas")
        //recuperamos el objeto de sessionStorage
        this.favoritos=JSON.parse(sessionStorage.getItem('favoritos'));
        
        //buscamos el elemento dentro del array 
        const i = this.favoritos.findIndex(el => el.documentName === evento.documentName);
        //si i=-1 indica que el elemento no ha sido encontrado, y por lo tanto hay que añadirlo a favoritos
        if(i == -1 ){
          this.favoritos.push({documentName : evento.documentName, eventStartDate : evento.eventStartDate, territory : evento.territory, friendlyUrl : evento.friendlyUrl})
          sessionStorage.setItem('favoritos', JSON.stringify(this.favoritos));
        }
        //Si el elemento se ha encontrado no hay que añadirlo a favoritos
        else{
          alert("El evento ya está guardado como favorito")
        }
      }
      else{
        // alert("Primera entrada")
        this.favoritos.push({documentName : evento.documentName, eventStartDate : evento.eventStartDate, territory : evento.territory, friendlyUrl : evento.friendlyUrl})
        sessionStorage.setItem('favoritos', JSON.stringify(this.favoritos));
      }
      

      /* //Cambiar Texto, Color de botón y añadir a SessionStorage
      if (e.target.textContent=="Añadir a favorito")
      {
        e.target.textContent="Quitar de favorito";
        e.target.style.backgroundColor="rgb(52, 185, 25)";       
      }
      else{
        e.target.textContent="Añadir a favorito"
        e.target.style.backgroundColor="lightgrey";
      } */
      
    }
    
    }
  }
</script>
<style>
  table {
    width: 80%; 
    border-collapse: collapse;
    margin: 0 auto;
  }
th, td {
    padding: 8px;
    text-align: left;
    border: 1px solid #dee2e6;
  }
th {
  background-color: darkgrey;
  height: 40px;
  text-align: center;
  font-weight: bold;
  }
.imagen{
  height: 60px;
  width: 60px;
}

</style>
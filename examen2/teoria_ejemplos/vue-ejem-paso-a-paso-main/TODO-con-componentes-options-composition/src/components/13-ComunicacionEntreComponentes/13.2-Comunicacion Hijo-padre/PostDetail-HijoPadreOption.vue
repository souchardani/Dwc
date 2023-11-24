<template>
    <div class="post">
        <!-- <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique illum quod praesentium, nulla excepturi vitae saepe quos eum illo accusamus, iure qui earum consequatur, sit doloribus sint ab accusantium?</p> -->
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
        <input type="text" v-model="msg">
        <button @click="lanzarMensaje">Mostrar Mensaje</button>
    </div>
</template>

<script> 
    export default{
        emits:['Mensaje'],
        name: 'PostDetail-HijoPadreOption',
        components: {},
        props:[ 'title', 'content'], 
        data(){
            return{
                msg : ''
            }
        },
        mounted(){
        },
        methods:{
            lanzarMensaje(){
                return this.$emit('Mensaje', this.msg)
            }
        }
    }
</script>

<style>
.post{
    width: 300px;
    height: 200px;
    background-color: antiquewhite;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}

</style>
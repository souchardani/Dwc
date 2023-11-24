<template>
    <div class="post">
        <!-- <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique illum quod praesentium, nulla excepturi vitae saepe quos eum illo accusamus, iure qui earum consequatur, sit doloribus sint ab accusantium?</p> -->
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
    </div>
</template>

<script> 
    export default{
        name: 'PostDetailOption',
        components: {},
        props:[ 'title', 'content'], 
        data(){
            return{

            }
        },
        mounted(){
        },
        methods:{
            
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
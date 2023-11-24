<template>
    <div class="post">
        <!-- <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique illum quod praesentium, nulla excepturi vitae saepe quos eum illo accusamus, iure qui earum consequatur, sit doloribus sint ab accusantium?</p> -->
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps([ 'title', 'content'])
    /* const props= defineProps({
        title: {
            type: String,
            required: true
        },
        content:{
            type: String,
            required:false,
            default: "Este post no tiene contenido"
        }

    }) */

</script>

<style scoped>
.post{
    width: 300px;
    height: 200px;
    background-color: antiquewhite;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}
</style>
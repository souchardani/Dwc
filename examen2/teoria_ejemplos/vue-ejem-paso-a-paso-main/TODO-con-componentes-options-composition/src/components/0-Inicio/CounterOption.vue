<template>
    <h2>Valor del contador</h2>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Incrementar</button>
</template>

<script>
export default{
    name: 'CounterOption',
    components: {},
    data(){
        return{
            counter:0
        }
    },
    methods:{
        addCounter(){
            this.counter++;
        }
    }
}

</script>

<style>

</style>
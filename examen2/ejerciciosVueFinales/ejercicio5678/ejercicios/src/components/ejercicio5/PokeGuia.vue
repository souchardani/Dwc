<template>
  <div>
    <img :src="src" />
    <p>
      Nombre del pokemon:<span> {{ name }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["src", "name"],
};
</script>

<template>
  <div id="wrapper">
    <h3> Teste: {{ store.tipo}} </h3>
  </div>
</template>

<script>
  import { store } from '@/store/storage';
export default {
  name: "VisorTeste",
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped>
#wrapper {
  border: 4px;
  border-color: black;
  padding: 8.5px;
  margin: 10px;
}

h3 {
  text-align: center;
}
</style>

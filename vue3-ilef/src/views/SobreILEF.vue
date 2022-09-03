<template>
    <div>
      <NavigationBar/>
      <p>desenvolvido por:</p>
      <p>Artigo em:</p>
      <p>Ano:</p>
      <p>Direitos Autorais</p>
    </div>
  </template>
  
  <script>
import NavigationBar from '@/components/NavigationBar.vue';
  export default {
    name: "sobreILEF",
    props: {},
    components: { NavigationBar }
};
  </script>
  
  <style scoped></style>
  
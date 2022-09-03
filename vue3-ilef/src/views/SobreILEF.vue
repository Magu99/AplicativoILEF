<template>
    <div>
      <NavigationBar/>
      <p><b>Desenvolvido por:</b> Matheus Wagner, Elizeu & Cleber</p>
      <p><b>Artigo em:</b> permalink do artigo original</p>
      <p><em>Direitos Autorais ® Mestre Elizeu 2022</em></p>
      <br><br>
      <h3>Como aplicar o teste:</h3>
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
  
  <style scoped>
    p {
      text-align: left;
      margin-left: 12em;
    }

    h3 {
      text-align: left;
      margin-left: 13em;
    }
  </style>
  
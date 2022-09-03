<template>
    <div>
      <h4 :="perguntas">{{perguntas[0]}}</h4>
    </div>
  </template>
  
  <script>
  export default {
    name: "TestePerguntas",
    props: {},
    data(){
      return {
        perguntas:['perguntei.','dois'],
        perguntaAtual:0
      }
    }
  };
  </script>
  
  <style scoped></style>
  
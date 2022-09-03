<!-- conectar cada item da lista com uma parametros pré-determinados do template PáginaFluxo -->


<template>
    <div>
      <h3>Lista de Palavras</h3>
      <ol> 
        <li></li>
      </ol>
    </div>
  </template>
  
  <script>
  export default {
    name: "TestePalavras",
    props: {},
    data() {
      return {
        lista:["vai", "uma", "para", "vovó", "ela", "ave",
				"eu", "dia", "caiu", "vaca", "gato", "pula", "vila",
				"pia", "faca", "lago", "pipa", "sala", "sapo", "pato"]
      }
    },
  };
  </script>
  
  <style scoped></style>
  
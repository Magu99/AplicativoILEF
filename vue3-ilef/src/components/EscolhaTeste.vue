<!-- conectar cada item da lista com uma parametros pré-determinados do template PáginaFluxo -->

<template>
  <div>
    <h3>Qual tipo de teste?</h3>
    <div id="button-wrapper">
      <button id="cadastro">Leitura</button>
      <button id="inciar">Palavras</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EscolhaTeste",
  props: {},
  data() {
    return {
      lista: [],
    };
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
}

#button-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
}

button {
  margin-top: 8em;
  display: block;
  height: 10em;
  width: 20em;
  font-size: large;
}
</style>

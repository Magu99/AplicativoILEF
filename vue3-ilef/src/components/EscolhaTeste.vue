<!-- conectar cada item da lista com uma parametros pré-determinados do template PáginaFluxo -->

<template>
  <div>
    <h3>Qual tipo de teste?</h3>
    <div id="button-wrapper">
      <button id="leitura" @click="escolheuLeitura()">Leitura</button>
      <button id="palavras" @click="escolheuPalavras()">Palavras</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EscolhaTeste",
  props: {},
  methods: {
    escolheuLeitura() {
      // setar o tipo de teste como Leitura
    },
    escolheuPalavras() {
      // setar o tipo do teste como palavras
    },
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

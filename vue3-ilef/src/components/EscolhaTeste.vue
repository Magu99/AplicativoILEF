<!-- conectar cada item da lista com uma parametros pré-determinados do template PáginaFluxo -->

<template>
  <div>
    <h3>Qual tipo de teste?</h3>
    <div id="button-wrapper">
      <button id="leitura" @click="setTeste('Leitura')">Leitura</button>
      <button id="palavras" @click="setTeste('Palavras')">Palavras</button>
    </div>
  </div>
</template>

<script>
  import { store } from '@/store/storage';
export default {
  name: "EscolhaTeste",
  data() {
    return {
      store,
    }
  },
  methods: {
    setTeste(value) {
      this.store.tipo = value;
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
  margin-bottom: 8em;
  display: block;
  height: 10em;
  width: 20em;
  font-size: large;
}
</style>

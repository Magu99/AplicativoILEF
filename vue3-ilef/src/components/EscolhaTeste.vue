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
  margin-top: 1em;
  text-align: center;
}

#button-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 30vh;

}

button {
  font-size: 2.5vw;
  padding: 15px;
}
</style>

<!-- conectar cada item da lista com uma parametros pré-determinados do template PáginaFluxo -->

<template>
  <div id="wrapper">
    <button v-for="(v, i) in lista" :key="i" @click="setDificuldade()">
      {{ v }}
    </button>
  </div>
</template>

<script>
export default {
  name: "EscolhaDificuldade",
  props: {},
  data() {
    return {
      lista: [
        "Pré A",
        "Pré B",
        "1º Ano",
        "2º Ano",
        "3º Ano",
        "4º Ano",
        "5º Ano",
      ],
    };
  },
  methods: {
    setDificuldade() {
      // setar dificuldade ao clicar no elemento da lista
    },
  },
  computed: {},
};
</script>

<style scoped>
#wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3em;
  border-style: 1px;
  border: 2px;
}

button {
  border-color: aquamarine;
  align-self: center;
  width: 14em;
  margin: 0.5em;
  font-size: large;
}
</style>

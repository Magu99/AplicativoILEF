<!-- conectar cada item da lista com uma parametros pré-determinados do template PáginaFluxo -->

<template>
  <div id="wrapper">
    <button v-for="(v, i) in lista" :key="i" @click="setDificuldade(v)">
      {{ v }}
    </button>
  </div>
</template>

<script>
import { store } from "@/store/storage";
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
      store,
    };
  },
  methods: {
    setDificuldade(v) {
      this.store.dificuldade = v;
    },
  },
  computed: {},
};
</script>

<style scoped>
#wrapper {

}

button {
}
</style>

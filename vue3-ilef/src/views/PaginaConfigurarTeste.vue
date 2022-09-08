<template>
  <div>
    <EscolhaDificuldade v-if="!dificuldade" />
    <EscolhaTeste v-if="dificuldade" />
    <div id="button-containter">
      <button v-if="dificuldade && teste">
        <router-link to="/teste"> Configuração Concluída </router-link>
      </button>
      <button @click="clearTipo(); clearDificuldade()"> Resetar Escolhas </button>
    </div>
  </div>
</template>

<script>
import EscolhaDificuldade from "@/components/EscolhaDificuldade.vue";
import EscolhaTeste from "@/components/EscolhaTeste.vue";
export default {
  name: "PaginaConfigurarTeste",
  props: {},
  components: { EscolhaDificuldade, EscolhaTeste },
  data() {
    return {
      tipo: "",
      dificuldade: "",
    };
  },
  methods: {
    clearDificuldade() {
      this.dificuldade = "";
    },
    clearTipo() {
      this.tipo = "";
    },
  },
};
</script>

<style scoped></style>

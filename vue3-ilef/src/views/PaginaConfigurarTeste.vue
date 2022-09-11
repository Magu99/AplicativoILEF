<template>
  <div>
    <TituloILEF />
    <VisorDificuldade v-if="store.dificuldade !== ''" />
    <EscolhaDificuldade v-if="step == 0" />

    <VisorTeste v-if="store.tipo !== ''"/>
    <EscolhaTeste v-if="step == 1" />
    <div id="button-wrapper">
      <button v-if="step === 2">
        <router-link to="/teste">
          Iniciar Teste
        </router-link>
      </button>
      <button
        id="reset-config-btn"
        @click="setDificuldade(''), setTeste('')"
        v-if="step === 2"
      >
        Resetar Escolhas
      </button>
    </div>
  </div>
</template>

<script>
import EscolhaDificuldade from "@/components/EscolhaDificuldade.vue";
import EscolhaTeste from "@/components/EscolhaTeste.vue";
import TituloILEF from "@/components/TituloILEF.vue";
import { store } from "@/store/storage";
import VisorDificuldade from "@/components/VisorDificuldade.vue";
import VisorTeste from "@/components/VisorTeste.vue";

export default {
  name: "PaginaConfigurarTeste",
  props: {},
  components: {
    EscolhaDificuldade,
    EscolhaTeste,
    TituloILEF,
    VisorDificuldade,
    VisorTeste,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    setDificuldade(value) {
      this.store.dificuldade = value;
    },

    setTeste(value) {
      this.store.tipo = value;
    },
  },
  computed: {
    step() {
      // Aqui tem três passos: 0=escolher dificuldade, 1=escolher tipo, 2=confirmar escolha
      if (this.store.dificuldade !== "") {
        if (this.store.tipo !== "") {
          return 2;
        } else {return 1}
      } else {return 0}
    },
  },
};
</script>

<style scoped>
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
  font-size: large;
  padding: 1em;
}

</style>

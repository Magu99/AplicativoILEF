<template>
  <div>
    <TituloILEF />
    <NavigationBar />
    <transition>
      <VisorDificuldade v-if="store.dificuldade !== ''" />
    </transition>
    <transition>
      <EscolhaDificuldade v-if="step == 0" />
    </transition>

    <transition>
      <VisorTeste v-if="store.tipo !== ''" />
    </transition>
    <transition>
      <EscolhaTeste v-if="step == 1" />
    </transition>
    <div id="button-wrapper">
      <button
        id="reset-config-btn"
        @click="setDificuldade(''), setTeste('')"
        v-if="step === 2"
      >
        Resetar Escolhas
      </button>
      <button v-if="step === 2" @click="$router.push('teste')">
        Iniciar Teste
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
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "PaginaConfigurarTeste",
  props: {},
  components: {
    EscolhaDificuldade,
    EscolhaTeste,
    TituloILEF,
    VisorDificuldade,
    VisorTeste,
    NavigationBar,
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
      // Aqui tem três passos: 0=escolher dificuldade, 1=escolher tipo, 2=confirmar/resetar escolhas
      if (this.store.dificuldade !== "") {
        if (this.store.tipo !== "") {
          return 2;
        } else {
          return 1;
        }
      } else {
        return 0;
      }
    },
  },
};
</script>

<style scoped>
#button-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

button {
  margin: 15px;
  display: inline-block;
  font-size: large;
  padding: 1em;
}

.v-enter-active,
.v-leave-active {

}

.v-enter-from,
.v-leave-to {
}
</style>

<template>
  <div>
    <TituloILEF />
    <NavigationBar />
    <div>
      <VisorDificuldade v-if="store.dificuldade !== ''" />
      <EscolhaDificuldade v-if="step == 0" />
    </div>

    <div>
      <VisorTeste v-if="store.tipo !== ''" />
      <EscolhaTeste v-if="step == 1" />
    </div>
    <div id="button-wrapper">
      <button
        id="reset-config-btn"
        @click="setDificuldade(''), setTeste('')"
        v-if="step === 2 || step == 1"
      >
      <img src="@/assets/left-return-arrow.svg" alt="Desfazer Configurações">
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 30vh;

}

button {
  padding: 15px;
  font-size: 2em;
  font-family: Blorp;
}


#reset-config-btn{
  border: none;
  background: none;
}

img{
  width: 3vw;
  padding-left: 0.25em;
  padding-right: 0.25em;
}
</style>

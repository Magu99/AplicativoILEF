<template>
  <div >
    <button id="fechar" @click="$router.push('configurar-teste')"  > X </button>
    <div id="wrapper">
      <button class="navegar">&lt;</button>
      <div @click="mudarFrame(1, $event)" id="content">
        <!-- <transition> -->
        <h4>{{}}</h4>
        <!-- </transition> -->
      </div>
      <button class="navegar">></button>
    </div>
  </div>
</template>

<script>
import { store } from "@/store/storage";

export default {
  name: "TestePerguntas",
  props: {},
  data() {
    return {
      store,
      frameAtual: 0,
    };
  },
  methods: {
    mudarFrame(n, event) {
      event ? event.preventdefault() : null;
      this.frameAtual += n;
    },
  },
  computed: {},
};
</script>

<style scoped>
#wrapper {
}

#content {
}

.navegar {
}

.fechar {
  position: absolute;
}
</style>

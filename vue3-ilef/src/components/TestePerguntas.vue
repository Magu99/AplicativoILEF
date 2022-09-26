<template>
  <div>
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
      event ? event.preventdefault : null;
      this.frameAtual += n;
    },
  },
  computed: {},
};
</script>

<style scoped>
#wrapper {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  border: dotted green 2px;
  width: 100%;
  height: 40em;
}

#content {
  width: 70%;
  height: 90%;
  border: dotted red 1px;
  text-align: center;
}

.navegar {
  padding: 1.5em;
}

.fechar {
  position: absolute;
}
</style>

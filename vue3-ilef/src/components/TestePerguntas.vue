<template>
  <div id="wrapper">
    <div @click="mudarFrame(1)" id="content">
      <!-- <transition> -->
      <h4>{{frameAtual}} </h4>
      <!-- </transition> -->
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
    mudarFrame(n) {
      this.frameAtual += n;
    },
  },
  computed: {
    // textoExposto() {
    //   var f = this.frameAtual;
    //   switch (f) {
    //     case 0:
    //       return "Título & Texto"
    //     case 1:
    //       return "Premissa"
    //     default:
    //       return "Pergunta Nº " + this.frameAtual
    //   }
    // },
  },
};
</script>

<style scoped>
#wrapper {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  border: dotted 2px;
  width: 100%;
  height: 40em;
}

#content {
  width: 70%;
  height: 90%;
  border: dotted red 1px;
  text-align: center;
}
</style>

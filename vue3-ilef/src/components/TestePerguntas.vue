<template>
  <div @click="mudarPergunta(1)">
    <!-- <transition> -->
      <h4>{{ perguntas[perguntaAtual] }}</h4>
    <!-- </transition> -->
  </div>
</template>

<script>
import { store } from '@/store/storage';

export default {
  name: "TestePerguntas",
  props: { teste: String, dificuldade: String },
  data() {
    return {
      store,
      perguntas: ["perguntei.", "dois", "pergunta três"],
      perguntaAtual: 0,
    };
  },
  methods: {
    mudarPergunta(n) {
      this.perguntaAtual += n;
    },
  },
};
</script>

<style scoped></style>

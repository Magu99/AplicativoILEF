<template>
  <div @click="mudarPergunta()">
    <!-- <transition> -->
      <h4>{{ perguntas[0] }}</h4>
      <h4>{{ perguntas[1] }}</h4>
      <h4>{{ perguntas[2] }}</h4>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: "TestePerguntas",
  props: { tipo: String, dificuldade: String },
  data() {
    return {
      dificuldadeEscolhida: this.dificuldade,
      perguntas: ["perguntei.", "dois", "pergunta três"],
      perguntaAtual: 0,
    };
  },
  methods: {
    mudarPergunta() {
      this.perguntaAtual++;
    },
  },
};
</script>

<style scoped></style>

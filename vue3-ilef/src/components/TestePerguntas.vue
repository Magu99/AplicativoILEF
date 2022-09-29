<template>
  <div id="container">
    <button id="fechar" @click="$router.push('configurar-teste')">X</button>
    <div id="wrapper">
      <button class="navegar" @click="mudarFrame(-1)">&lt;</button>
      <div id="content" @click="mudarFrame(1)">
        <!-- <transition> -->
        <p id="perguntas">
          O frame atual seria: {{ frameAtual }}. Só quero testar a formatação
          com isso aqui. Lorem Ipsum dolor amet.
        </p>
        <!-- </transition> -->
      </div>
      <button class="navegar" @click="mudarFrame(1)">></button>
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
      console.log("Adicionou " + n)
      this.frameAtual += n;
    },
  },
  computed: {},
};
</script>

<style scoped>
#container {
  height: 95vh;
}

#wrapper {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  margin: 2vh 6vw 2vh 6vw;
}
#content {
  border: 2px dotted;
  width: 75vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: larger;
  margin: auto;
  text-align: center;
  padding: 0px 20px 0px 20px;
}

.navegar {
  margin-left: 0.5em;
  margin-right: 0.5em;
}

.fechar {
  position: absolute;
}
</style>

<template>
  <div id="container">
    <button id="fechar" @click="$router.push('configurar-teste')">X</button>
    <div id="wrapper">
      <button class="navegar" @click="frameAtual>1?mudarFrame(-1):null">&lt;</button>
      <div id="content" @click="frameAtual<=6? mudarFrame(1): null">
        <!-- <transition> -->
        <p id="perguntas">
          {{perguntas[frameAtual]}}
        </p>
        <!-- </transition> -->
      </div>
      <button class="navegar" @click="frameAtual<=6? mudarFrame(1) : null">></button>
    </div>
    <button v-if="frameAtual >= 7" id="seguir" @click="$router.push('configurar-teste'); setTeste('');">
        Encerrar
      </button>
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
      perguntas: [
					"Gato Mimi",
					"Mimi é o gato da tia Bia. Ele é peludo. Mimi pula e rola na cama todo dia. A tia Bia gosto muito de gato.",
					"Agora eu gostaria que você me recontasse essa história que acabou de ler. Conte para mim a história com o maior número de detalhes que você se lembrar.",
					"Quem é Mimi?",
					"O que Mimi faz na cama da tia Bia todo dia?",
					"Por que Mimi gosta de pular e rolar na cama?",
					"Por que algumas pessoas gostam tanto de gatos?",
					"O que quer dizer peludo?"
				]
    };
  },
  methods: {
    mudarFrame(n) {
      this.frameAtual += n;
    },
    setTeste(value) {
      this.store.tipo = value;
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
  margin-top: 5vh;
}
#content {
  border: 2px dotted;
  width: 85vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 5vw;
  margin: auto;
  text-align: center;
  padding: 0px 20px 0px 20px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.navegar {
  margin-left: 0.5em;
  margin-right: 0.5em;
  font-size: 3vw;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.fechar {
  position: absolute;
  font-size: 3vw;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  font-family: Blorp;
}

#seguir {
  position: absolute;
  font-size: 1.5vw;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  right: 10vw;
  bottom: 2vw;
  font-family: Blorp;
}
</style>

<template>
  <div id="container">
    <button id="fechar" @click="$router.push('configurar-teste')">X</button>
    <div id="wrapper">
      <button class="navegar" @click="frameAtual > 0 ? mudarFrame(-1) : null">
        &lt;
      </button>
      <div id="content" @click="frameAtual < 6 ? mudarFrame(1) : null">
        <h3 v-if="frameAtual === 0">{{tituloEstoria}}</h3>
        <p id="perguntas">
          {{textoExposto}}
        </p>
      </div>
      <button class="navegar" @click="frameAtual < 6 ? mudarFrame(1) : null">
        >
      </button>
    </div>
    <button
      v-if="frameAtual >= 6"
      id="seguir"
      @click="
        $router.push('configurar-teste');
        setTeste('');
      "
    >
      Encerrar
    </button>
  </div>
</template>

<script>
import { store } from "@/store/storage";
import conteudo from "@/assets/dados.json";

export default {
  name: "TestePerguntas",
  props: {},
  data() {
    return {
      store,
      frameAtual: 0,
      ilef:conteudo,
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
  computed: {
    tituloEstoria(){
      return this.ilef[this.store.dificuldade][this.store.tipo].titulo;
    },
    textoEstória(){
      return this.ilef[this.store.dificuldade][this.store.tipo].texto;
    },
    premissaEstoria(){
      return this.ilef[this.store.dificuldade][this.store.tipo].premissa;
    },
    perguntasEstoria(){
      return this.ilef[this.store.dificuldade][this.store.tipo].perguntas;
    },
    textoExposto() {
      switch (this.frameAtual) {
        case 0: 
        return this.textoEstória;
        case 1: 
        return this.premissaEstoria;
        case 2: 
        case 3:
        case 4:
        case 5:
        case 6:
        return this.perguntasEstoria[this.frameAtual-2];
        default:
          return "Algo de errado não está certo (Reinicie o app)";
      }
    },
  },
};
</script>

<style scoped>
#container {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  height: 95vh;
}

#wrapper {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  margin-top: 5vh;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

#content {
  border: 2px dotted;
  width: 85vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

p {
  font-size: 2vw;
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

h3 {
  position: absolute;
  text-align: center;
  width: 100vw;
  top: 10vh;
  font-family: Blorp;
  font-size: 3.5vw;
  color: #FEA800;
}
</style>

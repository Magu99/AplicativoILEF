<!-- conectar cada item da lista com uma parametros pré-determinados do template PáginaFluxo -->

<template>
  <div>
    <h3>Lista de Palavras</h3>
    <div id="list-wrapper">
      <ol>
        <li v-for="(p, i) in lista" :key="i">{{ p }}</li>
      </ol>
    </div>
    <div id="button-wrapper">
      <button @click="$router.push('configurar-teste'); setTeste('')">Avançar >></button>
    </div>
  </div>
</template>

<script>
  import { store } from '@/store/storage';
export default {
  name: "TestePalavras",
  data() {
    return {
      lista: [
        "vai",
        "uma",
        "para",
        "vovó",
        "ela",
        "ave",
        "eu",
        "dia",
        "caiu",
        "vaca",
        "gato",
        "pula",
        "vila",
        "pia",
        "faca",
        "lago",
        "pipa",
        "sala",
        "sapo",
        "pato",
      ],
      store,
    };
  },
    methods: {
      setTeste(value) {
      this.store.tipo = value;
    },
    },
};
</script>

<style scoped>
#list-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 3em;
  height: 500px;
}

ol {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

li {
  font-size: 2em;
  flex: 1 0 calc(20% - 10px);
}

h3 {
  text-align: center;
  margin-top: 1em;
}

#button-wrapper {
  width: 100%;
  display: flex;
  justify-content: right;
}

button {
  font-size: 1em;
  padding: 1.5em;
  margin-right: 7.5em;
}
</style>

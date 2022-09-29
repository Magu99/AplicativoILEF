<!-- conectar cada item da lista com uma parametros pré-determinados do template PáginaFluxo -->

<template>
  <div id="container">
    <h3>Lista de Palavras</h3>
    <div id="list-wrapper">
      <ol>
        <li v-for="(p, i) in lista" :key="i">{{ p }}</li>
      </ol>
    </div>
    <div id="button-wrapper">
      <button
        @click="
          $router.push('configurar-teste');
          setTeste('');
        "
      >
        Avançar >>
      </button>
    </div>
  </div>
</template>

<script>
import { store } from "@/store/storage";
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
#container {
}

#list-wrapper {
}

ol {
}

li {
}

h3 {
}

#button-wrapper {
}

button {
}
</style>

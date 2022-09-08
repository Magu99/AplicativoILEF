<!-- conectar cada item da lista com uma parametros pré-determinados do template PáginaFluxo -->

<template>
  <div id="list-wrapper">
    <ul>
      <li v-for="(v, i) in lista" :key="i" @click="setDificuldade()">
          {{ v }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EscolhaDificuldade",
  props: { },
  data() {
    return {
      lista: [
        "Pré A",
        "Pré B",
        "1º Ano",
        "2º Ano",
        "3º Ano",
        "4º Ano",
        "5º Ano",
      ],
    };
  },
  methods: {
    setDificuldade($evento){
      // setar dificuldade ao clicar no elemento da lista
      console.log($evento);
    }
  },
  computed: {}
};
</script>

<style scoped>
#list-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

ul {
  align-items: center;
  justify-content: center;
  align-self: center;
  /* Remove bullet points */
}

li {
  padding: 10px;
  border-color: aquamarine;
  align-self: center;
}
</style>

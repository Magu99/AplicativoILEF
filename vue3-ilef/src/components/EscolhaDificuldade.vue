<!-- conectar cada item da lista com uma parametros pré-determinados do template PáginaFluxo -->

<template>
  <div id="list-wrapper">
    <ol>
      <li v-for="(v, i) in lista" :key="i">{{ v }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "EscolhaDificuldade",
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
  components: {},
};
</script>

<style scoped>
#list-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

ol {
  align-items: center;
  justify-content: center;
  align-self: center;
}

li {
  padding: 10px;
  border-color: aquamarine;
  align-self: center;
}
</style>

<!-- conectar cada item da lista com uma parametros pré-determinados do template PáginaFluxo -->

<template>
  <div>
    <h3>Qual nível?</h3>
    <ol>
      <li v-for="(i, v) in lista" :key="i">
        <router-link>{{ toString(i) + " " + v }}</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "EscolhaTeste",
  props: {},
  data() {
    return {
      lista: [],
    };
  },
};
</script>

<style scoped></style>

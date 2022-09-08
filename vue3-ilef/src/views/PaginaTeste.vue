<template>
  <div>
    <TestePalavras tipo="this.tipo" dificuldade="this.dificuldade"/>
    <TestePerguntas tipo="this.tipo" dificuldade="this.dificuldade"/>
  </div>
</template>

<script>
import TestePalavras from '@/components/TestePalavras.vue';
import TestePerguntas from '@/components/TestePerguntas.vue';
export default {
    name: "PaginaTeste",
    props: { tipo: String, dificuldade: String},
    components: { TestePalavras, TestePerguntas }
};
</script>

<style scoped></style>

<template>
  <div>
    <TituloILEF />
    <TestePalavras tipo="" dificuldade=""/>
    <TestePerguntas tipo="" dificuldade=""/>
  </div>
</template>

<script>
import TestePalavras from '@/components/TestePalavras.vue';
import TestePerguntas from '@/components/TestePerguntas.vue';
import TituloILEF from '@/components/TituloILEF.vue';
export default {
    name: "PaginaTeste",
    props: { },
    components: { TestePalavras, TestePerguntas, TituloILEF }
};
</script>

<style scoped></style>

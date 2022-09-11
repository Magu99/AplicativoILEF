<template>
  <div>
    <TituloILEF />
    <TestePalavras teste="" dificuldade=""/>
    <TestePerguntas teste="" dificuldade=""/>
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

<style scoped>
  /* Criar transições entre Teste de Palavras e teste de Perguntas*/

</style>

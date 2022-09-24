<template>
  <div>
    <TituloILEF />
    <TestePalavras v-if="store.tipo === 'Palavras'"/>
    <TestePerguntas v-if="store.tipo === 'Leitura'" />
  </div>
</template>

<script>
import TestePalavras from '@/components/TestePalavras.vue';
import TestePerguntas from '@/components/TestePerguntas.vue';
import TituloILEF from '@/components/TituloILEF.vue';
import { store } from '@/store/storage';
export default {
    name: "PaginaTeste",
    components: { TestePalavras, TestePerguntas, TituloILEF },
    data() {
      return {
        store
      }
    }
};
</script>

<style scoped>
  /* Criar transições entre Teste de Palavras e teste de Perguntas*/

</style>

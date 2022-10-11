<template>
  <div>
    <!-- <TituloILEF /> -->
    <TestePalavras v-if="store.tipo === 'palavras'"/>
    <TestePerguntas v-if="store.tipo === 'leitura'" />
  </div>
</template>

<script>
import TestePalavras from '@/components/TestePalavras.vue';
import TestePerguntas from '@/components/TestePerguntas.vue';
import { store } from '@/store/storage';
export default {
    name: "PaginaTeste",
    components: { TestePalavras, TestePerguntas },
    data() {
      return {
        store
      }
    }
};
</script>

<style scoped>
</style>

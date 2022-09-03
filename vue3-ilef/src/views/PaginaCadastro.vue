<template>
  <div>
  <NavigationBar />
    <FormCadastro />
  </div>
</template>

<script>
import FormCadastro from '@/components/FormCadastro.vue';
import NavigationBar from '@/components/NavigationBar.vue';

export default {
    name: "PaginaCadastro",
    props: {},
    components: { FormCadastro, NavigationBar }
};
</script>

<style scoped></style>

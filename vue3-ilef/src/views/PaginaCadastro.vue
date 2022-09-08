<template>
  <div>
    <TituloILEF />
    <NavigationBar />
    <FormCadastro />
  </div>
</template>

<script>
import FormCadastro from "@/components/FormCadastro.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import TituloILEF from "@/components/TituloILEF.vue";

export default {
  name: "PaginaCadastro",
  props: {},
  components: { FormCadastro, NavigationBar, TituloILEF },
};
</script>

<style scoped></style>

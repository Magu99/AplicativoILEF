<template>
  <div>
    <TituloILEF />
    <div>
      <NavigationBar />
    </div>
    <div id="button-wrapper">
      <router-link to="/cadastro"
        ><button id="cadastro">Cadastro</button></router-link
      >

      <router-link to="/configurar-teste"
        ><button id="inciar">Atividades</button></router-link
      >
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import TituloILEF from "@/components/TituloILEF.vue";
export default {
  name: "HomePage",
  props: {},
  components: { NavigationBar, TituloILEF },
};
</script>

<style scoped>
#button-wrapper {
}

button {
}
</style>

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
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-content: space-evenly;
  height: 70vh;
}

button {
  display: inline-block;
  padding: 1em;
  height: calc(108px + 4vh);
  width: calc(192px + 7vw);
  font-size: calc(14px + 2vw);
}
</style>

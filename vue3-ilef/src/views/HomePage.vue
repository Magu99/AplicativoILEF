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
  justify-content: space-evenly;
  align-content: space-around;
  margin-top: 10em;
}

button {
  display: inline-block;
  padding: 1em;
  width: 12em;
  font-size: large;
  margin: 15px;
}

h1 {
  text-align: center;
  padding-top: 2em;
}
</style>

<template>
  <div>
    <TituloILEF />
    <div>
      <NavigationBar />
    </div>
    <div id="button-wrapper">
      <router-link to="/cadastro"><button id="cadastro">
        Cadastro
      </button></router-link>

      <router-link to="/configurar-teste"><button id="inciar">
        Começar Atividades
      </button></router-link>
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
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
}

button {
  margin-top: 8em;
  display: block;
  height: 10em;
  width: 20em;
  font-size: large;
}

h1{
  text-align: center;
  padding-top: 2em;
}
</style>

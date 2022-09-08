<template>
  <div>
    <h1>Bem vindos ao ILEF :)</h1>
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
export default {
  name: "HomePage",
  props: {},
  components: { NavigationBar },
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

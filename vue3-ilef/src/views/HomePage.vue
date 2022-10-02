<template>
  <div>
    <TituloILEF />
    <div>
      <NavigationBar />
    </div>
    <div id="button-wrapper">
      <!-- <img src="@/assets/botao1.png" alt="Botão da Página de Cadastro" /> -->
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
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

button {
  padding: 1em;
  font-size: 2em;
}
</style>

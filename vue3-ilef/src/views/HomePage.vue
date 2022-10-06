<template id="root">
  <div>
    <TituloILEF />
    <div>
      <NavigationBar />
    </div>
    <div id="button-wrapper">
      <table>
        <tr>
          <td class="margem-vertical"></td>
          <td class=""></td>
        </tr>
        <tr>
          <td class="margem-da-folha"></td>
          <td>
            <router-link to="/cadastro"><button>Cadastro</button></router-link>
          </td>
        </tr>
        <tr>
          <td class="margem-vertical no-bottom"></td>
          <td class="no-bottom"></td>
        </tr>
      </table>

      <table>
        <tr>
          <td class="margem-vertical"></td>
          <td class=""></td>
        </tr>
        <tr>
          <td class="margem-da-folha"></td>
          <td>
            <router-link to="/configurar-teste"
              ><button id="inciar">Atividades</button></router-link
            >
          </td>
        </tr>
        <tr>
          <td class="margem-vertical no-bottom"></td>
          <td class="no-bottom"></td>
        </tr>
      </table>
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
#root {
  background-color: red;
}

#button-wrapper {
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

table {
  box-shadow: 5px 5px 4px lightgrey;
  width: 30vw;
  display: inline-block;
}

#wrapper {
  text-align: center;
  width: 17.5vw;
}

td {
  border-bottom: 1px solid skyblue;
  height: 3.2vw;
  width: 17.5vw;
}

.margem-da-folha {
  border-right: 1px solid skyblue;
  width: 2.5vw;
  margin-left: 2vw;
}

.margem-vertical {
  border-right: 1px solid skyblue;
  width: 2.5vw;
  margin-left: 2vw;
}

.no-bottom {
  border-bottom: none;
}

button {
  padding: 2px;
  width: 25vw;
  font-size: 2em;
  font-family: Blorp;
  background-color: white;
  border: none;
}
</style>

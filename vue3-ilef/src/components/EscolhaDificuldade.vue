<template>
  <div id="container">
    <div id="table-container">
      <table>
        <tr>
          <td class="margem-vertical"></td>
          <td class=""></td>
        </tr>
        <tr v-for="(v, i) in lista" :key="i" id="wrapper">
          <td class="margem-da-folha"></td>
          <td>
            <button @click="setDificuldade(v)">
              {{ v }}
            </button>
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
import { store } from "@/store/storage";
export default {
  name: "EscolhaDificuldade",
  props: {},
  data() {
    return {
      lista: [
        "Pré A",
        "Pré B",
        "1º Ano",
        "2º Ano",
        "3º Ano",
        "4º Ano",
        "5º Ano",
      ],
      store,
    };
  },
  methods: {
    setDificuldade(v) {
      this.store.dificuldade = v;
    },
  },
  computed: {},
};
</script>

<style scoped>
#table-container {
  text-align: center;
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
  font-size: 2vw;
  font-family: Blorp;
  background-color: white;
  border: none;
}
</style>

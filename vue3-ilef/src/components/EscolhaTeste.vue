<!-- conectar cada item da lista com uma parametros pré-determinados do template PáginaFluxo -->

<template>
  <div>
    <div id="table-container">
      <table>
        <tr>
          <td class="margem-vertical"></td>
          <td class=""></td>
        </tr>
        <tr id="wrapper">
          <td class="margem-da-folha"></td>
          <td>
            <button id="leitura" @click="setTeste('Leitura')">Leitura de Texto</button>
          </td>
        </tr>
        <tr id="wrapper">
          <td class="margem-da-folha"></td>
          <td>
            <button id="palavras" @click="setTeste('Palavras')">
              Leitura de Palavras
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
  name: "EscolhaTeste",
  data() {
    return {
      store,
    };
  },
  methods: {
    setTeste(value) {
      this.store.tipo = value;
    },
  },
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

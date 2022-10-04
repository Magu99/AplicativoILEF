<!-- conectar cada item da lista com uma parametros pré-determinados do template PáginaFluxo -->

<template>
  <div id="container">
    <h3>Lista de Palavras</h3>
    <div id="table-wrapper">
      <table>
        <tr>
          <td>1. {{ lista[0] }}</td>
          <td>2. {{ lista[1] }}</td>
          <td>3. {{ lista[2] }}</td>
          <td>4. {{ lista[3] }}</td>
          <td>5. {{ lista[4] }}</td>
        </tr>
        <tr>
          <td>6. {{ lista[5] }}</td>
          <td>7. {{ lista[6] }}</td>
          <td>8. {{ lista[7] }}</td>
          <td>9. {{ lista[8] }}</td>
          <td>10. {{ lista[9] }}</td>
        </tr>
        <tr>
          <td>11. {{ lista[10] }}</td>
          <td>12. {{ lista[11] }}</td>
          <td>13. {{ lista[12] }}</td>
          <td>14. {{ lista[13] }}</td>
          <td>15. {{ lista[14] }}</td>
        </tr>
        <tr>
          <td>16. {{ lista[15] }}</td>
          <td>17. {{ lista[16] }}</td>
          <td>18. {{ lista[17] }}</td>
          <td>19. {{ lista[18] }}</td>
          <td>20. {{ lista[19] }}</td>
        </tr>
      </table>
    </div>
    <div id="button-wrapper">
      <button
        @click="
          $router.push('configurar-teste');
          setTeste('');
        "
      >
        Avançar >>
      </button>
    </div>
  </div>
</template>

<script>
import { store } from "@/store/storage";
export default {
  name: "TestePalavras",
  data() {
    return {
      lista: [
        "vai",
        "uma",
        "para",
        "vovó",
        "ela",
        "ave",
        "eu",
        "dia",
        "caiu",
        "vaca",
        "gato",
        "pula",
        "vila",
        "pia",
        "faca",
        "lago",
        "pipa",
        "sala",
        "sapo",
        "pato",
      ],
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
#container {
  height: inherit;
}

#table-wrapper {
  display: flex;
  align-content: center;
  justify-content: center;
}

table {
  margin: 2em;
  padding: 1em;
  font-size: 3vw;
  width: 90vw;
  height: 60vh;
  border: black dotted 1px;
}

h3 {
  text-align: center;
  font-size: larger;
  margin-top: 1em;
}

#button-wrapper {
  width: 100%;
  display: flex;
  justify-content: right;
}

button {
  padding: 0.5em;
  margin-right: 7.5em;
  margin-bottom: 2.5em;
  font-size: 2.5vw;
  font-family: Blorp;
  background-color: lightcyan;
  border: cyan 1px solid;
}
</style>

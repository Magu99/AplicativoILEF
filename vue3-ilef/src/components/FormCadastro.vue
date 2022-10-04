<template>
  <div id="form-container">
    <form action="POST">
      <table>
        <tr>
          <td class="margem-vertical"></td>
          <td class=""></td>
        </tr>

        <tr>
          <td class="margem-da-folha">
            <label for="nome">Nome: </label>
          </td>
          <td>
            <input type="text" id="nome" />
          </td>
        </tr>
        <tr>
          <td class="margem-da-folha">
            <label for="data-de-nascimento">Nascimento: </label>
          </td>
          <td>
            <input type="date" id="data-de-nascimento" />
          </td>
        </tr>
        <tr>
          <td class="margem-da-folha">
            <label for="idade">Idade: </label>
          </td>
          <td>
            <input type="number" id="idade" />
          </td>
        </tr>
        <tr>
          <td class="margem-da-folha">
            <label for="ano-escolar">Ano Escolar: </label>
          </td>
          <td>
            <input type="text" id="ano-escolar" />
          </td>
        </tr>
        <tr>
          <td class="margem-da-folha">
            <label for="escola">Escola: </label>
          </td>
          <td>
            <input type="text" id="escola" />
          </td>
        </tr>
        <tr>
          <td class="margem-da-folha"></td>
          <td>
            <button>Enviar Dados</button>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormCadastro",
  props: {},
};
</script>

<style scoped>
#form-container {
  margin-top: 2em;
  display: flex;
  align-content: center;
  justify-content: center;
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
  text-align: center;
  height: 3.2vw;
  width: 17.5vw;
  padding: 0.25em;
}

.margem-da-folha {
  border-right: 1px solid skyblue;
  text-align: left;
  width: 20vw;
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

label {
  padding: 2px;
  width: 20vw;
  font-size: 2vw;
  font-family: Blorp;
  background-color: white;
  border: none;
}

input {
  border: none;
}

button {
  border: none;
  font-size: 2vw;
}
</style>

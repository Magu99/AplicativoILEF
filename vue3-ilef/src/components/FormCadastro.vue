<template>
  <div id="form-wrapper">
    <form action="POST"> 
      <label for="nome">Nome: </label>
      <input type="text" id="nome" />
      <label for="dataDeNascimento">Data de Nascimento: </label>
      <input type="date" id="dataDeNascimento" />
      <label for="idade">Idade</label>
      <input type="number" id="idade" />
      <label for="anoEscolar">Ano Escolar</label>
      <input type="text" id="anoEscolar" />
      <label for="escola">Escola</label>
      <input type="text" id="escola" />
      <button>Enviar Dados</button>
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

#form-wrapper {
  margin-top: 2em;
  display: flex;
  align-content: center;
  justify-content: center;
}

form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: left;
  width: fit-content;
  border: 2px dotted black;
  border-radius: 2em;
  padding: 2em;
}

label {
  margin: 2px;
  margin: 0.5em;
}

input {
  margin: 2px;
  border: black 1px dotted;
  border-radius: 5px;
}

button {
  margin-top: 4px;
}
</style>

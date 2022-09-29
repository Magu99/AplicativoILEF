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
}

label {
}

input {
}
</style>

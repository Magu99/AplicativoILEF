<template>
  <div>
    <form action="POST">
      <input type="text" id="nome" />
      <label for="nome">Nome: </label>
      <input type="date" id="dataDeNascimento" />
      <label for="dataDeNascimento">Data de Nascimento: </label>
      <input type="number" id="idade" />
      <label for="idade">Idade</label>
      <input type="text" id="anoEscolar" />
      <label for="anoEscolar">Ano Escolar</label>
      <input type="text" id="escola" />
      <label for="escola">Escola</label>
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
label {
  display: inline-block;
}

input {
  display: block;
}
</style>

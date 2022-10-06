
<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Sobre</router-link> |
      <router-link to="/cadastro">Cadastro</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {},
};
</script>

<style scoped>
  nav {
    font-family: Blorp;
    text-align: center;
    font-size: calc(12px + 1vw);
  }

  div {
    height: 6vh;
    padding-bottom: 2em;
  }
</style>

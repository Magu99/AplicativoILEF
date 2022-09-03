
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
    text-align: center;
  }
</style>

<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Ubuntu;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #FEA800;
}
@font-face{
  font-family: Blorp;
  src:url("@/assets/Blorp.ttf");
}
@font-face{
  font-family: Ubuntu;
  src:url("@/assets/Ubuntu.ttf");
}
</style>

<template>
  <div id="wrapper">
    <transition>
      <h3>Dificuldade: {{ store.dificuldade }}</h3>
    </transition>
  </div>
</template>

<script>
import { store } from "@/store/storage";
export default {
  name: "VisorDificuldade",
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
  font-size: larger;
}
</style>

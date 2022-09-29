<template>
  <div id="wrapper">
    <transition>
      <h3>Teste: {{ store.tipo }}</h3>
    </transition>
  </div>
</template>

<script>
import { store } from "@/store/storage";
export default {
  name: "VisorTeste",
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped>
#wrapper {
}

h3 {
  text-align: center;
  font-size: larger;
}

</style>

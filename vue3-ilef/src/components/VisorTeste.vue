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
  border: 4px;
  border-color: black;
  padding: 8.5px;
  margin: 10px;
}

h3 {
  text-align: center;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>

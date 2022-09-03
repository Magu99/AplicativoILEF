<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div>
      <EscolhaTeste />
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavigationBar.vue";
import EscolhaTeste from "@/components/EscolhaTeste.vue";

export default {
  components: { NavBar, EscolhaTeste},
};
</script>

<style scoped></style>

<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div>
      <EscolhaTeste />
    </div>
    <div>
      <EscolhaDificuldade />
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavigationBar.vue";
import EscolhaTeste from "@/components/EscolhaTeste.vue";
import EscolhaDificuldade from "@/components/EscolhaDificuldade.vue";
export default {
  components: { NavBar, EscolhaTeste, EscolhaDificuldade },
};
</script>

<style scoped></style>

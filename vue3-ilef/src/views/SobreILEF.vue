<template>
  <div>
    <TituloILEF />
    <NavigationBar />
    <p>
      <b>Desenvolvido por:</b> Matheus Wagner, Elizeu Macedo, Cleber e Alexandre
      Cerpa
    </p>
    <p><b>Artigo em:</b> permalink do artigo original</p>
    <p><em>Direitos Autorais ® Mestre Elizeu 2022</em></p>
    <br /><br />
    <h3>Como aplicar o teste:</h3>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import TituloILEF from "@/components/TituloILEF.vue";
export default {
  name: "sobreILEF",
  props: {},
  components: { NavigationBar, TituloILEF },
};
</script>

<style scoped>
p {
}

h3 {
}
</style>

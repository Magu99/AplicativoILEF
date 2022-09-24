<template>
    <div>
      <TituloILEF />
      <NavigationBar />
      <h2>404 - Page Not Found</h2>
      <p>Ops, algo de errado não está certo.</p>
    </div>
  </template>

  <script>
import TituloILEF from '@/components/TituloILEF.vue';
import NavigationBar from '@/components/NavigationBar.vue';
  export default {
    components: { TituloILEF, NavigationBar }
}
  </script>
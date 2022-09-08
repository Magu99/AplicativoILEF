import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue"
import SobreILEF from "@/views/SobreILEF.vue"
import PaginaCadastro from "@/views/PaginaCadastro.vue"
import PaginaTeste from "@/views/PaginaTeste.vue"
import PaginaConfigurarTeste from "@/views/PaginaConfigurarTeste.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: SobreILEF,
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: PaginaCadastro,
  },
  {
    path: "/teste",
    name: "teste",
    component: PaginaTeste,
  },
  {
    path: "/configurar-teste",
    name: "configurar-teste",
    component: PaginaConfigurarTeste,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

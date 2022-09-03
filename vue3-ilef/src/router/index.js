import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue"
import SobreILEF from "@/views/SobreILEF.vue"
import PaginaCadastro from "@/views/PaginaCadastro.vue"
import TestePalavras from "@/views/TestePalavras.vue"
import TestePerguntas from "@/views/TestePerguntas.vue"
import PaginaDificuldade from "@/views/PaginaDificuldade.vue"

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
    path: "/teste-perguntas",
    name: "TestePerguntas",
    component: TestePerguntas,
  },
  {
    path: "/teste-palavras",
    name: "TestePalavras",
    component: TestePalavras,
  },
  {
    path: "/dificuldade",
    name: "dificuldade",
    component: PaginaDificuldade,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

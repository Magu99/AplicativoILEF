<template>
  <div>
    <h3>Qual tipo de teste?</h3>
    <div id="wrapper">
    <ol>
      <li v-for="(v, i) in lista" :key="i">
        <button @click="setDificuldade(v)">
          {{ v }}
        </button>
      </li>
    </ol>
  </div>
</div>
</template>

<script>
import { store } from "@/store/storage";
export default {
  name: "EscolhaDificuldade",
  props: {},
  data() {
    return {
      lista: [
        "Pré A",
        "Pré B",
        "1º Ano",
        "2º Ano",
        "3º Ano",
        "4º Ano",
        "5º Ano",
      ],
      store,
    };
  },
  methods: {
    setDificuldade(v) {
      this.store.dificuldade = v;
    },
  },
  computed: {},
};
</script>

<style scoped>
h3 {
  text-align: center;
  margin-top: 2em;
}

#wrapper {
  display: flex;
  justify-content: center;
}

ol {
  list-style: none;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
}

button {
  margin: 8px;
  padding: 2px;
  width: 20vw;
  font-size: 2.5vw;
}
</style>

import { reactive } from "vue";
export const store = reactive({
  tipo: "",
  dificuldade: "",
  fluxos: {
    PreA: {
      texto: {
        titulo: "Gato Mimi",

        texto:
          "Mimi é o gato da tia Bia. Ele é peludo. Mimi pula e rola na cama todo dia. A tia Bia gosto muito de gato.",

        premissa:
          "Agora eu gostaria que você me recontasse essa história que acabou de ler. Conte para mim a história com o maior número de detalhes que você se lembrar.",

        perguntas: [
          "Quem é Mimi?",
          "O que Mimi faz na cama da tia Bia todo dia?",
          "Por que Mimi gosta de pular e rolar na cama?",
          "Por que algumas pessoas gostam tanto de gatos?",
          "O que quer dizer peludo?",
        ],
      },

      palavras: {
        lista: [
          "vai",
          "uma",
          "para",
          "vovó",
          "ela",
          "ave",
          "eu",
          "dia",
          "caiu",
          "vaca",
          "gato",
          "pula",
          "vila",
          "pia",
          "faca",
          "lago",
          "pipa",
          "sala",
          "sapo",
          "pato",
        ],
      },
    },
  },
});

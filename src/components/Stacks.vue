<template>
    <CardsComponents :dados="dados"/>    
</template>
  
  <script>
  import CardsComponents from './Cards.vue'
  import html from '@/assets/html-5.png'
  import css from '@/assets/css-3.png'
  import javascript from '@/assets/js.png'
  import vue from '@/assets/baixados.png'

  export default {
    name: 'StacksComponent',
    components: {
        CardsComponents
    },
    data() {
      return {
        dados: [
          {
            img: html,
            title: 'HTML 5',
            description: 'HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet. Comecei a estudar html em 2014, foi com ela que comecei a gostar de programação.',
          },
          {
            img: css,
            title: 'CSS 3',
            description: 'Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O css eu utilizava dentro das tags html sem nem saber que era css, em 2016 foi que comecei a me aprofundar mais sobre a mesma.',
          },
          {
            img: javascript,
            title: 'JAVA SCRIPT',
            description: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Comecei a estudar esta linguagem em 2019 logo após ingressar na faculdade de Analise e Desenvolvimento de Sistemas.',
          },
          {
            img: vue,
            title: 'VUE',
            description: 'Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.'
          }
        ]
      }
    }
  }
</script>
<style scoped>
.inicialContainer {
    position: absolute;
    width: 80%;
    height: 100vh;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
</style>
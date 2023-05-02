<template>
    <div class="home">
      <NavBar />
      <ConhecimentoComponent />
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/Nav.vue'
  import ConhecimentoComponent from '@/components/Conhecimento.vue'
  
  export default {
    name: 'ConhecimentoView',
    components: {
      NavBar,
      ConhecimentoComponent
    }
  }
  </script>
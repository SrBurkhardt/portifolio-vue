<template>
    <div>
      <NavBar />
      <StacksComponent />
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/Nav.vue'
  import StacksComponent from '@/components/Stacks.vue'
  
  export default {
    name: 'StacksView',
    components: {
      NavBar,
      StacksComponent
    }
  }
  </script>
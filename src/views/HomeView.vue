<template>
  <div class="home">
    <NavBar />
    <HomeComponent />
  </div>
</template>

<script>
import NavBar from '@/components/Nav.vue'
import HomeComponent from '@/components/Home.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    HomeComponent
  }
}
</script>

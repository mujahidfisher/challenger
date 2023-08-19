<template>
  <div>
    <NavBar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
export default {
  components: {
    NavBar,
    Footer
  }

}
</script>

<style>

</style>

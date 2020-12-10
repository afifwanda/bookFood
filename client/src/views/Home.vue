<template>
  <div class="home">
    <Navbar />
    <HomeIntro />
    <BestFoods />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';
import HomeIntro from '../components/HomeIntro.vue';
import BestFoods from '../components/BestFoods.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    HomeIntro,
    BestFoods
  },
    created() {
    this.Products();
  },
  methods: {
    Products() {
      this.$store.dispatch('allProducts');
    },
  },
}
</script>

<style scoped>
.home{
  min-width: 100%;
}
</style>


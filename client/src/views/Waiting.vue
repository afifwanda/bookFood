<template>
  <div class="home">
    <Navbar />
    <img alt="logo" src="../assets/menunggu.png">
    <h3>Sukses!!!</h3>
    <h4> Pesanan Anda Segera Diproses </h4>
    <h4> Selamat Menunggu. </h4>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Waiting',
  components: {
    Navbar,
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:300,400&display=swap);

h3{
  font-family: 'Lato';
  font-size: 40px;
  font-weight: bold;
}
h4{
  font-family: 'Lato';
  font-size: 20px;
}
.home{
  min-width: 100%;
}
img{
    width:30%;
    height:30%;
}
</style>


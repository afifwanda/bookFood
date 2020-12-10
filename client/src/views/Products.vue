<template>
  <div class="container">
    <Navbar />
    <h3>Daftar Makanan</h3>
    <div class="smallContainer">
      <input type="text" class="form-control" placeholder="Cari Makanan Kesukaan Anda">
      <div class="view d-flex row justify-content-center">
        <div
        class="cardProduct col-3 ml-4 mr-4 mb-3"
        v-for="data in this.$store.state.allProducts"
        :key="data.id"
        >
          <router-link :to="{ name: 'ProductDetails', params: { id: data.id }}">
          <img class="img" :src="require(`@/assets/${data.gambar}`)" :alt="data.gambar">
          </router-link>
          <div class="d-flex justify-content-start mt-2 mb-2">
              <h5 class="card-title">{{ data.nama}}</h5>
          </div>
          <div class="d-flex justify-content-start">
              <div>Harga : Rp.{{ data.harga.toLocaleString('ID') }}</div>
          </div>
          <div class="d-flex justify-content-start mt-2 mb-2">
          <router-link :to="{ name: 'ProductDetails', params: { id: data.id }}">
              <input type="button" class="btn btn-success"
                value="Pesan">
          </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Products',
  components: {
    Navbar,
  },
  data() {
    return {
      elementEdit: '',
    };
  },
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:300,400&display=swap);

h3{
  font-family: 'Lato';
  font-size: 35px;
  margin-left: 90px;
  margin-top: 3%;
  text-align: justify;
}
h4{
  font-family: 'Lato';
  font-size: 20px;
}
.smallContainer{
  min-width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center

}
.view {
  width: 100%;
  padding-top: 20px;
}
.cardProduct{
  border-style:solid;
  border-width:1px;
  border-color:grey;
  border-radius:10px;
  box-shadow: 0 8px 6px -6px black;
}
.img{
  width: 112%;
  height: 60%;
  margin-left: -15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.form-control{
  width: 83%
}
</style>


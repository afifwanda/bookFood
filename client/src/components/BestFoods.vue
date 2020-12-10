<template>
  <div class="productContainer">
    <div class="navContainer">
      <h3>Best Foods</h3>
        <router-link to="/product">
        <input type="button" class="btn btn-success"
          value="Lihat Semua">
        </router-link>
    </div>
    <div class="view d-flex row justify-content-center">
        <div
        class="cardProduct col-3 ml-4 mr-4 mb-3"
        v-for="data in this.$store.state.productList"
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
              <div class="atc">
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

export default {
  name: 'BestFoods',
  components: {
  },
  data() {
    return {
    };
  },
  created() {
    this.Products();
  },
  methods: {
    Products() {
      this.$store.dispatch('Products');
    },
  },
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:300,400&display=swap);

h3{
  font-family: 'Lato';
  font-size: 30px;
}
.view {
  width: 100%;
  padding-top: 20px;
}
.productContainer{
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cardProduct{
  border-style:solid;
  border-width:1px;
  border-color:grey;
  border-radius:10px;
  box-shadow: 0 8px 6px -6px black;
}
.img{
  width: 110.5%;
  margin-left: -15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.navContainer{
  width:83%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
}

</style>

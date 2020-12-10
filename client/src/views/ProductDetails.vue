<template>
  <div class="home">
    <Navbar />
    <div class="bigContainer">
      <div class="linkContainer" id="linkContainer">
      <router-link to="/">Home</router-link> / <router-link to="/product">Foods</router-link> / Food Order
      </div>
      <div class="container row">
        <div class="left-container">
          <img alt="Vue logo" :src="require(`@/assets/${this.productData.gambar}`)">
        </div>
        <div class="right-container">
          <h3>{{this.productData.nama}}</h3>
          <h4>Harga: Rp.{{this.productData.harga.toLocaleString('ID')}}</h4>
          <form id="form-add" action="" method="POST">
            <h5>Jumlah Pesanan :</h5>
            <input type="number" class="form-control" value="" placeholder="Jumlah Pesanan" v-model="orderTotal">
            <h5>Keterangan :</h5>
            <textarea class="form-control" value="" placeholder="Masukan Keterangan" v-model="message" ></textarea>
            <div class="button-container">
            <input type="button" class="btn btn-success" value="Pesan"
              v-on:click.prevent="addToCarts(productData,message,orderTotal)"
            >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
  data() {
    return {
      productData: '',
      orderTotal : '',
      message : '-',
    };
  },
  created() {
    this.details(this.$route.params.id);
  },
  methods: {
    details(id) {
      this.$store.state.allProducts.forEach((element) => {
        if (element.id === id) {
          this.productData = element;
        }
      });
    },
    addToCarts(product,message,total){
      let param = {product,message,total}
      this.$store.dispatch('addToCart',param)
    }
  },
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:300,400&display=swap);

.home{
  min-width: 100%;
}
.bigContainer{
  display:flex;
  flex-direction:column;
  margin-top:3%;
}
.container{
  height: 400px;
  min-width: 100%;
  margin-top: 1%;
}
.linkContainer{
  text-align: justify;
  font-family: "Lato";
  font-size: 25px;
  padding-left: 50px;
  color:black
}
a{
  color:black;
}
a.router-link-exact-active {
  color: black;
}
.btn{
  margin-top: 3%
}
.button-container{
  display: flex;
  flex-direction: row;
}
h3{
  margin-top: 2%;
  margin-bottom: 5%;
  font-family: 'Lato';
  font-size: 35px;
  font-weight: bold;
  text-align: justify;
}
h4{
  text-align: justify;
  font-weight: bold;
  margin-bottom: 2%;
}
h5{
  font-family: 'Lato';
  font-size: 20px;
  text-align: justify;
  margin-top: 3%;
}
img{
    width: 95%;
    height: 95%;
    border-radius: 10px;
    box-shadow: 0 8px 6px -6px black;
}
.left-container{
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  justify-content: center;
  text-align: justify;
}
.right-container{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
}
</style>


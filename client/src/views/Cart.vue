<template>
  <div class="home">
    <Navbar />
    <div class="card-container" v-if="this.$store.state.notificationCards">
      <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
        <div class="card-header">Sukses Menambahkan Pesanan</div>
      </div>
    </div>
    <div class="bigContainer">
      <div class="linkContainer" id="linkContainer">
      <router-link to="/">Home</router-link> / <router-link to="/product">Foods</router-link> / Keranjang
      </div>
      <h3>Keranjang Saya</h3>
      <div class="container col-12">
        <table class="table">
          <thead class="thead">
              <tr>
              <th scope="col">#</th>
              <th scope="col">Foto</th>
              <th scope="col">Makanan</th>
              <th scope="col">Keterangan</th>
              <th scope="col">Jumlah</th>
              <th scope="col">Harga</th>
              <th scope="col">Total Harga</th>
              <th scope="col">Hapus</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="data in this.$store.state.cartList" :key="data.id">
              <td>{{data.id}}</td>
              <td class="w-25"><img :src="require(`@/assets/${data.products.gambar}`)" ></td>
              <td>{{data.products.nama}}</td>
              <td>{{data.keterangan}}</td>
              <td>{{data.jumlah_pemesanan}}</td>
              <td>Rp. {{data.products.harga.toLocaleString('ID')}}</td>
              <td>Rp. {{(data.products.harga * data.jumlah_pemesanan).toLocaleString('ID')}}</td>
              <td>
              <input type="button" class="btn btn-danger" value="Delete"
              v-on:click.prevent="deleteCarts(data.id)">
              </td>
              </tr>
          </tbody>
          <tbody>
              <tr class="bottom">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total</td>
                  <td></td>
                  <td>Rp.{{this.$store.state.totalPrice.toLocaleString('ID')}}</td>
              </tr>
          </tbody>
        </table>
        <div class="bottomContainer">
          <div class="inputContainer">
            <h5>Nama :</h5>
            <input type="text" class="form-control" value="" placeholder="Masukan Nama" v-model="name">
            <h5>Nomor Meja :</h5>
            <input type="number" class="form-control" value="" placeholder="Masukan Nomor Meja" v-model="tableNumber">
            <div class="buttonContainer">
              <router-link to="/waiting">
                <input type="button" class="btn btn-success" value="Pesan"
                v-on:click.prevent="addOrder(name,tableNumber)">
              </router-link>
            </div>
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
  name: 'Cart',
  components: {
    Navbar,
  },
  data() {
    return {
      productData: '',
      name: '',
      tableNumber: '',
    };
  },
  created() {
    this.setFalseNotification(false)
  },
  methods: {
    addOrder(name,tableNumber){
      console.log
      let param = {name,tableNumber}
      this.$store.dispatch('addOrder',param)
    },
    deleteCarts(id){
      this.$store.dispatch('deleteCart',id)
    },
    setFalseNotification(status){
      this.$store.dispatch('setNotification',status)
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
  margin-top: 3%;
}
.card-container{
  position: absolute;
  top: 5%;
  right: 1%;
  display: flex;
  justify-content: flex-end;
}
.container{
  min-width: 100%;
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.buttonContainer{
  display:flex;
  justify-content: flex-end;
  margin-top: 2%;
}
.table{
  width: 95%;
}
.linkContainer{
  text-align: justify;
  font-family: "Lato";
  font-size: 25px;
  padding-left: 50px;
  color:black
}
.bottomContainer{
  width:95%;
  display: flex;
  justify-content: flex-end;
}
.inputContainer{
  display: flex;
  flex-direction: column;
  width: 35%;
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
h3{
  font-family: 'Lato';
  font-size: 35px;
  margin-left: 50px;
  margin-top: 2%;
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
  margin-top: 1%;
}
img{
    width: 70%;
    height: 30%;
    border-radius: 10px;
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


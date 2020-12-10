import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
//import swal from 'sweetalert';
import router from '../router/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: null,
    allProducts: null,
    cartNumber: 0,
    totalPrice: 0,
    cartList : [],
    notificationCards : false
  },
  mutations: {
    userProducts(state, params) {
      state.productList = params;
    },
    listProducts(state, params) {
      state.allProducts = params;
    },
    listCarts(state, params){
      state.cartList = params
    }
  },
  actions: {
    Products(context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/best-products',
      })
        .then((data) => {
          context.commit('userProducts', data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    allProducts(context){
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
      })
        .then((data) => {
          context.commit('listProducts', data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCarts(context){
      axios({
        method: 'GET',
        url: 'http://localhost:3000/keranjangs',
      })
        .then((data) => {
          context.commit('listCarts', data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToCart(context,param){
      axios({
        method: 'POST',
        url: 'http://localhost:3000/keranjangs',
        headers: {"Content-Type": "application/json"},
        data: {
          "jumlah_pemesanan": param.total,
          "keterangan": param.message,
          "products": {
            "id": param.product.id,
            "kode": param.product.kode,
            "nama": param.product.nama,
            "harga": param.product.harga,
            "is_ready": param.product.is_ready,
            "gambar": param.product.gambar
          }
        },
      })
        .then((data) => {
          this.state.cartNumber += Number(data.data.jumlah_pemesanan);
          this.state.totalPrice += (Number(data.data.products.harga)*Number(data.data.jumlah_pemesanan))
          context.dispatch('getCarts');
          router.push({ name: 'Cart' });
          this.state.notificationCards = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteCart(context,id){
      axios({
        method: 'GET',
        url: `http://localhost:3000/keranjangs/${id}`,
      })
      .then((data) => {
        this.state.totalPrice -= (Number(data.data.products.harga)*Number(data.data.jumlah_pemesanan))
        this.state.cartNumber -= Number(data.data.jumlah_pemesanan)
        let refreshedCart = this.state.cartList.filter(obj => {
          return obj.id !== Number(data.data.id)
        });
        context.commit('listCarts', refreshedCart);
        axios({
          method: 'DELETE',
          url: `http://localhost:3000/keranjangs/${id}`,
        })
        .then(()=>{})
      })
      .catch((error) => {
        console.log(error);
      });
    },
    addOrder(context,param){
      axios({
        method: 'POST',
        url: 'http://localhost:3000/pesanans',
        headers: {"Content-Type": "application/json"},
        data: {
          "nama": param.name,
          "noMeja": param.tableNumber,
          "keranjangs": this.state.cartList,
        },
      })
        .then(() => {
          this.state.cartList.forEach((element)=>{
            context.dispatch('deleteCart',element.id);
          });
          this.state.cartNumber = 0;
          this.state.totalPrice = 0;
          context.dispatch('getCarts')
          router.push({ name: 'Waiting' });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setNotification(context,status){
      setTimeout(() => {
        this.state.notificationCards = status,
        console.log(this.state.notificationCards,'heyeye')
      }, 2000);
    }
  },
  modules: {
  },
});

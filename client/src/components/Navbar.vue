<template>
    <div id="nav">
     <div class="d-flex justify-content-start">
        <h4 class="mr-3 mt-2">Resto Linov</h4>
        <div class="textFont ml-4 mt-3">
            <router-link to="/">Home</router-link>
        </div>
        <div class="textFont ml-4 mt-3">
            <router-link to="/product">Foods</router-link>
        </div>
     </div>
     <div class="d-flex justify-content-end">
        <div class="cart ml-3">
        <p>3</p>
        </div>
        <div class="d-flex row">
            <div class="mr-2">{{this.$store.state.cartNumber}}</div><router-link to="/cart">Keranjang</router-link>
        </div>
     </div>
    </div>
</template>
<script>

export default {
  name: 'Navbar',
  methods: {

  },
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Caveat&display=swap);
@import url(https://fonts.googleapis.com/css?family=Baloo+2&display=swap);
@import url(https://fonts.googleapis.com/css?family=Lato:300,400&display=swap);

h4{
    font-family: 'Lato';
    font-size: 30px;
    color: Black;
}
#nav{
  background-color: white;
  height: 70px;
  display: flex;
  align-items: center;
  padding-bottom: 40px;
  justify-content: space-between;
}
.textFont{
  color: grey;
}
.logout{
    color: white;
}
.cart{
  color: white;
  font-family: 'Baloo 2';
}
</style>

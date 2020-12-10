<template>
    <div class="container row">
      <div class="left-container">
          <h3>Delicious Food Menu</h3>
          <h4>In Your Handphone</h4>
          <p>Ayo segera pilih dan pesan makanan favorit anda!</p>
          <div class="button-container">
          <router-link to="/product">
          <input type="button" class="btn btn-success"
          value="-> Pesan">
          </router-link>
          </div>
      </div>
      <div class="right-container">
        <img alt="Vue logo" src="../assets/ilustrasi.png">
      </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'HomeIntro',
  components: {

  },
  data() {
    return {
      alert: false,
      msg: '',
      baseUrl: 'https://pure-plains-87911.herokuapp.com',
      email: '',
      password: '',
    };
  },
  created() {

  },
  methods: {
    login() {
      axios({
        method: 'POST',
        url: `${this.baseUrl}/user/login`,
        data: {
          email: this.email,
          password: this.password,
        },
      })
        .then((data) => {
          localStorage.setItem('token', data.data.token);
          this.$store.state.usertoken = localStorage.getItem('token');
          this.$router.push({ name: 'Home' });
        })
        .catch((error) => {
          console.log(error);
          this.alert = true;
          this.msg = 'Wrong Email/Password!';
        });
    },
  },
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:300,400&display=swap);

.login {
  border-color: black;
  border-style : double;
  color: white;
  width: 50%;
  text-align: center;
  font-family: 'Lato';
  font-weight: 300;
  margin : 80px auto;
  background: rgb(5, 5, 5);
  padding: 15px;
}
.container{
  height: 400px;
  min-width: 100%;
  margin-top: 30px;
}
img{
    width: 90%;
    height: 90%;
}
.button-container{
  width: 20%;
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
  height: 100%;
  width: 50%;
  justify-content: center;
  align-items: center;
}
h4{
  color : Black;
  font-family : 'Lato';
  font-size: 30px;
}
h3{
  color : Black;
  font-family : 'Lato';
  font-size: 30px;
  font-weight: bold
}
p{
  color : Black;
  font-family : 'Lato';
}
</style>

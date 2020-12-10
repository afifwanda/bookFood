<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Baloo+2&display=swap);
@import url(https://fonts.googleapis.com/css?family=Lato:300,400&display=swap);
#app {
  font-family: 'Lato',Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: grey;
}


</style>

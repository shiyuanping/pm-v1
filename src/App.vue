<template>
  <div id="app">
    <!-- <Login msg="Welcome to Your Vue.js App"/> -->
    <!-- <Index /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Login from './components/Login.vue';
// import Index from './components/Index.vue';


export default {
  name: 'app',
  components: {
    // Login,
    // Index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>

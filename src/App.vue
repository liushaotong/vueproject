<template>
  <div id="app">
    <v-home></v-home>
  </div>
</template>

<script>
import home from './components/home.vue'

export default {
  name: 'App',
  components: {
    'v-home': home
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>

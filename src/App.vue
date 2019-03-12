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

<style lang="css" scoped>

</style>

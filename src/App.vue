<template>
  <ChuckNorrisFacts />
</template>

<script>
import ChuckNorrisFacts from './components/ChuckNorrisFacts.vue'

export default {
  name: 'App',
  components: {
    ChuckNorrisFacts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
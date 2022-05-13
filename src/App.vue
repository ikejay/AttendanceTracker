<template>
  <v-app>
    <v-slide-x-transition mode="out-in">
      <router-view/>
    </v-slide-x-transition>
  </v-app>
</template>
<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Cairo, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
 <v-app>
   <v-app-bar color="#581845 " app>
     <v-icon size="36px" color="white" class="mr-2">mdi-webhook</v-icon>
     <h2 style="color: white">Attendance Tracker</h2>
     <v-spacer></v-spacer>
     <h3 style="color: white">{{new Date().toJSON().slice(0,10).replace(/-/g,'/')}}</h3>
   </v-app-bar>
    <router-view/>
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
  margin-top: 60px;
}
</style>

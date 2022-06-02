<template>
  <v-card class="" width="320px" flat color="card_back">
    <v-row class="ml-1 mr-4" dense justify="space-between" width="100%">
        <v-card-subtitle class="text-start font-weight-bold primary--text">{{type}}</v-card-subtitle>
        <v-icon color="primary">{{icon}}</v-icon>
    </v-row>
      <v-card-text class="d-flex align-baseline">
          <p class="text-start text-h4 white--text">1000</p>
          <span class="text-p ml-1 primary--text">Students</span>
      </v-card-text> 
  </v-card>
</template>

<script>
import vue from 'vue'

export default vue.extend({
    name: 'datacard',
    props: {
        type: String,
        icon: String
    },
    data: () => ({

    })
})
</script>

<style>

</style>
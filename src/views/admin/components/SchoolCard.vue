<template>
  <v-card @click="$emit('school')" class="text-start" elevation="0" width="400px" color="white">
      <v-card-subtitle class="grey--text text-start">School Name</v-card-subtitle>
      <v-card-text>
          <p class="text-subtitle-1">Senior High School</p>
          <v-icon size="36" color="primary" class="">mdi-account-school-outline</v-icon>
          <span>500 Students</span>
      </v-card-text>
  </v-card>
</template>

<script>
import vue from 'vue'

export default vue.extend({
    name: 'school_card',
    data: () => ({

    })
})
</script>

<style>

</style>
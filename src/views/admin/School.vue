<template>
  <div :style="{height: '100vh'}" class="mt-16 d-flex justify-start align-start">
    <div style="margin-left: 300px">
        <div class="secondary--text text-h5 font-weight-bold">Your Schools</div>
        <v-card @click="toggleDrawer = !toggleDrawer" class="d-flex primary px-16 py-10">
          <v-card-text class="text-h6 white--text">Add your school</v-card-text>
          <v-icon color="white" size="36">mdi-plus</v-icon>
      </v-card>
    </div>
    <v-navigation-drawer
        v-model="toggleDrawer"
        right
        rounded="xl"
    >
        The drawer here
    </v-navigation-drawer>
  </div>
</template>

<script>
import vue from 'vue'
export default vue.extend({
    name: 'school',
    data:() => ({
        toggleDrawer: null,
    })
    // eslint-disable-next-line vue/multi-word-component-names
})
</script>

<style>

</style>
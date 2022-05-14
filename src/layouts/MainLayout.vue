<template>
  <div>
    <v-app :style="{height: '100vh'}">
        <v-app-bar color="white" app>
            <v-icon size="36px" color="secondary" class="mr-2">mdi-webhook</v-icon>
            <h2 class="secondary--text">@Tracker</h2>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon color="secondary">mdi-account-circle</v-icon>
            </v-btn>
        </v-app-bar>
    <router-view />
    </v-app>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
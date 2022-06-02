<template>
  <div>
    <v-app>
        <v-app-bar app class="flex-grow-0" flat color="white" >
            <v-icon size="36px" color="primary" class="mr-2">mdi-webhook</v-icon>
            <h2 class="primary--text">@Tracker</h2>
            <v-spacer></v-spacer>
              <div id="inner" class="d-flex justify-center align-center">
                <v-menu offset-y>
                  <template v-slot:activator="{on, attrs}">
                    <v-btn 
                      icon 
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon color="primary">mdi-account-circle</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item link @click="moveToProfile()">
                      <v-icon class="mr-2">mdi-card-account-details-outline</v-icon>
                      Profile
                    </v-list-item>
                    <v-list-item link>
                      <v-icon class="mr-2">mdi-logout</v-icon>
                      Logout
                    </v-list-item>
                  </v-list>
                </v-menu>
            <span><p class="text-end">Username</p></span>
            </div>
        </v-app-bar>
    <router-view />
    </v-app>
  </div>
</template>

<script>
import vue from 'vue'
export default vue.extend({
  name: 'main_layout',
  data: () => ({
    showMenu: null
  }),
  methods: {
    moveToProfile(){
      this.$router.push({name: 'user_profile'})
    }
  }
})
</script>

<style scoped>

</style>
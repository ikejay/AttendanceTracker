<template>
  <div style="height: 100%">
      <v-navigation-drawer
        class="primary rounded top-0"
        permanent
        app
      >
          <v-list>
              <v-list-item class="ma-2 white--text d-flex align-center justify-start">
                  <v-icon color="white">mdi-webhook</v-icon>
                  <span class="ml-1 font-weight-bold">@Tracker</span>
              </v-list-item>
              <p class="ml-2 white--text text-caption mb-0 text-start">Manage Schools Here</p>
              <v-list-item class="dense pa-2 ma-2 rounded d-block dash_shadow white--text">
                  <!-- <v-icon color="white">mdi-school</v-icon> -->
                  <p class="text-p pa-0 ma-0 text-start font-weight-bold">GIIS</p>
                  <p class="text-caption pa-0 ma-0 text-start">Ghana International School</p>
              </v-list-item>
              <v-divider class="my-5 mx-5 white"></v-divider>
              <v-list-item 
                link 
                class="rounded px-2 mx-2 white--text text-start" 
                v-for="item in items"
                :key="item.title"
                active-class="dash_shadow"
                :to="item.to"
                :exact="item.exact"
                >
                  <v-list-item-icon>
                      <v-icon color="white">{{item.icon}}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="ml-n4">
                      <v-list-item-title>{{item.title}}</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
          </v-list>
          <v-divider class="my-5 mx-5 white"></v-divider>
          <v-list>
              <v-list-item link class="dense px-2 mx-2 rounded text-start white--text">
                 <v-list-item-icon>
                     <v-icon color="white">mdi-cog-outline</v-icon>
                 </v-list-item-icon>
                 <v-list-item-content class="ml-n4">
                     <v-list-item-title>Settings</v-list-item-title>
                 </v-list-item-content>
              </v-list-item>
              <v-list-item link class="dense px-2 mx-2 rounded text-start white--text">
                 <v-list-item-icon>
                     <v-icon color="white">mdi-file-document-multiple-outline</v-icon>
                 </v-list-item-icon>
                 <v-list-item-content class="ml-n4">
                     <v-list-item-title>Documents</v-list-item-title>
                 </v-list-item-content>
              </v-list-item>
              
          </v-list>
      </v-navigation-drawer>
      <v-content>
          <router-view />
      </v-content>
  </div>
</template>

<script>
import vue from 'vue'
export default vue.extend({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'dashboard_layout',
    data: () => ({
        items: [
            {title: 'Students Dashboard', icon: 'mdi-monitor-dashboard', to: {name: 'student_dashboard'}, exact: true},
            {title: 'Branches', icon: 'mdi-domain', to: {name: 'branches'}, exact: true},
            {title: 'Classes', icon: 'mdi-chair-school', to: {name: 'classes'}, exact: true},
            {title: 'Students', icon: 'mdi-account-school-outline', to: {name: 'students'}, exact: true},
            {title: 'Teachers', icon: 'mdi-human-male-board', to: {name: 'teachers'}, exact: true},
            {title: 'Academic Calendar', icon: 'mdi-calendar-multiselect', to: {name: 'calendar'}, exact: true},
            {title: 'Mark Attendance', icon: 'mdi-clipboard-list-outline', to: {name: 'attendance'}, exact: true},
            {title: 'Attendance Report', icon: 'mdi-chart-multiple', to: {name: 'report'}, exact: true},
            {title: 'Users', icon: 'mdi-shield-account-outline', to: {name: 'users'}, exact: true}
            ]

    })
})
</script>

<style>

</style>
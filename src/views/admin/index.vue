<template>
  <div :style="{height: '100vh'}" class="mt-16 d-flex justify-start align-start">
    <div style="margin-left: 300px">
        <div class="secondary--text text-h5 font-weight-bold">Your Schools</div>
        <div class="d-flex">
          <v-dialog
                v-model="dialog"
                max-width="800px"
                scrollable
        >
            <template v-slot:activator="{ on,attrs }">
              <v-card 
                v-bind="attrs"
                v-on="on" 
                elevation="0" 
                class="d-flex primary px-16 py-10"
              >
                <v-card-text class="text-h6 white--text">Add your school</v-card-text>
                <v-icon color="white" size="36">mdi-plus</v-icon>
            </v-card>
            </template>
            
            <newschool @dialog="dialog = false" />
          </v-dialog>
          <school-card @school="moveToSchool()" class="ml-5"/>
        </div>
    </div>
  </div>
</template>

<script>
import vue from 'vue'
import Newschool from './components/Newschool.vue'
import SchoolCard from './components/SchoolCard.vue'


export default vue.extend({
    name: 'school',
    components: {
      Newschool,
        SchoolCard
    },
    data:() => ({
        dialog: false,
    }),

    methods: {
      moveToSchool() {
        this.$router.push('/dashboard')
      }
    }
    // eslint-disable-next-line vue/multi-word-component-names
})
</script>

<style >
</style>
<template>
  <v-card
    class="mx-auto my-3"
    width="800px"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
        aspect-ratio="contain"
        height="250"
        :src="info.imgUrl"
    ></v-img>

    <v-card-title style="text-align: 'center'">{{info.name}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
        justify="space-between"
      >
        <div class="my-4 text-subtitle-1">
        Student ID: {{info.id}}
        </div>
        <div class="my-4 text-subtitle-1">
        DOB: {{info.dob}}
        </div>

      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Attendance Details</v-card-title>

    <v-card-text>
        <v-row
            align="center"
            class="mx-0"
            justify="space-between"
        >
            <div class="my-4 text-subtitle-1">
                {{info.status ? "Present" : "Absent"}}
            </div>
        </v-row>
    </v-card-text>

  </v-card>
</template>

<script>
import store from '@/store/index'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Profile',
    data: () => ({
      info: {}
    }),

    mounted(){
        console.log('----Getting---->')
        console.log(this.$route.params.id)
        let stArr = store.getters.getStudent(this.$route.params.id)
        this.info = stArr[0]
    },

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
}
</script>

<style scoped>

</style>
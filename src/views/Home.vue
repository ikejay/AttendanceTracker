<template>
    <v-card>
        <v-data-table
            :headers="headers"
            :items="students"
            class="elevation-1"
            @click:row="handleProfileDetails"
  >
    <template v-slot:[`item.image`]="{ item }">
        <v-avatar size="36px">
            <img alt="man" :src="item.imgUrl">
        </v-avatar>
    </template>

    <template v-slot:[`item.status`]="{ item }">
        <v-simple-checkbox
            color="#139265"
            v-model="item.status"
        >
        </v-simple-checkbox>
    </template>    
  </v-data-table>
    </v-card>
</template>

<script>
import data from '@/data/students'
import store from '@/store/index'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    data() {
        return {
            headers: [
                {text: 'ID', value: 'id'},
                {text: 'Image', align: 'start', value: 'image'},
                {text: 'Name', value: 'name'},
                {text: 'Attendance Status', value: 'status'}
            ],

            students: data,

            checkboxStatus: false

            //console.log

        }
    },

    methods: {
        handleProfileDetails(value){
            console.log('==student==')
            store.commit('addStudent',value)
            console.log(value)
            this.$router.push({
                name: 'Profile',
            })
        }
    }
}
</script>

<style scoped>

</style>
<template>
   <div class="d-flex row" :style="{height: '100vh', width: '100vw'}">
    <div>
        <v-card color="#23395d" :rounded="this.$vuetify.breakpoint.xs ? '0' : 'xl'" :height="height" width="540" elevation="12">
            <v-card-title class="px-7 d-flex justify-center">
                <div class="text-center">
                    <v-icon color="#fff" size="36">mdi-webhook</v-icon>  
                    <div class="text-h5 white--text font-weight-bold">Attendance Tracker</div>
                    <div class="text-h5 white--text font-weight-bold">LOGIN</div>
                </div>
            </v-card-title>
            <v-card-text>
                <v-form class="py-10 px-10">
                    <v-text-field
                        id="custom-label-color"
                        label="Username"
                        dense
                        filled
                        dark
                        color="#89CFF0AB"
                        prepend-inner-icon="mdi-email"                  
                    ></v-text-field>
                    <v-text-field
                        id="custom-placeholer-color"
                        label="Password"
                        dense
                        dark
                        filled
                        color="#89CFF0AB"
                        prepend-inner-icon="mdi-lock"
                    >
                    </v-text-field>
                    <v-btn
                        class="ma-0"
                        :loading="loading"
                        :disabled="loading"
                        color="#89CFF0"
                        block
                        x-large
                        @click="loader='loading'"
                        >
                        Login
                        <template v-slot:loader>
                            <span :style="{color: '#fff'}">Loging in...</span>
                        </template>
                    </v-btn>
                </v-form>
                <h4 class="white--text">Dont have an account?</h4>
                <v-btn @click="signUp()" plain text color="#89CFF0">Sign up</v-btn>
            </v-card-text>
        </v-card>       
    </div>
    <div>
       <h2>Good ..</h2>
    </div>
   </div>
</template>

<script>
import vue from "vue";

export default vue.extend({
     // eslint-disable-next-line vue/multi-word-component-names
    name: 'login',
    data: () => ({
        loader: null,
        loading: false
    }),


    computed: {
        height () {
            switch(this.$vuetify.breakpoint.name){
                case 'xs': return '100vh'
            }
        }
    },

    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },

    methods: {
        signUp() {
            this.$router.push({name: 'signup'})
        }
    }
})
</script>

<style scoped>
.custom-label-color .v-label {
  color:skyblue;
  opacity: 1;
}
</style>
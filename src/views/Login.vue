<template>
   <v-row no-gutters :style="{height: '100vh', width: '100vw'}">
    <v-col :style="{display: this.$vuetify.breakpoint.xs ? 'none': ''}" align-self="center" class="justify-center">
        <v-carousel
            cycle
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
        >
            <v-carousel-item >
                <img 
                    class="filter-green"
                    width="50%"
                    height="50%"
                    src='@/assets/images/att_1.svg'
                />    
                <div class="mt-10 text-subtitle-1 secondary--text">Track attendance of students belonging to your school here</div>
            </v-carousel-item>
            <v-carousel-item >
                <img 
                    class="filter-green"
                    width="50%"
                    height="50%"
                    src='@/assets/images/att_2.svg'
                />    
                <div class="mt-10 text-display-2 secondary--text">Realtime attendance monitoring and tracking of your students or pupils</div>
            </v-carousel-item>
            <v-carousel-item >
                <img 
                    class="filter-green"
                    width="50%"
                    height="50%"
                    src='@/assets/images/att_3.svg'
                />   
                <div class="mt-10 text-display-2 font-weight-bold secondary--text">Easy to use, reliable and safety of data is assured</div> 
            </v-carousel-item>
        </v-carousel>
    </v-col>
    <v-col>
        <v-tabs centered background-color="primary">
            <v-tab class="text-h6">Sign Up</v-tab>
            <v-tab class="text-h6">Sign In</v-tab>
            <v-tab-item :style="{height: '100vh', marginTop: '-48px', paddingLeft: this.$vuetify.breakpoint.mdAndUp ? '8%':'0', paddingRight: this.$vuetify.breakpoint.mdAndUp ? '8%':'0'}" class="primary">
                <div :style="{height: '100vh'}" class="d-flex justify-center align-center">
                    <div :class="{'px-16': this.$vuetify.breakpoint.mdAndUp}">
                        <div class="d-flex justify-center align-center pb-3">
                            <div class="text-start px-14">
                                <!-- <v-icon size="36">mdi-webhook</v-icon>   -->
                                <div class="text-h4 secondary--text font-weight-bold">Welcome to @Tracker</div>
                                <div class="text-p white--text">Track attendance of students belonging to your school here. Enter your credentials to login into your account</div>
                            </div>
                        </div>
                        <div>
                            <v-form class="py-10 px-10">
                                <v-text-field
                                    placeholder="example@gmail.com"
                                    label="Full Name"
                                    outlined
                                    dark
                                    color="white"
                                    prepend-inner-icon="mdi-account"                  
                                ></v-text-field>
                                <v-text-field
                                    placeholder="example@gmail.com"
                                    label="E-mail"
                                    outlined
                                    dark
                                    color="white"
                                    prepend-inner-icon="mdi-at"                  
                                ></v-text-field>
                                <v-text-field
                                    placeholder="8+ strong character"
                                    label="Password"
                                    dark
                                    outlined
                                    color="white"
                                    prepend-inner-icon="mdi-lock"
                                >
                                </v-text-field>
                                <v-text-field
                                    placeholder="8+ strong character"
                                    label="Confirm Password"
                                    dark
                                    outlined
                                    color="white"
                                    prepend-inner-icon="mdi-lock"
                                >
                                </v-text-field>
                                <v-btn
                                    class="ma-0"
                                    :loading="loading"
                                    :disabled="loading"
                                    color="secondary"
                                    elevation="0"
                                    block
                                    x-large
                                    @click="loader='loading'"
                                    >
                                    Register
                                    <template v-slot:loader>
                                        <span>Creating account...</span>
                                    </template>
                                </v-btn>
                            </v-form>
                            <h4 class="secondary--text">Already have an account? Go to Sign In tab</h4>
                        </div>
                    </div>
                </div> 
            </v-tab-item>
            <v-tab-item :style="{height: '100vh', marginTop: '-48px', paddingLeft: this.$vuetify.breakpoint.mdAndUp ? '8%':'0', paddingRight: this.$vuetify.breakpoint.mdAndUp ? '8%':'0'}" class="primary">
                <div :style="{height: '100vh'}" class="d-flex justify-center align-center">
                    <div :class="{'px-16': this.$vuetify.breakpoint.mdAndUp}">
                        <div class="d-flex justify-center align-center">
                            <div class="text-start px-10">
                                <!-- <v-icon size="36">mdi-webhook</v-icon>   -->
                                <div class="text-h4 secondary--text font-weight-bold">Welcome to @Tracker</div>
                                <div class="text-p white--text">Track attendance of students belonging to your school here. Enter your credentials to login into your account</div>
                            </div>
                        </div>
                        <div>
                            <v-form class="pa-10">
                                <v-text-field
                                    placeholder="example@gmail.com"
                                    label="E-mail"
                                    outlined
                                    dark
                                    color="white"
                                    prepend-inner-icon="mdi-at"                  
                                ></v-text-field>
                                <v-text-field
                                    placeholder="8+ strong character"
                                    label="Password"
                                    dark
                                    outlined
                                    color="white"
                                    prepend-inner-icon="mdi-lock"
                                    password
                                >
                                    <template v-slot:append>
                                        <v-btn icon>
                                            <v-icon>mdi-eye</v-icon>
                                        </v-btn>
                                    </template>
                                </v-text-field>
                                <v-btn
                                    class="ma-0"
                                    :loading="loading"
                                    :disabled="loading"
                                    color="secondary"
                                    elevation="0"
                                    block
                                    x-large
                                    @click="login()"
                                    >
                                    Login
                                    <template v-slot:loader>
                                        <span>Loging in...</span>
                                    </template>
                                </v-btn>
                            </v-form>
                            <h4 class="secondary--text">Dont have an account? Go to Sign Up tab</h4>
                        </div>
                    </div>
                </div> 
            </v-tab-item>
        </v-tabs>      
    </v-col>
   </v-row>
</template>

<script>
import vue from "vue";

export default vue.extend({
     // eslint-disable-next-line vue/multi-word-component-names
    name: 'login',
    data: () => ({
        loader: null,
        loading: false,
        slides: ['../../assets/images/att_1.svg','../../../assets/images/att_2.svg','@/assets/images/att_3.svg']
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
        login() {
            this.$router.push({name: 'school'})
        }
    }
})
</script>

<style scoped>
    
</style>
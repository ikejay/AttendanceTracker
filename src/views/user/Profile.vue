<template>
  <div class= "d-flex ma-16">
      <div class="pa-4 ma-5 white" style="width: 800px">
          <p class="font-weight-bold text-start white" dense>Edit Profile</p>
          <v-row>
            <v-col cols="6">
                <v-text-field
                    label="First Name"
                    placeholder="Kofi"
                    prepend-inner-icon="mdi-account"
                    flat
                    filled
                    dense
                    background-color="textfield"
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field
                    placeholder="Annan"
                    label="Last Name"
                    prepend-inner-icon="mdi-account"
                    flat
                    filled
                    dense
                    background-color="textfield"
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field
                    label="Email"
                    placeholder="example@gmail.com"
                    prepend-inner-icon="mdi-at"
                    flat
                    filled
                    dense
                    background-color="textfield"
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-select
                    offset-y
                    placeholder="male"
                    label="Gender"
                    prepend-inner-icon="mdi-gender-male-female"
                    flat
                    filled
                    dense
                    :items="['Male', 'Female']"
                    background-color="textfield"
                ></v-select>
            </v-col>
            <v-col cols="12">
                <vue-phone-number-input
                    id="phone"
                    size="lg"
                    :style="{border: 'none', backgroundColor: '#eaf1f8'}"
                    color="#4682B4"
                    default-country-code="GH"
                    :class="'phone-control '+inputClasses+' d-flex'"
                    aria-describedby="addon-right addon-left"
                ></vue-phone-number-input>
            </v-col>
            <v-col align="start" cols="6">
              <v-btn 
                class="bee"
                elevation="0"
                color="primary"
              >
                <v-icon>mdi-check</v-icon>
                  Update
              </v-btn>
          </v-col>
          </v-row>
      </div>
      <div class="pa-4 ma-2 white" style="width: 600px">
          <p class="white text-start font-weight-bold">Change Password</p>
          <v-row>
              <v-col cols="12">
                <v-text-field
                    label="Current Password"
                    placeholder="********"
                    prepend-inner-icon="mdi-lock"
                    flat
                    filled
                    dense
                    background-color="textfield"
                ></v-text-field>
            </v-col>
              <v-col cols="12">
                <v-text-field
                    label="New Password"
                    placeholder="********"
                    prepend-inner-icon="mdi-lock"
                    flat
                    filled
                    dense
                    background-color="textfield"
                ></v-text-field>
            </v-col>
              <v-col cols="12">
                <v-text-field
                    label="Repeat New Password"
                    placeholder="********"
                    prepend-inner-icon="mdi-lock"
                    flat
                    filled
                    dense
                    background-color="textfield"
                ></v-text-field>
            </v-col>
            <v-col align="start" cols="6">
              <v-btn 
                class="bee"
                elevation="0"
                color="primary"
              >
                <v-icon>mdi-check</v-icon>
                  Change Password
              </v-btn>
          </v-col>
          </v-row>
      </div>
      
  </div>
</template>

<script>
import vue from "vue"
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

vue.component('vue-phone-number-input', VuePhoneNumberInput);

export default vue.extend({
    name: 'user_profile',
    computed: {
        inputClasses(){
      return `form-control ${this.all_error?'is-invalid':''}`;
    }
    },
    data: () => ({

    })
})
</script>

<style lang="scss">
    .bee {
        text-transform: unset;
        font-size: medium;
    };
    .phone-control{
        input{
            background-color: transparent !important;
        }
    }

</style>
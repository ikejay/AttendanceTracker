<template>
<div class="white">
    <div class="d-flex justify-end">
        <v-btn @click='$emit( "dialog" )' icon>
            <v-icon size="36">mdi-close-circle-outline</v-icon>
        </v-btn>
    </div>
    <div :style="{height: '100%', width: '100%', background: '#fff'}" class="pa-16 d-flex justify-center align-center">
        <v-row class="px-10" align="center">
          <v-col cols="12">
              <div class="text-h5">Add your School</div>
          </v-col>
          <v-col cols="6">
              <div class="textfield pa-2" style="border:1px red solid; border-radius: 5px">
                  <img
                    color="grey"
                    src="@/assets/images/building.svg"
                    width="60%"
                    height="60%"
                   />
              </div >
          </v-col>
          <v-col cols="6" justify-center>
              <v-file-input 
                color="grey"
                style="border: 1px solid grey"
                outlined
                label="Browse"
                dense
                background-color="textfield"
              />
          </v-col>
          <v-col cols="6">
            <v-text-field
                label="School name"
                placeholder="Ghana International School"
                prepend-inner-icon="mdi-school"
                flat
                filled
                dense
                background-color="textfield"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                placeholder="GIIS"
                label="Display name"
                prepend-inner-icon="mdi-tab-search"
                flat
                filled
                dense
                background-color="textfield"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                label="Email"
                placeholder="giis@edu.gh"
                prepend-inner-icon="mdi-at"
                flat
                filled
                dense
                background-color="textfield"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                placeholder="+233 200 400 300"
                label="Phone"
                prepend-inner-icon="mdi-phone"
                flat
                filled
                dense
                background-color="textfield"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-select
                filled
                flat
                dense
                prepend-inner-icon="mdi-flag"
                background-color="textfield"
                v-model="select"
                :items="countries"
                label="Select"
                item-text="name"
                >
                <template v-slot:item="slotProps" >
                    <i :class="['mr-2', 'em', slotProps.item.flag]"></i>
                    {{slotProps.item.name}}
                </template>
            </v-select>
          </v-col>
          <v-col cols="6">
            <v-text-field
                placeholder="Dansoman"
                label="City name"
                prepend-inner-icon="mdi-city-variant-outline"
                flat
                filled
                dense
                background-color="textfield"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
              <v-textarea
                label="About your school"
                placeholder="Ghana International School was established to provide education to children of doctors living around Dansoman"
                prepend-inner-icon="mdi-information-outline"
                background-color="textfield"
                flat
                dense
                filled
              />
          </v-col>
          <v-col align="start" cols="6">
              <v-btn 
                id="bee"
                elevation="0"
                color="textfield"
              >
                <v-icon>mdi-close</v-icon>
                  Cancel
              </v-btn>
          </v-col>
          <v-col align="end" cols="6">
              <v-btn 
                id="bee"
                elevation="0"
                color="primary"
              >
                <v-icon>mdi-login</v-icon>
                  Complete
              </v-btn>
          </v-col>
      </v-row>
      
  </div>
</div>
</template>

<script>
import vue from "vue"

export default vue.extend({
     // eslint-disable-next-line vue/multi-word-component-names
     name: 'newschool',
     data: () => ({
        select: null,
        countries: [
            {
                name: "Andorra",
                flag: "em-flag-ad"
            },
            {
                name: "Arab Emirates",
                flag: "em-flag-ae"
            },
            {
                name: "Afghanistan",
                flag: "em-flag-af"
            },
            {
                name: "Antigua & Barbuda",
                flag: "em-flag-ag"
            },
            {
                name: "Albania",
                flag: "em-flag-al"
            },
            {
                name: "Anguilla",
                flag: "em-flag-ai"
            }
        ],
     })

})
</script>

<style scoped>
#bee {
  text-transform: lowercase !important;
  font-size: medium;
}
</style>
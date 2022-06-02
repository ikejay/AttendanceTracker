<template>
  <v-row align="start" class="ma-10">
      <v-col md="3" sm="6">
          <data-card type="Total" icon="mdi-account-group-outline"/>
      </v-col>
      <v-col md="3" sm="6">
          <data-card type="Present" icon="mdi-format-list-checks"/>
      </v-col>
      <v-col md="3" sm="6">
          <data-card type="On time" icon="mdi-calendar-clock"/>
      </v-col>
      <v-col md="3" sm="6">
          <data-card type="Late" icon="mdi-timer-outline"/>
      </v-col>
      <v-col md="3" sm="6">
          <data-card type="Absent" icon="mdi-list-status"/>
      </v-col>
      <v-col md="3" sm="6">
          <data-card type="Sick" icon="mdi-emoticon-sick-outline"/>
      </v-col>
      <v-col md="3" sm="6">
          <data-card type="Away With Permission" icon="mdi-file-sign"/>
      </v-col>
  </v-row>
</template>

<script>
import DataCard from '@/components/DataCard.vue'
import vue from 'vue'

export default vue.extend({
  components: { 
      DataCard 
      },
    // eslint-disable-next-line vue/multi-word-component-names
})
</script>

<style>

</style>
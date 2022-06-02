import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "@mdi/font/css/materialdesignicons.css"

Vue.use(Vuetify)

export default new Vuetify({
    icons: {
      iconfont: 'md',
    },

    theme: {
      themes: {
        light: {
          primary: '#4682B4',
          secondary: '#172d44',
          textfield: '#eaf1f8',
          dash_shadow: '#246092',
          card_back: '#D6EAF8'
        }
      }
    }
  })
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    student: {}
  },
  mutations: {
    addStudent (state, payload) {
      state.student = payload
    }
  },
  getters: {
    getStudent: state => {
        return state.student
    }    
  }
})

export default store

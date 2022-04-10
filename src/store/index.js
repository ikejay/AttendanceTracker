import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/data/students'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    student: data
  },
  mutations: {
    addStudents (state, payload) {
      state.student = payload
    }
  },
  getters: {
    getStudent: (state) => (id) => {
        return state.student.filter(a => a.id == id)
    }    
  }
})

export default store

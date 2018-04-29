import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  studentName: "",
  homeworkVersion: -1,
  minimizeHeader: false
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [createLogger()]
})

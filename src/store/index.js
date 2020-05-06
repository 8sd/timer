import Vue from 'vue'
import Vuex from 'vuex'
import notify from '@/classes/notify'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timers: [],
    settingsVisible: false,
    requestedPermissions: false,
    notify: notify,
    requestPermissions: function () {
      this.requestedPermissions = true;
      return notify.requestPermissions();
    }
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  },
})

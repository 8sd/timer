import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import vuetify from './plugins/vuetify';
import store from './store'

import './registerServiceWorker'
import "@fortawesome/fontawesome-free/css/all.css";
import "animate.css";

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.mixin({
  computed: {
    timers () {
      return this.$store.state.timers;
    }
  },
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

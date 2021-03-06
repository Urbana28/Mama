import Vue from 'vue'
import App from './App.vue'
import Vuelidate from "vuelidate";
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel';
import { VueResponsiveComponents } from "vue-responsive-components"

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAfyjgjCgBPurRc7zaVTJNXPOAMRtbQWmo",
    installComponents: true
  }
})

Vue.config.productionTip = false


Vue.use(VueCarousel);
Vue.use(Vuelidate);
Vue.use(VueResponsiveComponents)




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

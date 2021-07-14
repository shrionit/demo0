import Vue from 'vue'
import '@/plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/index.css";
import mdiVue from 'mdi-vue/v2'
import * as mdijs from '@mdi/js'

Vue.use(mdiVue, {
  icons: mdijs
})

Vue.config.productionTip = false
const idtoken = localStorage.getItem("idtoken");

if (idtoken) {
  Vue.prototype.$axios.defaults.headers.common['Authorization'] = `Bearer ${idtoken}`;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Style from './styles/style.scss'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Routes from './Routes'


Vue.config.productionTip = false
export const bus =new Vue()
Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(Style)

const router = new VueRouter({
  mode: 'history',
  routes: Routes,
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
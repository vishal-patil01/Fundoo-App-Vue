import Vue from 'vue'
import App from './App.vue'
import Style from './styles/style.scss'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(Style)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
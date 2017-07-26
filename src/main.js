/* 项目启动 */
import Vue from 'vue'
import App from './App'
import router from './router'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
new Vue({
  router: router,
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router.config.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

axios.defaults.baseURL = 'http://192.168.1.101:8093';
Vue.prototype.$http = axios

Vue.use(ElementUI);

Vue.config.productionTip = false

// axios.defaults.baseURL = 'http://192.168.1.101:8093';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

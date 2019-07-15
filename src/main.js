import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.1.101:8093';
Vue.prototype.$http = axios

Vue.use(ElementUI);

Vue.config.productionTip = false

// axios.defaults.baseURL = 'http://192.168.1.101:8093';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

new Vue({
  render: h => h(App),
}).$mount('#app')

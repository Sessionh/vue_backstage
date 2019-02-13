import Vue from 'vue';
import App from './App.vue';
import store from './store/index.js';
import router from './router/router';
import Iview from 'iview';
import 'iview/dist/styles/iview.css';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont.css';
import axios from 'axios';
// import  'mockjs';
// import './mock/index';
// import util from './libs/util.js'
import componets from './components/index'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.withCredentials = true;

Vue.prototype.$http = axios
Vue.config.productionTip = false;
Vue.use(Iview);
Vue.use(componets);

new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
       
  },
}).$mount('#app');

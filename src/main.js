import Vue from 'vue';
import App from './App.vue';
import store from './store/index.js';
import router from './router/router';
import Iview from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/iconfont.css';
import axios from 'axios';
import  'mockjs';
import './mock/index';
// import util from './libs/util.js'
import componets from './components/index'

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

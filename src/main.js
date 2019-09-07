import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './stylesheets/main.scss';
import '../node_modules/swiper/dist/css/swiper.min.css'
import axios from 'axios';

import { Lazyload, InfiniteScroll, Header, Button, Tabbar, TabItem, Cell} from 'mint-ui';
Vue.use(Lazyload);
Vue.use(InfiniteScroll);
Vue.component('mt-header', Header);
Vue.component('mt-button', Button);
Vue.component('mt-tabbar', Tabbar);
Vue.component('mt-tabItem', TabItem);
Vue.component('mt-cell', Cell);

Vue.prototype.$http = axios;
// 引入rem.js文件
import './modules/rem';
import './modules/directive'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

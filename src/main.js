import './mock'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {showMessage} from './utils'
import './api/banner'
import './eventBus'
Vue.prototype.$showMessage = showMessage;

import vLoading from './directives/loading'
import vLazy from './directives/lazy'

Vue.directive('loading', vLoading)
Vue.directive('lazy', vLazy);
import store from './store'
store.dispatch('setting/fetchData');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

import * as blogApi from './api/blog';


// blogApi.getBlog(1).then(res=> {
//   console.log(res);
// })
// blogApi.postComment('123', '12314', 12).then(res=> {
//   console.log(res);
// })
// blogApi.getCommentByPage(1, 10).then(res => {
//   console.log(res);
// })






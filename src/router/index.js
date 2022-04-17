import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './routes';
import {titleControl} from '@/utils'

if(!window.VueRouter) {
  Vue.use(VueRouter);
}


const router = new VueRouter({
  routes,
  mode: 'history'
});

router.afterEach((to, from) => {
  titleControl.setRouteTitle(to.meta.title);
  // if(store.state.setting.data) {
  //   document.title = to.meta.title + '-' + store.state.setting.data.siteTitle;

  // }
})
export default router;
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/index'
import App from './App'
import ajax from './ajax.js'
// import api from '../api/api'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueLazyload from 'vue-lazyload'

Vue.use(Antd)

Vue.use(VueLazyload,{
  preLoad: 1.3, // 提前加载高度（数字 1 表示 1 屏的高度） 默认值:1.3
  // error: 'dist/error.png', // 当加载图片失败的时候
  // loading: 'dist/loading.gif', // 图片加载状态下显示的图片
  attempt: 3 //  加载错误后最大尝试次数 默认值:3
})



Vue.prototype.$ajax = ajax;
// Vue.prototype.api = api;
Vue.config.productionTip = false;

// Vue.prototype.Host='/api';

/* eslint-disable no-new */
new Vue({
  name:'root',
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// Vue.store.state.commit("change","hasuahi")

// window.addEventListener('popstate',function(e) {
//   router.isBack = true
// },false)
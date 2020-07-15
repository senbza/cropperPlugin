import Vue from 'vue'
import App from './App.vue'
import VueCropper from 'vue-cropper';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(VueCropper);
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
}).$mount('#app')

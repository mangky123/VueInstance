
import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import router from './router'
import VueHighlightJS from 'vue-highlight.js';


Vue.use(VueHighlightJS);
Vue.use(VeeValidate);
Vue.config.productionTip = false

import 'highlight.js/styles/atom-one-light.css';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

// add vue-nav-tabs
import VueTabs from 'vue-nav-tabs/dist/vue-tabs.js'
import 'vue-nav-tabs/themes/vue-tabs.css'
Vue.use(VueTabs)

// add prismjs and vue-prism-editor
import "prismjs";
import "prismjs/themes/prism.css";
import 'vue-prism-editor/dist/VuePrismEditor.css'

new Vue({
  render: h => h(App),
}).$mount('#app')

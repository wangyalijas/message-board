// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import App from './App'
import '@/assets/css/common.css'
import '@/assets/css/reset.css'


//muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import '@/assets/css/mouse-ui-fonts.css'
Vue.use(MuseUI)


//element-ui
import { Button, Select ,Input} from 'element-ui'
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Input.name, Select)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

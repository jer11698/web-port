import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faPhone, faEnvelope)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')

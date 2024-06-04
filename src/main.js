import { createApp } from 'vue'
import { Quasar, Dialog } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
import '@/style.scss'

import App from './App.vue'

const app = createApp(App)

app.use(Quasar, {
  plugins: {
      Dialog
  }, 
})

app.mount('#app')
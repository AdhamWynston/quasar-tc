// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)
import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import Quasar from 'quasar'
import router from './router'
import VuexStore from './vuex/store'
import moment from 'moment'
import VeeValidate, {Validator} from 'vee-validate'
import br from 'vee-validate/dist/locale/pt_BR'

Validator.addLocale(br)
Vue.use(VeeValidate, {
  locale: 'pt_BR'
})
Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework
Vue.use(Vuex)
axios.defaults.baseURL = process.env.SERVER

axios.interceptors.request.use((config) => {
  config.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc3YjNiZjdjM2ZlMmNhYWVkM2ZkMTc0NWU0ODU4MTAwMDRkMWYzM2IyYjEwMzMyZmNhZTk2Y2Y4YzYxZDRjMmQ4MTRlNDhhOTViMTdhYTc2In0.eyJhdWQiOiIyIiwianRpIjoiNzdiM2JmN2MzZmUyY2FhZWQzZmQxNzQ1ZTQ4NTgxMDAwNGQxZjMzYjJiMTAzMzJmY2FlOTZjZjhjNjFkNGMyZDgxNGU0OGE5NWIxN2FhNzYiLCJpYXQiOjE1MDY2MTQ3ODksIm5iZiI6MTUwNjYxNDc4OSwiZXhwIjoxNTM4MTUwNzg5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.FTbu81mJrmfT7BDqFXj3z_hMPGmalL1ntKl1osBLu4RC_iEO59kCXqMOKOqgFLParW1tEEa4oG48yWW4ZqY50I_A4nwiZy4J_Itx1T6hdgOruzVeoeGXsuVwJCX3G3qHyWb4ssy8bYGoru0VHYw7pPIIvQElXxY8I0nYtrjn2HLpEvUFMI2DmkVc-NeAFr5zeUqwgD9X8KKU51LnOgi5LHtJxJQXEUX-pSne9PN0boWJqExFywLjviQoOdzvXmitqVjAXcYMXY_w887t0NUrXf8bq5j-zd5eZ79UQDFFHxx1hpKwpJtavSlmfqZzoiEhjzzJ9YBa5Kt-jnDViJw_CvxNDRkMgGUZca7ta9p0kQRwrRzs6J8yoCXm--KbdGlpoFBiZAmIGWwq4nJ0q05QkQAwXCeDroWevTGq48-UaZcc9Jts2ZBy1c9wujQvAvWeFofjhQXdnUOtGw8K9NKVMnAQzA1Of-HSq86xQQw3TavPCxTpA3BqSozceR2zglg3IZ2_S7PzJ8_usvDn9OLiWMljgTZFpTygW4y1FUjknnFwBAmwkvC5upuKjq5kfHajYm4uz0Gbbv7dcopoBlh9mCfVTgbhz9nxEzNca8s9QMzkpcz_o3apLwspnFts4QuRsh_MLdc3PrZkh6O1xnKgPzK0u6BLUTcZdyHkp5DtHsM'
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
const store = new Vuex.Store(VuexStore)
if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
moment.locale('pt-BR')
import 'quasar-extras/material-icons'
import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'
Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  })
})

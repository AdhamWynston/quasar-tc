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
import Quasar from 'quasar'
import router from './router'
import VuexStore from './vuex/store'
import moment from 'moment'
import VueResource from 'vue-resource'
import Auth from './Packages/Auth'
import JwtToken from './services/jwt-token'
// import VeeValidate, {Validator} from 'vee-validate'
// import br from 'vee-validate/dist/locale/pt_BR'
import Vuelidate from 'vuelidate'

// Validator.addLocale(br)
Vue.use(Vuelidate, {
  locale: 'pt_BR'
})
Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework
Vue.use(Vuex)
Vue.use(Auth)
Vue.use(VueResource)
Vue.http.options.root = process.env.SERVER

const store = new Vuex.Store(VuexStore)

Vue.http.interceptors.push((request, next) => {
  if (JwtToken.token) {
    request.headers.set('Authorization', JwtToken.getAuthorizationHeader())
  }
  next()
})
Vue.http.interceptors.push((request, next) => {
  next((response) => {
    let authorization = response.headers.get('Authorization')
    if (authorization) {
      JwtToken.token = authorization.split(' ')[1]
    }

    switch (response.status) {
      case 401:
        store.commit('unauthenticated')
        return router.push('/login')
    }
  })
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.state.auth.check) {
    return router.push('/login')
  }
  next()
})
router.beforeEach((to, from, next) => {
  if (store.state.auth.check) {
    if (store.getters.isCoordinator && to.name.startsWith('admin')) {
      return router.push('/')
    }
  }
  next()
})
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

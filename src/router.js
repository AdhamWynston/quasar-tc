import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    {
      path: '/',
      component: load('Index'),
      children: [
        { path: '/', component: load('Charts'), name: 'index' },
        { path: '/clients', component: load('Clients/List'), name: 'Todos os clientes' },
        { path: '/clients/:id', component: load('Clients/View'), name: 'Visualizando Cliente' }
      ]
    },
    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})

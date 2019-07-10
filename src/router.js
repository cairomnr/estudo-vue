import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cartas from './views/Cartas.vue'
import CartasInserir from './views/CartasInserir.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'cartas',
          component: Cartas
        },
        {
          path: 'inserir',
          name: 'inserir',
          component: CartasInserir
        }
      ]
    }
  ]
})

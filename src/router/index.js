import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import criterionMoney from '../views/twoCart/criterion-money.vue'
import showarea from '../views/twoCart/criterion-showarea.vue'
import shop from '../views/twoCart/criterion-shop.vue'
import highmoney from '../views/twoCart/high-money.vue'
import highshowarea from '../views/twoCart/high-showarea.vue'
import highshop from '../views/twoCart/high-shop.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'highshop',
    component: highshop
  },
	{
	  path: '/list',
	  name: 'List',
	  component: () => import('../views/List.vue')
	}
]

const router = new VueRouter({
  routes
})

export default router

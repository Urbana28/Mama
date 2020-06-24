import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/intro/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/general/About.vue')
  },
    {
      path: '/welcome',
      name: 'Welcome',
      component: () => import('../views/general/Welcome.vue')
    },
    {
      path: '/waitlist',
      name: 'Join Waitlist',
      component: () => import( '../views/general/JoinWaitlist.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import( '../views/general/LoginForm.vue')
    },
    {
      path: '/intro',
      name: 'Intro',
      component: () => import( '../views/intro/Intro.vue')
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: () => import('../views/signUp/SignUp.vue')
    },
    {
      path: '/signUp/confirmation',
      name: 'SignUpConfirmation',
      component: () => import( '../views/signUp/SignUpConfirmation.vue')
    },
    {
      path: '/invite/confirmation',
      name: 'InviteConfirmation',
      component: () => import( '../views/inviteFriends/InviteConfirmation.vue')
    },
    {
      path: '/invite',
      name: 'InviteFriends',
      component: () => import( '../views/inviteFriends/InviteFriends.vue')
    },
    {
      path: '/recommend/b',
      name: 'RecommendB',
      component: () => import( '../views/recommend/RecommendB.vue')
    },
    {
      path: '/recommend/c',
      name: 'RecommendC',
      component: () => import( '../views/recommend/RecommendC.vue')
    },
    {
      path: '/restaurant/:id/details',
      name: 'BusinessDetail',
      component: () => import( '../views/businessDetails/BusinessDetail.vue')
    },
    {
      path: '/homepage',
      name: 'HomepageContainer',
      component: () => import('../views/restaurants/HomepageContainer')
    },
    {
      path: '/map',
      name: 'MapMobile',
      component: () => import( '../views/restaurants/MapMobile')
    },
    {
      path: '/listMobile',
      name: 'ListMobile',
      component: () => import( '../views/restaurants/ListMobile')
    },
    {
      path: '/ethnicity',
      name: 'EthnicityPage',
      component: () => import( '../views/ethnicity/EthnicityPage')
    },
    {
      path: '/restaurant/filter/ethnicity',
      name: 'RestaurantsByEthnicity',
      component: () => import( '../views/restaurants/RestaurantsByEthnicity')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => {
  if( to.name !=='Login' && !localStorage.getItem('token')) next({name: 'Login'})
  next()
})

export default router

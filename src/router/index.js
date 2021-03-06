import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/intro/Home.vue'
import HelloWorld from "../views/HelloWorld";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/general/Welcome.vue')
    },
    {
      path: '/waitlist',
      name: 'Join Waitlist',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/general/JoinWaitlist.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "about" */ '../views/general/LoginForm.vue')
    },
    {
      path: '/intro',
      name: 'Intro',
      component: () => import(/* webpackChunkName: "about" */ '../views/intro/Intro.vue')
    },
    {
      path: '/signUp',
      name: 'SignUp',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/signUp/SignUp.vue')
    },
    {
      path: '/signUpConfirm',
      name: 'SignUpConfirmation',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/signUp/SignUpConfirmation.vue')
    },
    {
      path: '/inviteConfirm',
      name: 'InviteConfirmation',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/inviteFriends/InviteConfirmation.vue')
    },
    {
      path: '/inviteFriends',
      name: 'InviteFriends',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/inviteFriends/InviteFriends.vue')
    },
    {
      path: '/recommendA',
      name: 'RecommendA',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/recommend/RecommendA.vue')
    },
    {
      path: '/recommendB',
      name: 'RecommendB',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/recommend/RecommendB.vue')
    },
    {
      path: '/recommendC',
      name: 'RecommendC',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/recommend/RecommendC.vue')
    },
    {
      path: '/businessDetail',
      name: 'BusinessDetail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/businessDetails/BusinessDetail.vue')
    },
    {
      path: '/homepage',
      name: 'HomepageContainer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/restaurants/HomepageContainer')
    },
    {
      path: '/map',
      name: 'MapMobile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/restaurants/MapMobile')
    },
    {
      path: '/listMobile',
      name: 'ListMobile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/restaurants/ListMobile')
    },
    {
      path: '/ethnicity',
      name: 'EthnicityPage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/ethnicity/EthnicityPage')
    },
    {
      path: '/filtered',
      name: 'RestaurantsByEthnicity',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/restaurants/RestaurantsByEthnicity')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

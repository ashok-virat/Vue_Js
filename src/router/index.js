import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/Home/HomeComponent'
import {store} from './../main'
const Signin = () => import('@/components/SigninComponent')
const Signup = () => import('@/components/SignupComponent')
const LifeCycleHooks = () => import('@/components/Hooks/LifeCycleHooksComponent')
const ParentComponent = () => import('@/components/Props/ParentComponent')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: Signin,
      beforeEnter: (to, from, next) => {
        if (store.state.authenticated === true) {
          next(false)
        } else {
          next()
        }
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      beforeEnter: (to, from, next) => {
        if (store.state.authenticated === true) {
          next(false)
        } else {
          next()
        }
      }
    },
    {
      path: '/homeComponent/:id',
      name: 'HomeComponent',
      component: HomeComponent,
      props: true,
      beforeEnter: (to, from, next) => {
        if (store.state.authenticated === false) {
          next(false)
        } else {
          next()
        }
      }
    },
    {
      path: '/lifecyclehooks',
      name: 'LifeCycleHook',
      component: LifeCycleHooks,
      props: true,
      beforeEnter: (to, from, next) => {
        if (store.state.authenticated === false) {
          next(false)
        } else {
          next()
        }
      }
    },
    {
      path: '/props',
      name: 'props',
      component: ParentComponent,
      props: true,
      beforeEnter: (to, from, next) => {
        if (store.state.authenticated === false) {
          next(false)
        } else {
          next()
        }
      }
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/Home/HomeComponent'
const Signin = () => import('@/components/Signin')
const Signup = () => import('@/components/Signup')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/homeComponent/:id',
      name: 'HomeComponent',
      component: HomeComponent,
      props: true
    }
  ]
})

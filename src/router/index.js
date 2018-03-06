import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import RegisterPage from '@/pages/RegisterPage'
import LoginPage from '@/pages/LoginPage'
import ApplicationPage from '@/pages/application/Application'
import QuickOrderPage from '@/pages/application/order/QuickOrder'
import WareHousePage from '@/pages/application/warehouse/WareHousePage'
import ListOrderPage from '@/pages/application/order/ListOrder'
import LogCodPage from '@/pages/application/cod/LogCod'
import UserProfilePage from '@/pages/application/user/UserProfile'
import MultiOrderPage from '@/pages/application/order/MultiOrder'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/dangky',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/dangnhap',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/quanly',
      name: 'app',
      component: ApplicationPage,
      children: [
        {
          path: 'tao-don-hang-nhanh',
          name: 'quick-order',
          component: QuickOrderPage
        },
        {
          path: 'tao-nhieu-don-hang',
          name: 'multi-order',
          component: MultiOrderPage
        },
        {
          path: 'dia-chi-lay-hang',
          name: 'ware-house',
          component: WareHousePage
        },
        {
          path: 'danh-sach-don-hang',
          name: 'list-order',
          component: ListOrderPage
        },
        {
          path: 'tien-thu-ho',
          name: 'log-cod',
          component: LogCodPage
        },
        {
          path: 'tai-khoan',
          name: 'user-profile',
          component: UserProfilePage
        }
      ]
    }
  ]
})

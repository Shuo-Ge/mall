import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detile = () => import('../views/detile/Detile')

// 安装插件
Vue.use(VueRouter)
// 创建router
const routes = [
    {
        path: "",
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    }
    ,
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/detile/:iid',
        component: Detile
    }
]
const router = new VueRouter({
    routes,
    mode: 'history',
    // meta: { footShow: true }

})
export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const home = () => import('@/views/home/home')
const category = () => import('@/views/category/category')
const cart = () => import('@/views/cart/cart')
const profile = () => import('@/views/profile/profile')
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home,
            meta: {
                title: '首页'
            }
        },
        {
            path: '/category',
            component: category,
            meta: {
                title: '分类'
            }
        },
        {
            path: '/cart',
            component: cart,
            meta: {
                title: '购物车'
            }
        },
        {
            path: '/profile',
            component: profile,
            meta: {
                title: '个人中心'
            }
        }
    ]
})
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title
    next()
})
export default router

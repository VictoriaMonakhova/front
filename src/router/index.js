import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'HomePage',
        meta: {
            title: 'Главная страница',
            layout: 'main-layout'

        },
        component: () =>
            import ('@/pages/HomePage.vue')
    },
    {
        path: '/info',
        name: 'InfoPage',
        meta: {
            title: 'Информация',
            layout: 'main-layout'
        },
        component: () =>
            import ('@/pages/InfoPage.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Вход',
            layout: 'auth-layout'
        },
        component: () =>
            import ('@/pages/LoginPage.vue')
    },
    {
        path: '/registration',
        name: 'registration',
        meta: {
            title: 'Регистрация',
            layout: 'auth-layout'
        },
        component: () =>
            import ('@/pages/RegistrationPage.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//Защита роутеров (если пользователь не зашел он не может на главную и в инфо)
router.beforeEach((to, from, next) => {
    const { accessToken } = localStorage // тут происходит десруктуризация по сути это тож самое что const accessToken = localStorage.accessToken
    if (accessToken || to.name === 'login' || to.name === 'registration') {
        next();
    } else {
        next('/login')
    }
})

export default router
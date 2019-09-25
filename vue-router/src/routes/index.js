import Home from './../components/Home'
import Header from './../components/layouts/Header'
import NotFound from './../components/messages/404'


// lazy load
// const User = require('./../components/user/User')
const User = resolve => {
    require.ensure(['./../components/user/User'],() => {
        resolve(require('./../components/user/User'))
    }, 'user')
}

const UserIndex = resolve => {
    require.ensure(['./../components/user/User'],() => {
        resolve(require('./../components/user/Index'))
    }, 'user')
}

const UserDetail = resolve => {
    require.ensure(['./../components/user/User'],() => {
        resolve(require('./../components/user/UserDetail'))
    }, 'user')
}

const UserEdit = resolve => {
    require.ensure(['./../components/user/User'],() => {
        resolve(require('./../components/user/UserEdit'))
    }, 'user')
}

export const routes = [
    {
        path: '/',
        name: 'homePage',
        components: {
            default: Home,
            'header': Header
        }
    },
    {
        path: '/user',
        name: 'user',
        component: User,
        children: [
            // list
            {
                path: '',
                component: UserIndex
            },
            // detail
            {
                path: ':id',
                name: 'userDetail',
                component: UserDetail
            },
            // edit
            {
                path: ':id/edit',
                name: 'userEdit',
                component: UserEdit,
            }
        ]
    },
    {
        path: '/test-redirect',
        redirect: {name: 'homePage'}
    },
    {
        path: '/404',
        name: 'notFound',
        component: NotFound
    },
    {
        path: '*', redirect: '/404'
    }
]
import Home from './../components/Home'
import User from './../components/user/User'
import UserIndex from './../components/user/Index'
import UserDetail from './../components/user/UserDetail'
import UserEdit from './../components/user/UserEdit'
import Header from './../components/layouts/Header'
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
                component: UserEdit
            }
        ]
    },
    {
        path: '/test-redirect',
        redirect: {name: 'homePage'}
    }
]
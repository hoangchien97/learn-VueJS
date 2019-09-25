import Home from './../components/Home'
import User from './../components/user/User'
import UserIndex from './../components/user/Index'
import UserDetail from './../components/user/UserDetail'
import UserEdit from './../components/user/UserEdit'
export const routes = [
    {
        path: '/',
        name: 'homePage',
        component: Home
    },
    {
        path: '/user',
        name: 'user',
        component: User,
        children: [
            // list
            {
                path: '',
                name: 'index',
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
]
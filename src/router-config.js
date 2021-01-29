import React from 'react'

import Task from './pages/TaskPage'
import SignIn from './pages/SigninPage'
import SignUp from './pages/SignUpPage'
import User from './pages/UserPage'
import NotFound from './pages/NotFoundPage'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Task />
    },
    {
        path: '/task',
        exact: true,
        main: () => <Task />
    },
    {
        path: '/login',
        exact: true,
        main: () => <SignIn />
    },
    {
        path: '/register',
        exact: true,
        main: () => <SignUp />
    },
    {
        path: '/user',
        exact: true,
        main: () => <User />
    },
    {
        main: () => <NotFound />
    },
]

export default routes
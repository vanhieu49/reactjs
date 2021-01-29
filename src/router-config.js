import React from 'react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/about',
        exact: true,
        main: () => <AboutPage />
    },
    {
        path: '/blog',
        exact: true,
        main: () => <BlogPage />
    },
    {
        path: '/login',
        exact: true,
        main: () => <LoginPage />
    },
    {
        path:'',
        exact: true,
        main: () => <NotFoundPage />
    }
]
export default routes;
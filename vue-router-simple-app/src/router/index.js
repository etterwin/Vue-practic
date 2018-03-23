import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/blog'
import Brands from '@/components/brands'
import Contacts from '@/components/contacts'
import Projects from '@/components/projects'
import Post from '@/components/post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Blog
    },
    {
      path: '/brands',
      component: Brands
    },
    {
      path: '/contacts',
      component: Contacts
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post
    }
  ]
})

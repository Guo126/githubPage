import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyWorld from '@/components/items/MyWorld'
import ContactMe from '@/components/items/ContactMe'
import MyZoom from '@/components/items/MyZoom'
import MyStory from '@/components/items/Story/readStory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/myworld',
      name: 'MyWorld',
      component: MyWorld
    },
    {
      path: '/contactme',
      name: 'ContactMe',
      component: ContactMe
    },
    {
      path: '/myzoom',
      name: 'MyZoom',
      component: MyZoom
    },
    {
      path: '/readStory',
      name: 'MyStory',
      component: MyStory
    },
  ]
})

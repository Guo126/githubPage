import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: ()=>import('@/components/HelloWorld')
    },
    {
      path: '/myworld',
      name: 'MyWorld',
      component: ()=>import('@/components/items/MyWorld')
    },
    {
      path: '/myDays',
      name: 'myDays',
      component:()=>import('@/components/items/Days/index'),
      children:[
        {
          path:'/',
          component:()=>import('@/components/items/Days/movie/index')
        },
        {
          path: '/myDays/music',
          name:'music',
          component:()=>import('@/components/items/Days/music/index')
        },
        {
          path: '/myDays/movie',
          name:'movie',
          component:()=>import('@/components/items/Days/movie/index')
        },
        {
          path: '/myDays/book',
          name:'book',
          component:()=>import('@/components/items/Days/book/index')
        }
      ]
    },
    {
      path: '/colorfulLife',
      name: 'colorfulLife',
      component: ()=>import('@/components/items/colorfulLife'),
      children:[
        {
          path: '/colorfulLife/list',
          name:'list',
          component:()=>import('@/components/items/Shows/list')
        },
        {
          path: '/colorfulLife/cardHover',
          name:'cardHover',
          component:()=>import('@/components/items/Shows/cardHover')
        },
        {
          path: '/colorfulLife/loading',
          name:'loading',
          component:()=>import('@/components/items/Shows/Loading')
        },
        {
          path: '/colorfulLife/colorBg',
          name:'colorBg',
          component:()=>import('@/components/items/Shows/colorBg')
        },
        {
          path: '/colorfulLife/coolSearch',
          name:'CoolSearch',
          component:()=>import('@/components/items/Shows/coolSearch')
        },
        {
          path: '/colorfulLife/getColor',
          name:'GetColor',
          component:()=>import('@/components/items/Shows/getColors/getColors')
        }
      ]
    },
    {
      path: '/myzoom',
      name: 'MyZoom',
      component: ()=>import('@/components/items/MyZoom')
    },
    {
      path: '/readStory',
      name: 'MyStory',
      component: ()=>import('@/components/items/Story/readStory')
    },
    {
      path: '/me',
      name: 'me',
      component: ()=>import('@/components/items/me')
    }
   
  ]
})

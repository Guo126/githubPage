import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyWorld from '@/components/items/MyWorld'
import colorfulLife from '@/components/items/colorfulLife'
import MyZoom from '@/components/items/MyZoom'
import MyStory from '@/components/items/Story/readStory'
import CardHover from '@/components/items/Shows/cardHover'
import List from '@/components/items/Shows/list'
import Loading from '@/components/items/Shows/Loading'
import ColorBg from '@/components/items/Shows/colorBg'
import CoolSearch from '@/components/items/Shows/coolSearch'
import GetColor from '@/components/items/Shows/getColors/getColors'

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
      path: '/colorfulLife',
      name: 'colorfulLife',
      component: colorfulLife,
      children:[
        {
          path: '/colorfulLife/list',
          name:'list',
          component:List
        },
        {
          path: '/colorfulLife/cardHover',
          name:'cardHover',
          component:CardHover
        },
        {
          path: '/colorfulLife/loading',
          name:'loading',
          component:Loading
        },
        {
          path: '/colorfulLife/colorBg',
          name:'colorBg',
          component:ColorBg
        },
        {
          path: '/colorfulLife/coolSearch',
          name:'CoolSearch',
          component:CoolSearch
        },
        {
          path: '/colorfulLife/getColor',
          name:'GetColor',
          component:GetColor
        }
      ]
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

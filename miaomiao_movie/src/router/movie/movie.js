export default {
  path: '/movie',
  component : ()=>import('@/components/Movie/Movie'),
  children:[
    {
      path:'city',
      component : ()=>import('@/components/City/City')
    },
    {
      path:'playing',
      component : ()=>import('@/components/Playing/Playing')
    },
    {
      path:'comingsoon',
      component : ()=>import('@/components/Comingsoon/Comingsoon')
    },
    {
      path:'search',
      component : ()=>import('@/components/Search/Search')
    },
    {
      path:'/movie',
      redirect:'/movie/playing'
    }
  ]
}

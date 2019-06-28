import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie/movie'
import cinemaRouter from './cinema/cinema'
import mineRouter from './mine/mine'

Vue.use(Router);

export default new Router({
  routes: [
    movieRouter,
    cinemaRouter,
    mineRouter,
    {
      path:'/*',
      redirect:'/movie'
    }
  ]
})

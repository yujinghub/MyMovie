<template>
  <div>
    <div id="main">
      <Header title="影院"/>
      <div id="content">
        <div class="cinema_menu">
          <div class="city_switch">
            金城<i class="iconfont icon-lower-triangle"></i>
          </div>

          <div class="city_switch">
            品牌<i class="iconfont icon-lower-triangle"></i>
          </div>

          <div class="city_switch">
            特色<i class="iconfont icon-lower-triangle"></i>
          </div>

        </div>
      </div>
      <Clist/>
      <TabBar />
    </div>
  </div>
</template>

<script>
  import Header from '../Header/Header'
  import TabBar from '../TabBar/TabBar'
  import Clist from '../Clist/index'
  export default {
    name: "Cinema",
    components:{
      Header,
      TabBar,
      Clist
    }
  }
</script>

<style scoped>
  #content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>

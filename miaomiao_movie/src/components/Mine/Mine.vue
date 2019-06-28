<template>
  <div id="main">
    <Header title="我的电影"/>
    <div id="content">
      <Login/>
    </div>
    <TabBar />
  </div>
</template>

<script>
  import Header from '../Header/Header'
  import TabBar from '../TabBar/TabBar'
  import Login from '../Login/index'
  export default {
    name: "Movie",
    components:{
      Header,
      TabBar,
      Login
    }
  }
</script>

<style scoped>

</style>

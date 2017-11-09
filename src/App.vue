<template>
  <div class="layout">
    <div class="header">
      <nav-bar></nav-bar>
    </div>
    <div class="content">
      <div class="content-left">
        <slider-bar></slider-bar>
      </div>
      <div class="content-right">
        <div class="breadcrumb">
          <breadcrumd>萨达</breadcrumd>
        </div>
        <div class="body">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="footer">
      Muse-UI ©2017 Created by Muse-UI
    </div>
  </div>
</template>
<script>
  import NavBar from '@/components/NavBar'
  import SliderBar from '@/components/SliderBar'
  import Breadcrumd from '@/components/Breadcrumd'
  export default {
    data () {
      return {
      }
    },
    methods: {

    },
    components:{
      NavBar,
      SliderBar,
      Breadcrumd
    }
  }
</script>
<style scoped>
  .layout{
    background-color: rgb(236, 236, 236);
  }

  .header{
    height: 55px;
    background-color: #7e57c2;
  }



  .content{
    overflow: hidden;
    display: flex;
  }

  .content-left{
   flex: 2;
    float: left;
    background-color: white;
    margin-bottom: -4000px;
    padding-bottom: 4000px;
  }

  .content-right{
    flex: 8;
    display: inline-block;
    float: right;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0)
  }

  .breadcrumb{
    margin: 10px 0;
  }

  .body{
    background-color: white;
    border-radius: 5px;
    min-height: 500px;
  }

  .footer{
    padding: 20px 0;
    text-align: center;
    background-color: #734DBA;
  }
</style>

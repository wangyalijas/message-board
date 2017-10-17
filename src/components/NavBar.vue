<template>
  <el-row :gutter="10">
    <el-col :xs="24" :sm="6" :md="4" :lg="3">
      <router-link to="/" class="grid-content grid-nav-list">首页</router-link>
    </el-col>

    <el-col :xs="24" :sm="6" :md="4" :lg="3">
      <div class="grid-content  grid-nav-list">消息</div>
    </el-col>

    <el-col :xs="24" :sm="6" :md="8" :lg="15">
      <div class="grid-content"></div>
    </el-col>

    <el-col :xs="24" :sm="6" :md="4" :lg="3">
      <router-link to="/auth/login" class="grid-content grid-nav-list">登录</router-link>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        data() {
            return {};
        },
        computed: {},
        watch: {},
        methods: {},
        created() {
            console.log('Component created');
        },
        mounted() {
            console.log('Component mounted');
        },
      components: {
      }
    }
</script>

<style scoped>
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    width: 100%;
    height: 100%;
    min-height: 55px;
  }
  .grid-nav-list{
    font-size: 24px;
    text-align: center;
    line-height: 55px;
  }
  .active{
    color: mediumpurple;
    background-color: pink;
  }
</style>

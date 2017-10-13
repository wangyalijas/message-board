<template>
    <mu-appbar >
      <template slot="left">
        <mu-icon-button icon="home"/>
        <mu-icon-button icon="message"/>
      </template>


      <template slot="right">
        <mu-raised-button class="demo-raised-button" label="登录" icon="folder" secondary/>
      </template>
    </mu-appbar>
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
  >>> .left {
    color: #42b983;
    height: 80%;
  }
  .mu-appbar .mu-icon-button{
    color: white;
  }
</style>

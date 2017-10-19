<template>
  <div>
    <div class="text-field">
      <mu-text-field hintText="输入昵称即可登陆"/>
      <mu-icon value="done" color="#734DBA"/>
    </div>
    <mu-raised-button label="登陆" class="demo-raised-button position-middle" primary/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '默认文字'
      }
    },
    computed: {},
    watch: {},
    methods: {},
    created() {
      console.log('Component created');
    },
    mounted() {
      console.log('Component mounted');
    }
  }
</script>

<style scoped>
  .text-field{
    width: 100%;
    height: 100%;
  }
  >>>.mu-text-field {
    margin-top: 180px;
    margin-left: 40%;
  }
  .position-middle{
    margin-left: 45%;
  }
</style>

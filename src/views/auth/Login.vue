<template>
  <div class="text-field">
    <mu-text-field hintText="提示文字"/><br/>
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
</style>

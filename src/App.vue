<template>
  <nav-bar></nav-bar>
</template>

<script>
  import NavBar from '@/components/NavBar'
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
      components:{
        NavBar
      }
    }
</script>

<style scoped>

</style>

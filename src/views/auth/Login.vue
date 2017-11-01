<template>
  <div>
    <div class="text-field">
      <mu-text-field hintText="输入昵称即可登陆" v-model="username"/>
      <template v-if="username.length">
        <mu-icon value="done" color="#734DBA"/>
      </template>
    </div>
    <mu-raised-button label="登陆" class="demo-raised-button position-middle" primary @click="handleSubmit"/>
  </div>
</template>

<script>
  import authService from '@/services/authService'
  export default {
    data() {
      return {
        username: ''
      }
    },
    computed: {},
    watch: {},
    methods: {
      handleSubmit() {
        let username = this.username;
        authService.login({username})
          .then(response => {
          console.log(response);
        });
      }
    },
    created() {
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .text-field {
    width: 100%;
    height: 100%;
  }

  >>> .mu-text-field {
    margin-top: 180px;
    margin-left: 40%;
  }

  .position-middle {
    margin-left: 45%;
  }
</style>

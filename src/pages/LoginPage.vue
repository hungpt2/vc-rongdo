<template>
    <div class="container">
        <div class="row ">
            <div class="col-sm-12">
                <ul class="breadcrumb">
                    <li><a href="/">Trang chủ</a></li>
                    <li class="active">Đăng nhập</li>
                </ul>
            </div>
        </div>
        <div class="col-sm-6 col-sm-offset-3">
            <login-form redirect="true"></login-form>
        </div>
    </div>
</template>

<script>
  import LoginForm from '@/forms/LoginForm'

  import { mapGetters } from 'vuex'
  // TODO: Check if user is logged in and redirect to homepage
  export default {
    name: 'login-page',
    components: {
      LoginForm
    },
    computed: mapGetters([
      'user',
      'isLoggedIn'
    ]),
    beforeMount () {
      if (this.isLoggedIn) {
        this.$router.push('/')
      }
    }
  }
</script>

<style>
</style>

<template>
    <div class="container">
        <div class="row ">
            <div class="col-sm-12">
                <ul class="breadcrumb">
                    <li><a href="#">Trang chủ</a></li>
                    <li class="active">Đăng nhập</li>
                </ul>
            </div>
        </div>
        <div class="col-sm-8 col-sm-offset-2">
            <div class=" bs-component">
                <register-form></register-form>
            </div>
        </div>
    </div>
</template>

<script>
  import VueRecaptcha from 'vue-recaptcha'
  import RegisterForm from '@/forms/RegisterForm'

  import { mapGetters } from 'vuex'
  export default {
    name: 'register-page',
    components: {
      VueRecaptcha,
      RegisterForm
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

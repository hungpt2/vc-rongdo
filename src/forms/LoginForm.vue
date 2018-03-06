<template>
    <div class="well">
        <div class="row">
            <div class="col-md-12 text-center">
                <h4 class="text-danger">Đăng nhập</h4>
                <h5>Đăng nhập để quản lý đơn hàng</h5>
            </div>
        </div>
        <form role="form" autocomplete="on" @submit.prevent="doLogin()">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">

                        <input type="text" class="form-control" name="email" value="" required title="Cần điền địa chỉ email" placeholder="Nhập địa chỉ email" v-model="userInfo.email">
                        <span class="help-block"></span>
                    </div>
                    <div class="form-group">

                        <input type="password" class="form-control" name="password" placeholder="Nhập mật khẩu" value="" required="" title="Cần điển mật khẩu" v-model="userInfo.password">
                        <span class="help-block"></span>
                    </div>
                </div>
            </div>
            <div class="row" v-if="loginError">
              <div class="col-md-12 error-color">
                {{loginError}}
              </div>
            </div>
            <div class="row outer-t-small">
                <div class="col-md-12">
                    <button type="submit" value="login" name="submit" class="btn btn-danger btn-block">
                      <wave-spinner v-if="loggingIn"></wave-spinner>
                      <span v-if="!loggingIn">Đăng nhập</span>
                    </button>
                </div>
            </div>
        </form>
        <div class="row">
            <div class="col-md-12 footer-login text-center">
                <div class="checkbox pull-left">
                    <label>
                        <input type="checkbox"> Nhớ mật khẩu
                    </label>
                </div>
                <a href="#" class="pull-right">Quên mật khẩu?</a>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Authentication from '@/blocks/api/authentication'
  import WaveSpinner from '@/components/spinners/WaveSpinner'

  export default {
    name: 'login-form',
    data () {
      return {
        userInfo: {
          email: '',
          password: ''
        },
        error: '',
        loggingIn: false
      }
    },
    props: ['redirect'],
    mixins: [Authentication],
    computed: mapGetters([
      'loginError'
    ]),
    components: {
      WaveSpinner
    },
    methods: {
      doLogin () {
        let vm = this
        this.loggingIn = true
        this.$validator.validateAll().then(valid => {
          if (valid) {
            if (this.redirect) {
              this.loginApi(vm.userInfo, (response) => {
                this.loggingIn = false
                this.$router.push('/')
              })
            } else {
              this.loginApi(vm.userInfo, (response) => {
                this.loggingIn = false
              })
            }
          } else {
            // TODO: Handle failed validation
            this.loggingIn = false
          }
        })
      }
    }
  }
</script>

<style>
</style>

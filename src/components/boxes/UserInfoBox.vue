<template>
    <div class="well">
        <div class="row">
            <div class="col-md-12 text-center">
                <h4 class="text-danger">Tài khoản</h4>
                <h5>{{user.fullname}}</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 ">
                <ul>
                    <li><router-link to="/quanly/tao-don-hang-nhanh">Tạo đơn hàng nhanh</router-link></li>
                    <li><router-link to="/quanly/danh-sach-don-hang">Quản lý đơn hàng</router-link></li>
                    <li><a href="#">Quản lý tiền thu hộ</a></li>
                    <li><a href="#">Thông tin tài khoản</a></li>

                </ul>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 footer-login text-center">
                <a @click="doLogout()" class="pull-right cursor-pointer">Thoát tài khoản</a>
            </div>
        </div>
    </div>
</template>

<style>

</style>

<script>
  import Authentication from '@/blocks/api/authentication'
  // TODO: Add links to other pages
  export default {
    name: 'user-info-box',
    props: [
      'user'
    ],
    mixins: [Authentication],
    methods: {
      doLogout () {
        this.logoutApi()
      }
    }
  }
</script>

<template>
    <div>
        <nav class="navbar-top navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="col-sm-12">
                    <div class="navbar-header pull-left">
                        <div class="nav">Hotline: <b class="text-danger">0985 20 20 20</b></div>
                    </div>

                    <!-- I don't want it apart of the collapsible portion -->
                    <div class="navbar-header pull-right">

                            <ul class="pull-left">
                                <transition-group name="slide-fade" mode="in-out">
                                <li v-if="!loggedIn" key="1"><router-link to="/dangky">Đăng ký</router-link></li>
                                <li v-if="!loggedIn" key="2"><router-link to="/dangnhap">Đăng nhập</router-link></li>
                                <li v-if="user && user.id" key="3">
                                    <dropdown>
                                        <a class="dropdown-toggle cursor-pointer" type="button" data-role="trigger">{{user.fullname}}
                                            <span class="caret"></span></a>
                                        <template slot="dropdown" class="dropdown-menu">
                                            <router-link to="/quanly/tao-don-hang-nhanh" tag="li" exact-active-class="active">
                                              <a>
                                                <i class="fa fa-tachometer" aria-hidden="true"></i> Tạo đơn hàng nhanh
                                              </a> 
                                            </router-link>
                                            <router-link to="/quanly/danh-sach-don-hang" tag="li" exact-active-class="active">
                                              <a>
                                                <i class="fa fa-tachometer" aria-hidden="true"></i> Quản lý đơn hàng
                                              </a> 
                                            </router-link>
                                            <router-link to="/quanly/tien-thu-ho" tag="li" exact-active-class="active">
                                              <a><div><i class="fa fa-money" aria-hidden="true"></i> Quản lý thu tiền hộ</div></a>
                                            </router-link>
                                            <li><a href="#"><i class="fa fa-address-card" aria-hidden="true"></i> Thông tin tài
                                                khoản </a></li>
                                        </template>
                                    </dropdown>
                                </li>
                                <li v-if="user && user.id" key="4"><a class="cursor-pointer" @click="doLogout()"><span v-if="loggingOut"><wave-spinner v-bind:color="'black'"></wave-spinner></span><span v-if="!loggingOut">Thoát tài khoản</span></a></li>
                                </transition-group>
                            </ul>

                    </div>
                </div>
            </div>
        </nav>
        <div class="container container-header text-center">
            <div class="logo col-sm-4"><router-link to="/"><img src="static/img/logo.png" height="80"></router-link></div>
            <div class="hotline col-sm-4"></div>
            <div class="searchmsp col-sm-4">
                <div class="form-group">

                    <div class="input-group">

                        <input type="text" class="form-control" placeholder="Nhập mã đơn hàng">
                        <span class="input-group-btn">
                      <button class="btn btn-danger" type="button">Kiểm tra</button>
                    </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <nav class="navbar navbar-default navbar-embossed" role="navigation">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse"
                            data-target="#navbar-collapse-01">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand text-center" href="#"><span class="glyphicon glyphicon-home"></span></a>
                </div>
                <div class="collapse navbar-collapse" id="navbar-collapse-01">
                    <ul class="nav navbar-nav navbar-left">
                        <li class="active"><a href="#">GIỚI THIỆU</a></li>
                        <li><a href="#">BẢNG GIÁ VẬN CHUYỂN</a></li>
                        <li><a href="#">HƯỚNG DẪN</a></li>
                        <li><a href="#">DỊCH VỤ GIAO HÀNG</a></li>
                        <li><a href="#">QUY ĐỊNH VẬN CHUYỂN</a></li>
                        <li><a href="#">THÔNG BÁO</a></li>
                        <li><a href="#">LIÊN HỆ</a></li>
                    </ul>

                </div><!-- /.navbar-collapse -->
            </nav>
        </div>
    </div>
</template>

<script>
  import {Dropdown} from 'uiv'
  import { mapGetters } from 'vuex'

  import Authentication from '@/blocks/api/authentication'
  import CubeSpinner from '@/components/spinners/CubeSpinner'
  import WaveSpinner from '@/components/spinners/WaveSpinner'

  // TODO: Add links to other pages
  export default {
    name: 'pale-header',
    data () {
      return {
        get loggedIn () {
          return localStorage.getItem('token')
        },
        loggingOut: false
      }
    },
    beforeCreate () {
      this.loggedIn = localStorage.getItem('token')
    },
    mixins: [Authentication],
    components: {
      Dropdown,
      CubeSpinner,
      WaveSpinner
    },
    computed: mapGetters([
      'user',
      'isLoggedIn'
    ]),
    methods: {
      doLogout () {
        this.loggingOut = true
        this.logoutApi(() => {
          this.loggingOut = false
          this.$router.push('/')
        })
      }
    }
  }
</script scoped>

<style>
</style>

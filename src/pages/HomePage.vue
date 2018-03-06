<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-8">
                    <carousel :indicators="true" :controls="true" :interval="0">
                        <slide>
                            <img src="static/img/slider1.jpg" alt="Ship1">
                        </slide>
                        <slide>
                            <img src="static/img/slider2.jpg" alt="Ship2">
                        </slide>
                        <slide>
                            <img src="static/img/slider3.jpg" alt="Ship3">
                        </slide>
                    </carousel>
                </div>

                <div class="col-sm-4">
                    <transition name="fade" mode="out-in">
                        <div class="well spinner-container" v-if="loading">
                            <cube-spinner></cube-spinner>
                        </div>
                        <login-form v-if="(!user || !user.id) && !loading"></login-form>
                        <user-info-box v-if="user && user.id && !loading" v-bind:user="user"></user-info-box>
                    </transition>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">

                <div class="col-sm-8">
                    <h4>TÍNH PHÍ <span class="text-danger">VẬN CHUYỂN NHANH</span></h4>
                    <div class="well">
                        <form class="form-horizontal">
                            <fieldset>

                                <div class="form-group">
                                    <label for="select" class="col-lg-2 control-label">Nơi nhận hàng</label>
                                    <div class="col-lg-10">
                                        <div class="col-sm-6">
                                            <select class="form-control" id="select">
                                                <option value>Chọn thành phố</option>
                                                <option value="1">Hà Nội</option>
                                                <option value="2">TP. Hồ Chí Minh</option>
                                            </select>

                                        </div>

                                        <div class="col-sm-6">
                                            <select class="form-control" id="select">
                                                <option>Chọn quận</option>
                                                <option>Ba Đình</option>
                                                <option>Cầu Giấy</option>
                                                <option>Hoàn Kiếm</option>
                                                <option>Hoàng Mai</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword" class="col-lg-2 control-label">Nơi giao hàng</label>
                                    <div class="col-lg-10">
                                        <div class="col-sm-6">
                                            <select class="form-control" id="select">
                                                <option value>Chọn thành phố</option>
                                                <option value="1">Hà Nội</option>
                                                <option value="2">TP. Hồ Chí Minh</option>
                                            </select>

                                        </div>

                                        <div class="col-sm-6">
                                            <select class="form-control" id="select">
                                                <option>Chọn quận</option>
                                                <option>Ba Đình</option>
                                                <option>Cầu Giấy</option>
                                                <option>Hoàn Kiếm</option>
                                                <option>Hoàng Mai</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="textArea" class="col-lg-2 control-label">Khối lượng(g)</label>
                                    <div class="col-lg-10">
                                        <div class="col-sm-12">
                                            <input type="number" class="form-control" id="inputDefault"
                                                   placeholder="Nhập khối lượng(g)">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="textArea" class="col-lg-2 control-label">Kích thước</label>
                                    <div class="col-lg-10">
                                        <div class="col-sm-4">
                                            <input type="number" class="form-control " id="inputDefault"
                                                   placeholder="Dài(cm)">
                                        </div>
                                        <div class="col-sm-4">
                                            <input type="number" class="form-control " id="inputDefault"
                                                   placeholder="Rộng(cm)">
                                        </div>
                                        <div class="col-sm-4">
                                            <input type="number" class="form-control " id="inputDefault"
                                                   placeholder="Cao(cm)">
                                        </div>
                                    </div>
                                </div>

                            </fieldset>
                        </form>
                        <div class="row">
                            <div class="col-lg-offset-3 col-lg-6">
                                <button type="submit" value="login" name="submit" class="btn btn-default btn-block">Tính
                                    phí nhanh
                                </button>
                            </div>
                        </div>
                        <br>

                    </div>
                </div>
                <div class="col-sm-4">
                    <h4>TẠO <span class="text-danger">ĐƠN HÀNG NHANH</span></h4>
                    <div class="well">

                        <div class="row">
                            <div class="col-md-12 text-center">

                                <img src="static/img/shipnhanh.png">
                            </div>
                        </div>
                        <form role="form">


                            <div class="row text-center">
                                <div class="col-sm-12">
                                    <button type="submit" value="login" name="submit" class="btn btn-success btn-block">
                                        Tạo đơn hàng nhanh
                                    </button>
                                </div>

                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {Carousel, Slide} from 'uiv'
  import { mapGetters } from 'vuex'

  import User from '@/blocks/api/user'

  import LoginForm from '@/forms/LoginForm'
  import UserInfoBox from '@/components/boxes/UserInfoBox'

  import CubeSpinner from '@/components/spinners/CubeSpinner'

  export default {
    name: 'home-page',
    components: {
      Carousel,
      Slide,
      LoginForm,
      UserInfoBox,
      CubeSpinner
    },
    mixins: [User],
    computed: mapGetters([
      'user',
      'isLoggedIn'
    ]),
    data () {
      return {
        loading: false
      }
    },
    created () {
      this.loading = true
    },
    mounted () {
      if (this.isLoggedIn) {
        this.getUser(() => {
          this.loading = false
        })
      } else {
        this.loading = false
      }
    }
  }
</script>

<style scoped>
    .spinner-container {
        min-height: 304px;
        position: relative;
    }
    .spinner-container > div {
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%) rotateZ(45deg);
        position: absolute;
    }
</style>

<template>
    <div id="main-app">
        <div class="container">
            <div class="row ">
                <div class="col-sm-12">
                    <div class="col-sm-3 col-xs-4 pull-right">
                        <router-link to="tao-don-hang-nhanh" class="btn btn-info btn-sm pull-right"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tạo đơn hàng</router-link>
                    </div>
                    <div class="form-group col-sm-3 col-xs-8 pull-right">
                        <div class="input-group">
                            <input type="text" class="form-control input-sm" placeholder="Tìm kiếm đơn hàng">
                            <span class="input-group-btn">
                                <button class="btn btn-default btn-sm" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="taodonhangnhanh">
                <side-nav></side-nav>
                <transition name="slide-fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
  import SideNav from '@/components/SideNav'
  import { mapGetters } from 'vuex'
  export default {
    name: 'main-app',
    components: {
      SideNav
    },
    computed: mapGetters([
      'isLoggedIn',
      'token'
    ]),
    beforeMount () {
      if (!this.isLoggedIn) {
        this.$router.push('/')
      }
    }
  }
</script>

<style>
    .u-force-text-left {
        text-align: left !important;
    }
</style>

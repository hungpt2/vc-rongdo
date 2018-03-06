<template>
  <div class="main-content" id="importexcel">
    <div class="col-sm-12">
      <h4 class="pull-left">QUẢN LÝ ĐỊA CHỈ LẤY HÀNG</h4>
      <div class="col-sm-3 col-xs-4 pull-right">
        <a href="#themdiachilayhang" class="btn btn-danger btn-sm pull-right">
          <i class="fa fa-plus-circle" aria-hidden="true"></i> Thêm địa chi lấy hàng</a>
      </div>
    </div>
    <div class="col-xs-12">
      <cube-spinner v-if="loading" style="height: 40px; margin-top: 15px"></cube-spinner>
    </div>
    <transition-group name="list-complete">
      <ware-house class="list-complete-item" v-for="warehouse in warehouses" v-if="warehouse.id" v-bind:key="warehouse.id" v-bind:data="warehouse"></ware-house>
      <div class="col-xs-12" id="themdiachilayhang" v-bind:key="'create'" style="padding-top: 50px">
        <ware-house-create class="list-complete-item" v-on:callback="getWarehouse()"></ware-house-create>
      </div>
    </transition-group>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WareHouseApi from '@/blocks/api/warehouse'
import Location from '@/blocks/api/location'
import WareHouse from './WareHouse'
import WareHouseCreate from './WareHouseCreate'
import CubeSpinner from '@/components/spinners/CubeSpinner'

export default {
  name: 'ware-house-page',
  components: {
    WareHouse,
    WareHouseCreate,
    CubeSpinner
  },
  mixins: [WareHouseApi, Location],
  computed: mapGetters([
    'isLoggedIn',
    'token',
    'warehouses'
  ]),
  data () {
    return {
      loading: false
    }
  },
  beforeMount () {
    if (!this.isLoggedIn) {
      this.$router.push('/')
    } else {
      this.getLocation()
      this.loading = true
      this.getWarehouse(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style>

</style>

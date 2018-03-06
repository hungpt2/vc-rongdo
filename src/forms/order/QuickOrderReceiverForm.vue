<template>
  <div class="col-sm-6 col-xs-12">
    <h3>
      <span class="red">2</span>NGƯỜI NHẬN</h3>
    <form class="form-horizontal">
      <fieldset>
        <div class="form-group">
          <label for="inputName" class="col-sm-4 control-label">Họ tên
            <span style="color:red;">(*)</span>
          </label>
          <div class="col-sm-8 col-xs-12">
            <input type="name" class="form-control input-sm" id="inputName" placeholder="Điền họ tên" v-model="orderData.user_receive_name" @change="updateQuickOrder()">
          </div>
        </div>

        <div class="form-group">
          <label for="inputPhonenumber" class="col-sm-4 control-label">Số điện thoại
            <span style="color:red;">(*)</span>
          </label>
          <div class="col-sm-8 col-xs-12">
            <input type="number" class="form-control input-sm" id="inputPhonenumber" placeholder="Điền số điện thoại" v-model="orderData.user_receive_phone_number" @change="updateQuickOrder()">
          </div>
        </div>
        <div class="form-group">
          <label for="inputAdress" class="col-sm-4 control-label">Địa chỉ
            <span style="color:red;">(*)</span>
          </label>
          <div class="col-sm-8 col-xs-12">
            <input type="text" class="form-control input-sm" id="inputAdress" placeholder="Số nhà, đường xá ..." v-model="orderData.user_receive_address" @change="updateQuickOrder()">
          </div>
        </div>
        <div class="form-group">
          <label for="select" class="col-sm-4 control-label">Thành phố
            <span style="color:red;">(*)</span>
          </label>
          <div class="col-sm-8">
            <select class="form-control input-sm" id="inputCity" v-model="orderData.province" @change="updateLocation()">
                <option v-for="province in cityList" v-bind:key="province.id" v-bind:value="province" v-on:click="resetLocation('province', province)">{{province.name}}</option>
              </select>
          </div>
        </div>
        <div class="form-group">
          <label for="select" class="col-sm-4 control-label">Quận/Huyện
            <span style="color:red;">(*)</span>
          </label>
          <div class="col-sm-8">
            <select class="form-control input-sm" id="inputDistrict" v-model="orderData.district" v-if="orderData.province" @change="updateLocation()">
              <option v-for="district in orderData.province.districts" v-bind:key="district.id" v-bind:value="district" v-on:click="resetLocation('district', district)">{{district.name}}</option>
            </select>
          </div>
        </div>
        <!-- <div class="form-group">
          <label for="select" class="col-sm-4 control-label">Phường/Xã
            <span style="color:red;">(*)</span>
          </label>
          <div class="col-sm-8">
            <select class="form-control input-sm" id="inputVillage" v-model="orderData.ward" v-if="orderData.district" @change="updateLocation()">
              <option v-for="ward in orderData.district.wards" v-bind:key="ward.id" v-bind:value="ward">{{ward.name}}</option>
            </select>
          </div>
        </div> -->
      </fieldset>
    </form>

  </div>
</template>
<script>
import {
  mapGetters
} from 'vuex'
import Location from '@/blocks/api/location'

export default {
  name: 'quick-order-receiver-form',
  mixins: [Location],
  computed: mapGetters([
    'cityList',
    'quickOrder'
  ]),
  data () {
    return {
      orderData: {
        user_receive_name: '',
        user_receive_phone_number: '',
        user_receive_address: '',
        province_id: 0,
        district_id: 0,
        ward_id: 0,
        province: {},
        district: {},
        ward: {}
      }
    }
  },
  beforeMount () {
    this.getLocation()
  },
  mounted () {
    this.orderData.user_receive_name = this.quickOrder.user_receive_name
    this.orderData.user_receive_phone_number = this.quickOrder.user_receive_phone_number
    this.orderData.user_receive_address = this.quickOrder.user_receive_address
    this.orderData.province_id = this.quickOrder.province_id
    this.orderData.district_id = this.quickOrder.district_id
    this.orderData.ward_id = this.quickOrder.ward_id
  },
  methods: {
    resetLocation (type, data) {
      console.log(data)
      let vm = this
      switch (type) {
        case 'province':
          vm.orderData.province = data
          vm.orderData.district = {}
          vm.orderData.ward = {}
          vm.locationError.province = false
          break
        case 'district':
          vm.orderData.district = data
          vm.orderData.ward = {}
          break
      }
    },
    updateLocation () {
      this.orderData.province_id = this.orderData.province.id || ''
      this.orderData.district_id = this.orderData.district.id || ''
      this.orderData.ward_id = this.orderData.ward.id || ''
      this.updateQuickOrder()
    },
    updateQuickOrder () {
      this.$store.commit('SET_QUICK_ORDER', this.orderData)
    }
  }
}
</script>
<style>

</style>

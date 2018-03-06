<template>
  <div class="col-sm-12">
    <div class="well">
      <h3 class="red">Thêm kho mới
        <a v-on:click="doAddWarehouse()" class="btn btn-success btn-sm pull-right">
          <i class="fa fa-plus" aria-hidden="true"></i> Thêm kho</a>
      </h3>
      <form class="form-horizontal">
        <fieldset>
          <div class="form-group">
            <label for="inputName" class="col-sm-4 control-label">Tên kho</label>
            <div class="col-sm-6 col-xs-12">
              <input type="text" class="form-control input-sm" placeholder="Tên kho" name="warehouseName" v-validate="'required'" v-model="warehouse.name">
              <span v-show="errors.has('warehouseName')" class="help is-danger">Quý khách vui lòng nhập tên kho</span>
            </div>
          </div>
          <div class="form-group">
            <label for="inputName" class="col-sm-4 control-label">Người liên hệ</label>
            <div class="col-sm-6 col-xs-12">
              <input type="name" class="form-control input-sm" name="warehouseContact" placeholder="Điền họ tên" v-validate="'required'" v-model="warehouse.contact">
              <span v-show="errors.has('warehouseContact')" class="help is-danger">Quý khách vui lòng nhập tên người liên hệ</span>
            </div>
          </div>

          <div class="form-group">
            <label for="inputPhonenumber" class="col-sm-4 control-label">Số điện thoại</label>
            <div class="col-sm-6 col-xs-12">
              <input type="text" class="form-control input-sm" name="warehousePhone" placeholder="Điền số điện thoại" v-validate="'required|numeric'" v-model="warehouse.phone">
              <span v-show="errors.has('warehousePhone')" class="help is-danger">Quý khách vui lòng nhập số điện thoại</span>
            </div>
          </div>
          <div class="form-group">
            <label for="inputAdress" class="col-sm-4 control-label">Địa chỉ</label>
            <div class="col-sm-6 col-xs-12">
              <input type="text" class="form-control input-sm" name="warehouseAddress" placeholder="Số nhà, đường xá ..." v-validate="'required'" v-model="warehouse.address">
              <span v-show="errors.has('warehouseAddress')" class="help is-danger">Quý khách vui lòng nhập địa chỉ</span>
            </div>
          </div>
          <div class="form-group">
            <label for="select" class="col-sm-4 control-label">Thành phố
              <span style="color:red;">(*)</span>
            </label>
            <div class="col-sm-6">
              <select class="form-control input-sm" id="inputCity" v-model="warehouse.province">
                <option v-for="province in cityList" v-bind:key="province.id" v-bind:value="province" v-on:click="resetLocation('province')">{{province.name}}</option>
              </select>
              <span v-show="locationError.province" class="help is-danger">Quý khách vui lòng chọn thành phố</span>
            </div>
          </div>
          <div class="form-group">
            <label for="select" class="col-sm-4 control-label">Quận/Huyện
              <span style="color:red;">(*)</span>
            </label>
            <div class="col-sm-6">
              <select class="form-control input-sm" id="inputDistrict" v-model="warehouse.district" v-if="warehouse.province">
                <option v-for="district in warehouse.province.districts" v-bind:key="district.id" v-bind:value="district" v-on:click="resetLocation('district')">{{district.name}}</option>
              </select>
              <span v-show="locationError.district" class="help is-danger">Quý khách vui lòng chọn quận / huyện</span>
            </div>
          </div>
          <div class="form-group">
            <label for="select" class="col-sm-4 control-label">Phường/Xã
              <span style="color:red;">(*)</span>
            </label>
            <div class="col-sm-6">
              <select class="form-control input-sm" id="inputVillage" v-model="warehouse.ward" v-if="warehouse.district">
                <option v-for="ward in warehouse.district.wards" v-bind:key="ward.id" v-bind:value="ward">{{ward.name}}</option>
              </select>
              <span v-show="locationError.ward" class="help is-danger">Quý khách vui lòng chọn phường / xã</span>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Location from '@/blocks/api/location'
import Warehouse from '@/blocks/api/warehouse'

export default {
  name: 'ware-house-create',
  props: [],
  mixins: [Location, Warehouse],
  data () {
    return {
      warehouse: {
        name: '',
        contact: '',
        phone: '',
        province: {},
        district: {},
        ward: {}
      },
      locationError: {
        province: false,
        district: false,
        ward: false
      }
    }
  },
  computed: mapGetters([
    'locationList',
    'cityList',
    'bankList'
  ]),
  methods: {
    doAddWarehouse () {
      let vm = this
      this.$validator.validateAll().then(valid => {
        let flag = true

        if (!vm.warehouse.province.id) {
          vm.locationError.province = true
          flag = false
        } else {
          vm.locationError.province = false
        }

        if (!vm.warehouse.district.id) {
          vm.locationError.district = true
          flag = false
        } else {
          vm.locationError.district = false
        }

        if (!vm.warehouse.ward.id) {
          vm.locationError.ward = true
          flag = false
        } else {
          vm.locationError.ward = false
        }

        if (flag && valid) {
          this.addWarehouse(vm.warehouse, () => {
            this.clearData()
            this.$emit('callback')
          })
        } else {
          // Handle failed validation
        }
      })
    },
    doRemoveWarehouse () {
      console.log('Remove warehouse')
    },
    resetLocation (type) {
      let vm = this
      switch (type) {
        case 'province':
          vm.warehouse.district = {}
          vm.warehouse.ward = {}
          vm.locationError.province = false
          break
        case 'district':
          vm.warehouse.ward = {}
          break
      }
    },
    clearData () {
      this.warehouse = {
        name: '',
        contact: '',
        phone: '',
        province: {},
        district: {},
        ward: {}
      }
      this.locationError = {
        province: false,
        district: false,
        ward: false
      }
    }
  }
}
</script>

<style>
.help.is-danger {
  color: red;
}
</style>

<template>
  <div class="col-sm-12" v-if="this.data.name">
    <div class="well">
      <h3 class="red">{{this.data.name}}
        <a v-on:click="doRemoveWarehouse()" class="btn btn-warning btn-sm pull-right outer-l-small">
          <i class="fa fa-remove" aria-hidden="true"></i> Xoá kho</a>
        <a v-on:click="doEditWarehouse()" class="btn btn-success btn-sm pull-right">
          <i class="fa fa-plus" aria-hidden="true"></i> Sửa kho</a>
      </h3>
      <form class="form-horizontal">
        <fieldset>
          <div class="form-group">
            <label for="inputName" class="col-sm-4 control-label">Tên kho</label>
            <div class="col-sm-6 col-xs-12" v-if="!this.edit">
              <div class="control-label u-force-text-left">{{this.data.name}}</div>
            </div>
            <div class="col-sm-6 col-xs-12" v-if="this.edit">
              <input type="text" class="form-control input-sm" name="warehouseName" v-validate="'required'" v-model="data.name">
              <span v-show="errors.has('warehouseName')" class="help is-danger">Quý khách vui lòng nhập tên kho</span>
            </div>
          </div>
          <div class="form-group">
            <label for="inputName" class="col-sm-4 control-label">Người liên hệ</label>
            <div class="col-sm-6 col-xs-12" v-if="!this.edit">
              <div class="control-label u-force-text-left">{{this.data.people_contact}}</div>
            </div>
            <div class="col-sm-6 col-xs-12" v-if="this.edit">
              <input type="text" class="form-control input-sm" name="warehouseName" v-validate="'required'" v-model="data.people_contact">
              <span v-show="errors.has('warehouseContact')" class="help is-danger">Quý khách vui lòng nhập tên người liên hệ</span>
            </div>
          </div>

          <div class="form-group">
            <label for="inputPhonenumber" class="col-sm-4 control-label">Số điện thoại</label>
            <div class="col-sm-6 col-xs-12" v-if="!this.edit">
              <div class="control-label u-force-text-left">{{this.data.phone_number}}</div>
            </div>
            <div class="col-sm-6 col-xs-12" v-if="this.edit">
              <input type="text" class="form-control input-sm" name="warehouseName" v-validate="'required'" v-model="data.phone_number">
              <span v-show="errors.has('warehousePhone')" class="help is-danger">Quý khách vui lòng nhập số điện thoại</span>
            </div>
          </div>
          <div class="form-group">
            <label for="inputAdress" class="col-sm-4 control-label">Địa chỉ</label>
            <div class="col-sm-6 col-xs-12" v-if="!this.edit">
              <div class="control-label u-force-text-left">{{this.data.address}}</div>
            </div>
            <div class="col-sm-6 col-xs-12" v-if="this.edit">
              <input type="text" class="form-control input-sm" name="warehouseName" v-validate="'required'" v-model="data.address">
              <span v-show="errors.has('warehouseAddress')" class="help is-danger">Quý khách vui lòng nhập địa chỉ</span>
            </div>
          </div>
          <div class="form-group">
            <label for="select" class="col-sm-4 control-label">Thành phố
              <span v-if="this.edit" style="color:red;">(*)</span>
            </label>
            <div class="col-sm-6" v-if="!this.edit">
              <div class="control-label u-force-text-left">
                {{this.data.province.name}}
              </div>
            </div>
            <div class="col-sm-6" v-if="this.edit">
              <select class="form-control input-sm" id="inputCity" v-model="data.province.id">
                <option v-for="province in cityList" v-bind:key="province.id" v-bind:value="province.id" v-on:click="resetLocation('province')">{{province.name}}</option>
              </select>
              <span v-show="locationError.province" class="help is-danger">Quý khách vui lòng chọn thành phố</span>
            </div>
          </div>
          <div class="form-group">
            <label for="select" class="col-sm-4 control-label">Quận/Huyện
              <span v-if="this.edit" style="color:red;">(*)</span>
            </label>
            <div class="col-sm-6" v-if="!this.edit">
              <div class="control-label u-force-text-left">
                {{this.data.district.name}}
              </div>
            </div>
            <div class="col-sm-6" v-if="this.edit">
              <select class="form-control input-sm" id="inputDistrict" v-model="warehouse.district" v-if="warehouse.province">
                <option v-for="district in warehouse.province.districts" v-bind:key="district.id" v-bind:value="district" v-on:click="resetLocation('district')">{{district.name}}</option>
              </select>
              <span v-show="locationError.district" class="help is-danger">Quý khách vui lòng chọn quận / huyện</span>
            </div>
          </div>
          <div class="form-group">
            <label for="select" class="col-sm-4 control-label">Phường/Xã
              <span v-if="this.edit" style="color:red;">(*)</span>
            </label>
            <div class="col-sm-6" v-if="!this.edit">
              <div class="control-label u-force-text-left">
                {{this.data.ward.name}}
              </div>
            </div>
            <div class="col-sm-6" v-if="this.edit">
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

// TODO: FIX EDIT WAREHOUSE
export default {
  name: 'ware-house',
  props: ['data'],
  mixins: [Location, Warehouse],
  data () {
    return {
      edit: false,
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
    doEditWarehouse () {
      this.edit = !this.edit
    },
    doRemoveWarehouse () {
      // TODO: Confirm deleting ?
      let params = {
        id: this.data.id
      }
      this.removeWarehouse(params)
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

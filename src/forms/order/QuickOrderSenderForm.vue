<template>
    <div class="col-sm-6 col-xs-12" style='border-right:1px solid #ecf0f1'>
        <h3><span class="red">1</span>NGƯỜI GỬI</h3>
        <form class="form-horizontal">
            <fieldset>
                <div class="form-group">
                    <label for="inputName" class="col-sm-4 control-label">Họ tên<span style="color:red;">(*)</span></label>
                    <div class="col-sm-8 col-xs-12">
                        <input disabled type="text" class="form-control input-sm" id="inputName" name="inputName" v-validate="'required'" v-model="user.fullname" placeholder="Điền họ tên">
                        <span v-show="errors.has('inputName')" class="help is-danger">Quý khách vui lòng nhập họ và tên</span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputEmail" class="col-sm-4 control-label">Email<span style="color:red;">(*)</span></label>
                    <div class="col-sm-8 col-xs-12">
                        <input disabled type="text" class="form-control input-sm" id="inputEmail" name="inputEmail" placeholder="Nhập email của bạn" v-model="orderData.user_send_email" @change="updateQuickOrder">
                        <span v-show="errors.has('inputEmail')" class="help is-danger">Quý khách vui lòng nhập địa chỉ email hợp lệ</span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPhonenumber" class="col-sm-4 control-label">Số điện thoại<span style="color:red;">(*)</span></label>
                    <div class="col-sm-8 col-xs-12">
                        <input disabled type="text" class="form-control input-sm" id="inputPhonenumber" placeholder="Điền số điện thoại" v-model="orderData.user_send_phone_number" @change="updateQuickOrder">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAdress" class="col-sm-4 control-label">Địa chỉ<span style="color:red;">(*)</span></label>
                    <div class="col-sm-8 col-xs-12">
                        <select class="form-control" id="inputAddress" name="inputAddress" v-model="orderData.warehouse_id" @change="updateQuickOrder('warehouse')">
                            <option v-for="warehouse in warehouses" v-bind:value="warehouse.id" v-bind:key="warehouse.id">{{'[' + warehouse.name + '] ' + warehouse.address + ', ' + warehouse.ward.name + ', ' + warehouse.district.name + ', ' + warehouse.province.name}}</option>
                        </select>
                    </div>
                </div>
                <router-link to="dia-chi-lay-hang" class="pull-right">Cấu hình thêm địa chỉ lấy hàng</router-link>
                <div class="form-group">
                    <label for="inputCompanyname" class="col-sm-4 control-label">Thông tin tài khoản(Dùng để chuyển tiền thu hộ cho bạn)</label>
                    <div class="col-sm-4 col-xs-6">
                        <input disabled type="text" class="form-control input-sm" id="inputCompanyname" placeholder="Số tài khoản" v-model="user.bank_number">
                    </div>
                    <div class="col-sm-4 col-xs-6">
                        <input disabled type="text" class="form-control input-sm" id="inputCompanyname" placeholder="Tên chủ tài khoản(Không dấu)" v-model="user.bank_username">
                    </div>
                    <div class="col-sm-4 col-xs-6">
                        <select disabled class="form-control input-sm" id="select">
                            <option>{{user.bank_agency}}</option>
                        </select>
                    </div>
                    <div class="col-sm-4 col-xs-6 ">
                        <input disabled type="text" class="form-control input-sm" id="inputCompanyname" placeholder="Chi nhánh ..." v-bind:value="user.bank_agency">
                    </div>
                </div>

            </fieldset>
        </form>

    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import WareHouseApi from '@/blocks/api/warehouse'

  export default {
    name: 'quick-order-sender-form',
    props: ['sender'],
    mixins: [WareHouseApi],
    computed: mapGetters([
      'isLoggedIn',
      'token',
      'warehouses',
      'quickOrder',
      'user'
    ]),
    data () {
      return {
        customErrors: {
          bank: false
        },
        orderData: {
          user_send_email: '',
          user_send_phone_number: '',
          warehouse_id: ''
        }
      }
    },
    beforeMount () {
      this.getWarehouse()
    },
    mounted () {
      this.orderData.user_send_email = this.user.email
      this.orderData.user_send_phone_number = this.quickOrder.user_send_phone_number
      this.orderData.warehouse_id = this.quickOrder.warehouse_id
      this.$store.commit('SET_QUICK_ORDER', this.orderData)
    },
    methods: {
      updateQuickOrder (type) {
        if (type === 'warehouse') {
          let target = this.warehouses.find((warehouse) => {
            return warehouse.id === this.orderData.warehouse_id
          })
          this.orderData.user_send_phone_number = target.phone_number
        }
        this.$store.commit('SET_QUICK_ORDER', this.orderData)
      }
    }
  }
</script>

<style></style>

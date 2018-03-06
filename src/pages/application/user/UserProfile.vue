<template>
  <div class="main-content" id="importexcel">
        <div class="col-sm-12">
          <h4>THÔNG TIN TÀI KHOẢN</h4>
        </div>
        <div class="col-sm-12">
          <div class="col-sm-12" style="border-bottom:1px solid #ecf0f1;border-top:1px solid #ecf0f1">

            <h3><span class="red">1</span>THÔNG TIN CÁ NHÂN:</h3>
            <form class="form-horizontal">
              <fieldset>
                <div class="form-group">
                  <label for="inputName" class="col-sm-4 control-label">Họ tên</label>
                  <div class="col-sm-8 col-xs-12">
                    <input type="name" class="form-control input-sm" id="inputName" v-bind:placeholder="newUser.fullname">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputEmail" class="col-sm-4 control-label">Email</label>
                  <div class="col-sm-8 col-xs-12">
                    <input type="text" class="form-control input-sm" id="inputEmail" v-bind:placeholder="newUser.email">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPhonenumber" class="col-sm-4 control-label">Số điện thoại</label>
                  <div class="col-sm-8 col-xs-12">
                    <input type="number" class="form-control input-sm" id="inputPhonenumber" v-bind:placeholder="newUser.phone_number">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAdress" class="col-sm-4 control-label">Địa chỉ</label>
                  <div class="col-sm-8 col-xs-12">
                    <input type="text" class="form-control input-sm" id="inputAdress" v-bind:placeholder="newUser.address">
                  </div>
                </div>
                <div class="form-group">
                  <label for="select" class="col-sm-4 control-label">Thành phố</label>
                  <div class="col-sm-8">
                    <select class="form-control input-sm" id="select" v-model="userInfo.province_id">
                        <option v-for="province in cityList" v-bind:key="province.id" v-bind:value="province.id">{{province.name}}</option>
                      </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="select" class="col-sm-4 control-label">Quận/Huyện</label>
                  <div class="col-sm-8">
                    <select class="form-control input-sm" id="select" v-model="userInfo.district_id">
                      <option v-for="district in userInfo.province.districts" v-bind:key="district.id" v-bind:value="district.id">{{district.name}}</option>
                    </select>
                  </div>
                </div>
                <!-- <div class="form-group">
                  <label for="select" class="col-sm-4 control-label">Phường/Xã</label>
                  <div class="col-sm-8">
                    <select class="form-control input-sm" id="select">
                        <option>Cống Vị</option>
                        <option>Tây Hồ</option>
                        <option>Hoàn Kiếm</option>
                        <option>Cầu Giấy</option>
                        <option>Hoàng Mai</option>
                      </select>
                  </div>
                </div> -->
                <div class="form-group">
                  <label for="inputCompanyname" class="col-sm-4 control-label">Thông tin tài khoản(Dùng để chuyển tiền thu hộ cho bạn)</label>
                  <div class="col-sm-4 col-xs-6">
                    <input type="text" class="form-control input-sm" id="inputCompanyname" placeholder="Số tài khoản">
                  </div>
                  <div class="col-sm-4 col-xs-6">
                    <input type="text" class="form-control input-sm" id="inputCompanyname" placeholder="Tên chủ tài khoản(Không dấu)">
                  </div>
                  <div class="col-sm-4 col-xs-6">
                    <select class="form-control input-sm" id="select">
                        <option>--Chọn ngân hàng--</option>
                        <option>Cống Vị</option>
                        <option>Tây Hồ</option>
                        <option>Hoàn Kiếm</option>
                        <option>Cầu Giấy</option>
                        <option>Hoàng Mai</option>
                      </select>
                  </div>
                  <div class="col-sm-4 col-xs-6 ">
                    <input type="text" class="form-control input-sm" id="inputCompanyname" placeholder="Chi nhánh ...">
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="col-sm-12 text-center outer-t-medium">
            <button type="submit" class="btn btn-sm btn-danger"> CẬP NHẬT</button>
            <button type="submit" class="btn btn-sm btn-warning"> NHẬP LẠI</button></div>
        </div>
      </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserApi from '@/blocks/api/user'
import Location from '@/blocks/api/location'
import CubeSpinner from '@/components/spinners/CubeSpinner'

export default {
  name: 'user-profile-page',
  components: {
    CubeSpinner
  },
  mixins: [UserApi, Location],
  computed: mapGetters(['isLoggedIn', 'token', 'newUser', 'cityList']),
  data () {
    return {
      loading: false,
      userInfo: {
        province_id: 1,
        district_id: 0,
        ward_id: 0,
        province: {},
        district: {},
        ward: {}
      }
    }
  },
  beforeMount () {
    if (!this.isLoggedIn) {
      this.$router.push('/')
    } else {
      this.getLocation()
    }
  },
  mounted () {
    this.userInfo.province_id = this.newUser.province.id
    this.userInfo.district_id = this.newUser.district.id
    this.userInfo.ward_id = this.newUser.ward.id
    this.userInfo.province = this.cityList.find((province) => { return province.id === this.newUser.province.id })
    this.userInfo.district = this.newUser.district
    this.userInfo.ward = this.newUser.ward
  }
}
</script>

<style>

</style>

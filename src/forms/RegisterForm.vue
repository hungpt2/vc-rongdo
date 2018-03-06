<template>
    <form class="form-horizontal" @submit.prevent="doRegister()">
        <fieldset>
            <legend>Đăng ký thành viên</legend>
            <div class="form-group">
                <label for="inputEmail" class="col-lg-2 control-label">Email<span style="color:red;">(*)</span></label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" id="inputEmail" placeholder="Nhập email của bạn" name="email" v-validate="'required|email'" v-model="userInfo.email">
                    <span v-show="errors.has('email')" class="help is-danger">Quý khách vui lòng nhập địa chỉ email hợp lệ</span>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword" class="col-lg-2 control-label">Mật khẩu<span style="color:red;">(*)</span></label>
                <div class="col-lg-10">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Nhập mật khẩu" name="password" v-validate="'required|min:8'" v-model="userInfo.password">
                    <span v-show="errors.has('password')" class="help is-danger">Quý khách vui lòng nhập mật khẩu hợp lệ (tối thiểu 8 kí tự)</span>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword" class="col-lg-2 control-label">Xác nhận Mật khẩu<span style="color:red;">(*)</span></label>
                <div class="col-lg-10">
                    <input type="password" class="form-control" id="reinputPassword" placeholder="Nhập lại mật khẩu" name="repassword" v-validate="'required|confirmed:password'">
                    <span v-show="errors.has('repassword')" class="help is-danger">Quý khách vui lòng nhập lại mật khẩu ở trên</span>
                </div>
            </div>
            <div class="form-group">
                <label for="inputName" class="col-lg-2 control-label">Họ tên<span style="color:red;">(*)</span></label>
                <div class="col-lg-10">
                    <input type="name" class="form-control" id="inputName" placeholder="Điền họ tên" name="full_name" v-validate="'required'" v-model="userInfo.fullname">
                    <span v-show="errors.has('full_name')" class="help is-danger">Quý khách vui lòng nhập họ và tên</span>
                </div>
            </div>
            <div class="form-group">
                <label for="inputPhonenumber" class="col-lg-2 control-label">Số điện thoại<span style="color:red;">(*)</span></label>
                <div class="col-lg-10">
                    <input type="number" class="form-control" id="inputPhonenumber" placeholder="Điền số điện thoại" name="phone_number" v-validate="'required|numeric'" v-model="userInfo.phone_number">
                    <span v-show="errors.has('phone_number')" class="help is-danger">Quý khách vui lòng nhập số điện thoại hợp lệ</span>
                </div>
            </div>
            <div class="form-group">
                <label for="inputCompanyname" class="col-lg-2 control-label">Tên công ty (nếu có)</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" id="inputCompanyname" placeholder="Điền tên công ty" v-model="optionalInfo.company_name">
                </div>
            </div>
            <div class="form-group">
                <label for="inputAdress" class="col-lg-2 control-label">Địa chỉ<span style="color:red;">(*)</span></label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" id="inputAdress" placeholder="Điền địa chỉ" name="address" v-validate="'required'" v-model="userInfo.address">
                    <span v-show="errors.has('address')" class="help is-danger">Quý khách vui lòng nhập địa chỉ</span>
                </div>
            </div>
            <div class="form-group">
                <label for="select" class="col-lg-2 control-label">Thành phố<span style="color:red;">(*)</span></label>
                <div class="col-lg-10">
                    <select class="form-control" id="inputCity" v-model="current.city">
                        <option v-for="city in cityList" v-bind:value="city" v-on:click="resetLocation('city')">{{city.name}}</option>
                    </select>
                    <span v-show="locationError.city" class="help is-danger">Quý khách vui lòng chọn thành phố</span>
                </div>
            </div>
            <div class="form-group">
                <label for="select" class="col-lg-2 control-label">Quận/Huyện<span style="color:red;">(*)</span></label>
                <div class="col-lg-10">
                    <select class="form-control" id="inputDistrict" v-model="current.district">
                        <option v-for="district in current.city.districts" v-bind:value="district" v-on:click="resetLocation('district')">{{district.name}}</option>
                    </select>
                    <span v-show="locationError.district" class="help is-danger">Quý khách vui lòng chọn quận / huyện</span>
                </div>
            </div>
            <div class="form-group">
                <label for="select" class="col-lg-2 control-label">Phường/Xã<span style="color:red;">(*)</span></label>
                <div class="col-lg-10">
                    <select class="form-control" id="inputVillage" v-model="current.ward">
                        <option v-for="ward in current.district.wards" v-bind:value="ward">{{ward.name}}</option>
                    </select>
                    <span v-show="locationError.ward" class="help is-danger">Quý khách vui lòng chọn phường / xã</span>
                </div>
            </div>
            <div class="form-group">
                <label for="inputCompanyname" class="col-lg-2 control-label">Thông tin tài khoản(Dùng để chuyển tiền thu hộ cho bạn)</label>
                <div class="col-lg-5">
                    <input type="text" class="form-control" id="inputAccountNumber" placeholder="Số tài khoản" v-model="optionalInfo.bank_number">
                </div>
                <div class="col-lg-5">
                    <input type="text" class="form-control" id="inputAccountHolder" placeholder="Tên chủ tài khoản(Không dấu)" v-model="optionalInfo.bank_username">
                </div>
                <div class="col-lg-5">
                    <select class="form-control" id="select" v-model="optionalInfo.bank_id">
                        <option>--Chọn ngân hàng--</option>
                        <option v-for="bank in bankList" v-bind:value="bank.id">{{bank.name}}</option>
                    </select>
                </div>
                <div class="col-lg-5">
                    <input type="text" class="form-control" id="inputBank" placeholder="Điền ngân hàng, chi nhánh ..." v-model="optionalInfo.bank_agency">
                </div>
            </div>
            <!--<div class="form-group">-->
                <!--<label for="inputAdress" class="col-lg-2 control-label">Mã bảo vệ<span style="color:red;">(*)</span></label>-->
                <!--<div class="col-lg-5">-->
                    <!--<input type="text" class="form-control" id="inputSecurityCode" placeholder="Mã bảo vệ">-->
                <!--</div>-->
                <!--<div class="col-lg-5">-->
                    <!--<img src="" alt="captcha">-->
                    <!--<vue-recaptcha sitekey="Your key here"></vue-recaptcha>-->
                <!--</div>-->
            <!--</div>-->
            <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                    <button type="reset" class="btn btn-default">Nhập lại</button>
                    <button type="submit" class="btn btn-danger"><span v-if="registering"><wave-spinner></wave-spinner></span><span v-if="!registering">Đăng ký</span></button>
                </div>
            </div>
        </fieldset>
    </form>
</template>

<script>
  import Authentication from '@/blocks/api/authentication'
  import Location from '@/blocks/api/location'
  import Bank from '@/blocks/api/bank'
  import { mapGetters } from 'vuex'
  import WaveSpinner from '@/components/spinners/WaveSpinner'

  export default {
    name: 'register-form',
    data () {
      return {
        current: {
          city: {},
          district: {},
          ward: {}
        },
        locationError: {
          city: false,
          district: false,
          ward: false
        },
        userInfo: {
          email: '',
          password: '',
          fullname: '',
          phone_number: '',
          address: ''
        },
        optionalInfo: {
          bank_id: '',
          bank_agency: '',
          bank_number: '',
          bank_username: '',
          company_name: ''
        },
        registering: false
      }
    },
    components: {
      WaveSpinner
    },
    mixins: [Authentication, Location, Bank],
    methods: {
      doRegister () {
        let vm = this
        this.registering = true
        // TODO: Error message on duplicated phone number
        this.$validator.validateAll().then(valid => {
          let flag = true

          if (!vm.current.city.id) {
            vm.locationError.city = true
            flag = false
          } else {
            vm.locationError.city = false
          }

          if (!vm.current.district.id) {
            vm.locationError.district = true
            flag = false
          } else {
            vm.locationError.district = false
          }

          if (!vm.current.ward.id) {
            vm.locationError.ward = true
            flag = false
          } else {
            vm.locationError.ward = false
          }

          if (flag && valid) {
            // Call register api
            vm.userInfo.province_id = vm.current.city.id
            vm.userInfo.district_id = vm.current.district.id
            vm.userInfo.ward_id = vm.current.ward.id

            for (let prop in vm.optionalInfo) {
              if (vm.optionalInfo[prop] !== '') {
                vm.userInfo[prop] = vm.optionalInfo[prop]
              }
            }
            // TODO: Redirect to main app after register successfully
            this.registerApi(vm.userInfo, () => {
              this.loginApi({email: vm.userInfo.email, password: vm.userInfo.password}, () => {
                this.registering = false
                this.$router.push('/')
              })
            })
          } else {
            // Handle failed validation
            // TODO: Lỗi trùng số điện thoại
            this.registering = false
          }
        })
      },
      resetLocation (type) {
        let vm = this
        switch (type) {
          case 'city':
            vm.current.district = {}
            vm.current.ward = {}
            vm.locationError.city = false
            break
          case 'district':
            vm.current.ward = {}
            break
        }
      }
    },
    computed: mapGetters([
      'locationList',
      'cityList',
      'bankList'
    ]),
    mounted () {
      this.getLocation()
      this.getBanks()
    }
  }
</script>

<style>
.help.is-danger {
  color: red;
}
</style>

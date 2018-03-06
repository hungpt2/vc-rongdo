<template>
  <div class="col-sm-6 col-xs-12" style='border-right:1px solid #ecf0f1'>
    <h3>
      <span class="red">3</span>THÔNG TIN HÀNG HOÁ</h3>
    <form class="form-horizontal">
      <fieldset>
        <div class="form-group">
          <label for="inputName" class="col-sm-4 control-label">Tên hàng hoá
            <span style="color:red;">(*)</span>
          </label>
          <div class="col-sm-8 col-xs-12">
            <textarea class="form-control" rows="3" id="textArea" placeholder="Tên hàng hoá-mã số hàng hoá-số lượng sản phẩm ..." v-model="orderData.package_name" @change="updateQuickOrder()"></textarea>
          </div>
        </div>

        <div class="form-group">
          <label for="inputPhonenumber" class="col-sm-4 control-label">Khối lượng(g)
            <span style="color:red;">(*)</span>
          </label>
          <div class="col-sm-8 col-xs-12">
            <input type="number" class="form-control input-sm" id="inputPhonenumber" placeholder="Điền số cân nặng" v-model="orderData.package_weight" @change="updateQuickOrder()">
          </div>
        </div>
        <div class="quydoi">
          <label for="inputPhonenumber" class=" control-label">Kích thước (cm) - quy đổi ra khối lượng (g) :</label>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Dài x Rộng x Cao (cm) </th>
                <th>Quy đổi</th>
                <th>Khối lượng quy đổi (g)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input id="dai" type="number" style="width:50px" v-model="orderData.package_length" @change="updateQuickOrder()"> x <input id="rong" type="number" style="width:50px" v-model="orderData.package_width" @change="updateQuickOrder()"> x <input id="cao" type="number" style="width:50px" v-model="orderData.package_height" @change="updateQuickOrder()"></td>
                <td>/ 6000</td>
                <td>=
                  <span id="kqua">{{orderData.package_length * orderData.package_height * orderData.package_width / 6000 | currency('', 0)}} g</span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
        <div class="form-group">
          <label for="inputName" class="col-sm-4 control-label">Lưu ý </label>
          <div class="col-sm-8 col-xs-12">
            <textarea class="form-control" rows="3" id="textArea" placeholder="Quý khách có ghi chú gì cho hàng hoá, vui lòng ghi lại đây, tối đa 100 ký tự ..." v-model="orderData.package_note" @change="updateQuickOrder()"></textarea>
          </div>
        </div>

      </fieldset>
    </form>
  </div>
</template>
<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: 'quick-order-package-form',
  computed: mapGetters([
    'locationList',
    'cityList',
    'bankList',
    'quickOrder'
  ]),
  data () {
    return {
      orderData: {
        package_name: '',
        package_weight: 0,
        package_size: '',
        package_note: '',
        package_length: 0,
        package_width: 0,
        package_height: 0
      }
    }
  },
  mounted () {
    this.orderData.package_name = this.quickOrder.package_name
    this.orderData.package_weight = this.quickOrder.package_weight
    this.orderData.package_size = this.quickOrder.package_size
    this.orderData.package_note = this.quickOrder.package_note
  },
  methods: {
    updateQuickOrder () {
      let size = this.orderData
      this.orderData.package_size = (size.package_length || 0) + 'x' + (size.package_width || 0) + 'x' + (size.package_height || 0)
      this.orderData.package_weight = parseInt(this.orderData.package_weight)
      this.$store.commit('SET_QUICK_ORDER', this.orderData)
    }
  }

}
</script>
<style>

</style>

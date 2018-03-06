<template>
  <div class="col-sm-6 col-xs-12 " >
      <h3><span class="red">5</span>THÔNG TIN CƯỚC VÀ TIỀN THU HỘ </h3>
      <div class="ketquacuoc">
          <table class="table table-bordered">
              <thead>
              <thead>
              <tr>
                  <th>NGƯỜI TRẢ TIỀN  </th>
                  <th>NGƯỜI GỬI</th>
                  <th>NGƯỜI NHẬN</th>
              </tr>
              </thead>
              </thead>
              <tbody>
              <tr>
                  <td>
                      Cước giao hàng
                  </td>
                  <td>
                      <label>
                          <input type="radio" name="optionnguoitra" id="optionnguoitra" value="2" checked="" v-model="orderData.order_type_id" @change="updateQuickOrder()">
                          Người gửi trả
                      </label>
                  </td>
                  <td>
                      <label>
                          <input type="radio" name="optionnguoitra" id="optionnguoitra" value="1" checked="" v-model="orderData.order_type_id" @change="updateQuickOrder()">
                          Người nhận trả
                      </label>
                  </td>
              </tr>
              <tr>
                  <td>
                      Giá trị đơn hàng
                  </td>
                  <td>
                      <input type="text" style="width:100px" v-model="orderData.package_value" @change="updateQuickOrder()">
                  </td>
                  <td>
                  </td>
              </tr>
              <tr>
                  <td>
                      Phí khai giá
                  </td>
                  <td>
                      = <span class="ketqua"> </span>
                  </td>
                  <td>
                  </td>
              </tr>
              <tr>
                  <td>
                      Tiền thu hộ
                  </td>
                  <td>
                   </td>
                   <td>
                      <input type="text" style="width:100px" v-model="orderData.money_collection" @keyup="updateQuickOrder()">
                  </td>
              </tr>
              <tr>
                  <td>
                      Tổng cộng
                  </td>
                  <td>
                    <div v-if="orderData.order_type_id == 2">
                      <span class="ketquatongcong">{{quickOrder.subPrice || 0 | currency('', 0)}}</span><span class="error-color"> VNĐ</span>
                    </div>
                  </td>
                  <td>
                    <div v-if="orderData.order_type_id == 1">
                      <span class="ketquatongcong">{{quickOrder.subPrice || 0 | currency('', 0)}}</span><span class="error-color"> VNĐ</span>
                    </div>
                  </td>
              </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>
<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: 'quick-order-cod-form',
  computed: mapGetters([
    'quickOrder',
    'shipPackages'
  ]),
  data () {
    return {
      orderData: {
        order_type_id: 1,
        package_value: 0
      }
    }
  },
  mounted () {
    this.orderData.order_type_id = this.quickOrder.order_type_id
    this.orderData.package_value = this.quickOrder.package_value
  },
  methods: {
    updateQuickOrder () {
      this.$store.commit('SET_QUICK_ORDER', this.orderData)
    }
  }
}
</script>
<style>

</style>

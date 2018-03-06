<template>
 <div class="col-sm-6 col-xs-12" style="border-bottom:1px solid #ecf0f1;">
    <h3><span class="red">4</span>GÓI DỊCH VỤ GIAO HÀNG</h3>
    <div class="chonlua">
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td v-for="shipPackage in shipPackages" v-bind:key="shipPackage.id">
                  <popover trigger="hover">
                    <div class="radio" data-role="trigger" slot="default" id="hover-trigger">
                        <label>
                            <input type="radio" name="optiongoivanchuyen" v-bind:value="shipPackage.id" checked="" v-model="orderData.package_ship_id" @change="updateQuickOrder()">
                            {{shipPackage.name}}
                        </label>
                    </div>
                    <div slot="popover">
                      {{shipPackage.description}}
                    </div>
                  </popover>
              </td>
            </tr>
            </tbody>
        </table>
        <!-- <div class="col-sm-12"><span style="color:#e74c3c;">THỜI ĐIỂM GIAO HÀNG DỰ KIẾN: | Ngày:</span> <span class="" id="time"> ...</span></div>
        <span style="color:#95a5a6;font-style:italic">( Kể từ thời điểm chúng tôi xác nhận đơn hàng này )</span> -->
    </div>
</div> 
</template>
<script>
import {
  mapGetters
} from 'vuex'
import {Popover} from 'uiv'
import ShipPackage from '@/blocks/api/shipPackage'

export default {
  name: 'quick-order-ship-package-form',
  data () {
    return {
      orderData: {
        package_ship_id: 1,
        package_ship: {}
      }
    }
  },
  components: {
    Popover
  },
  computed: mapGetters([
    'quickOrder',
    'shipPackages'
  ]),
  mixins: [ShipPackage],
  mounted () {
    this.getShipPackage((data) => {
      this.orderData.package_ship = data[0]
      this.$store.commit('SET_QUICK_ORDER', this.orderData)
    })
  },
  methods: {
    updateQuickOrder () {
      this.orderData.package_ship = this.shipPackages.find((shipPackage) => {
        return shipPackage.id === this.orderData.package_ship_id
      })
      this.$store.commit('SET_QUICK_ORDER', this.orderData)
    }
  }
}
</script>
<style>

</style>

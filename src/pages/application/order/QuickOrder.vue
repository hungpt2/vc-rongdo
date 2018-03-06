<template>
    <div class="main-content" id="taodonhang">
        <div class="col-sm-12">
            <h4>TẠO ĐƠN HÀNG NHANH</h4></div>
        <div class="col-sm-12" style="border-bottom:1px solid #ecf0f1;">
            <quick-order-sender-form v-bind:sender="this.sender"></quick-order-sender-form>
            <quick-order-receiver-form></quick-order-receiver-form>
        </div>
        <div class="col-sm-12">
            <quick-order-package-form></quick-order-package-form>
            <quick-order-ship-package-form></quick-order-ship-package-form>
            <quick-order-cod-form></quick-order-cod-form>            
        </div>
        <div class="col-sm-12 text-center">
            <button type="submit" class="btn btn-warning" @click="this.submitOrder">
              <wave-spinner v-if="sending"></wave-spinner>
              <i v-if="!sending" class="fa fa-fighter-jet " aria-hidden="true"></i><span v-if="!sending"> GỬI ĐƠN HÀNG</span>
            </button>
        </div>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import QuickOrderSenderForm from '@/forms/order/QuickOrderSenderForm'
  import QuickOrderReceiverForm from '@/forms/order/QuickOrderReceiverForm'
  import QuickOrderPackageForm from '@/forms/order/QuickOrderPackageForm'
  import QuickOrderShipPackageForm from '@/forms/order/QuickOrderShipPackageForm'
  import QuickOrderCodForm from '@/forms/order/QuickOrderCodForm'
  import WaveSpinner from '@/components/spinners/WaveSpinner'
  import Order from '@/blocks/api/order'

  export default {
    name: 'quick-order',
    components: {
      QuickOrderSenderForm,
      QuickOrderReceiverForm,
      QuickOrderPackageForm,
      QuickOrderShipPackageForm,
      QuickOrderCodForm,
      WaveSpinner
    },
    data () {
      return {
        sender: {
          name: 'test',
          email: 'test@mail.com'
        },
        sending: false
      }
    },
    mixins: [Order],
    computed: mapGetters([
      'isLoggedIn',
      'token',
      'quickOrder'
    ]),
    beforeMount () {
      if (!this.isLoggedIn) {
        this.$router.push('/')
      }
    },
    methods: {
      submitOrder () {
        // let validateFields = ['district_id', 'package_name', 'package_note', '']
        this.sending = true
        this.addSingleOrder(this.quickOrder, (response) => {
          this.$notify({
            group: 'global',
            title: response.data.status === 1 ? '' : 'Có lỗi xảy ra',
            text: response.data.message,
            type: 'warn',
            duration: 10000,
            speed: 100
          })
          console.log(response.data)
          this.sending = false
        })
      }
    }
  }
</script>

<style>
</style>

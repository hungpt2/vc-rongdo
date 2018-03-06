module.exports = {
  methods: {
    addSingleOrder (params, callback) {
      let data = new FormData()
      data.append('warehouse_id', params.warehouse_id)
      data.append('package_ship_id', params.package_ship_id)
      data.append('order_type_id', params.order_type_id)
      data.append('package_name', params.package_name)
      data.append('package_weight', params.package_weight)
      data.append('package_size', params.package_size)
      data.append('package_value', params.package_value)
      data.append('package_note', params.package_note)
      data.append('user_receive_name', params.user_receive_name)
      data.append('user_receive_phone_number', params.user_receive_phone_number)
      data.append('user_receive_address', params.user_receive_address)
      data.append('province_id', params.province_id)
      data.append('district_id', params.district_id)
      // data.append('ward_id', params.ward_id)
      data.append('money_collection', params.money_collection)
      // data.append('deduct', params.deduct)
      data.append('user_send_email', params.user_send_email)
      data.append('user_send_phone_number', params.user_send_phone_number)
      data.append('order_money', Math.floor(params.subPrice))
      console.log(params, data)
      this.$http.post('order', data).then(response => {
        // this.$store.commit('SET_USER', response.data.data)
        if (callback) {
          this.$store.commit('CLEAR_QUICK_ORDER_FORM', response.data.data)
          callback(response)
        }
      }).catch((error) => {
        if (callback) {
          callback(error)
        }
      })
    },
    getOrderlist (params, callback) {
      this.$http.post('get_order', params).then(response => {
        this.$store.commit('SET_LIST_ORDER', response.data)
        if (callback) {
          callback()
        }
      }).catch((error) => {
        if (callback) {
          callback(error)
        }
      })
    },
    getOrderSummary (callback) {
      this.$http.get('get_order_count').then(response => {
        this.$store.commit('SET_ORDER_SUMMARY', response.data.data)
        if (callback) {
          callback()
        }
      }).catch((error) => {
        if (callback) {
          callback(error)
        }
      })
    },
    getOrderSummaryType (callback) {
      this.$http.get('info_order_status').then(response => {
        this.$store.commit('SET_ORDER_SUMMARY_TYPE', response.data.data)
        if (callback) {
          callback()
        }
      }).catch((error) => {
        if (callback) {
          callback(error)
        }
      })
    }
  }
}

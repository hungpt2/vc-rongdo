module.exports = {
  methods: {
    getWarehouse (callback) {
      this.$http.get('warehouse').then(response => {
        this.$store.commit('SET_WAREHOUSE', response.data.data)
        if (callback) {
          callback()
        }
      }).catch((error) => {
        if (callback) {
          callback(error)
        }
      })
    },
    addWarehouse (params, callback) {
      let data = new FormData()
      data.append('name', params.name)
      data.append('people_contact', params.contact)
      data.append('phone_number', params.phone)
      data.append('address', params.address)
      data.append('province_id', params.province.id)
      data.append('district_id', params.district.id)
      data.append('ward_id', params.ward.id)
      this.$http.post('warehouse', data).then(response => {
        // this.$store.commit('ADD_WAREHOUSE', response.data.data)
        if (callback) {
          callback()
        }
      }).catch((error) => {
        if (callback) {
          callback(error)
        }
      })
    },
    removeWarehouse (params, callback) {
      this.$http.delete('warehouse/' + params.id).then(response => {
        this.$store.commit('REMOVE_WAREHOUSE', params.id)
        if (callback) {
          callback()
        }
      }).catch(error => {
        if (callback) {
          callback(error)
        }
      })
    }
  }
}

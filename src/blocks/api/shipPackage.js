module.exports = {
  methods: {
    getShipPackage (callback) {
      this.$http.get('info_package').then(response => {
        this.$store.commit('SET_SHIP_PACKAGE', response.data.data)
        if (callback) {
          callback(response.data.data)
        }
      }).catch((error) => {
        if (callback) {
          callback(error)
        }
      })
    }
  }
}

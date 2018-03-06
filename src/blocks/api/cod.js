module.exports = {
  methods: {
    getCodlog (params, callback) {
      this.$http.post('log_user_cod', params).then(response => {
        this.$store.commit('SET_COD_LOG', response.data)
        if (callback) {
          callback()
        }
      }).catch((error) => {
        if (callback) {
          callback(error)
        }
      })
    },
    getCodSummary (callback) {
      this.$http.get('log_user_cod_count').then(response => {
        this.$store.commit('SET_COD_SUMMARY', response.data)
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

module.exports = {
  methods: {
    getUser (callback) {
      this.$http.get('user_info').then(response => {
        this.$store.commit('SET_USER', response.data.data)
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

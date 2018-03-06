module.exports = {
  methods: {
    getLocation () {
      this.$http.get('info_province').then(response => {
        this.$store.commit('SET_LOCATION_LIST', response.data.data)
      })
    }
  }
}

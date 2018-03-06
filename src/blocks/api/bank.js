module.exports = {
  methods: {
    getBanks () {
      this.$http.get('info_bank').then(response => {
        this.$store.commit('SET_BANK_LIST', response.data.data)
      })
    }
  }
}

module.exports = {
  methods: {
    loginApi (params, callback) {
      let data = new FormData()
      data.append('email', params.email)
      data.append('password', params.password)
      this.$http.post('login', data)
        .then(response => {
          console.log(response)
          if (response.data.status === 0) {
            this.$store.commit('LOGIN_FAILED', response.data.message)
          } else {
            this.$setToken(response.data.token)
            this.$store.commit('SET_USER', response.data.user)
            this.$store.commit('SET_TOKEN', response.data.token)
            this.$store.commit('LOGIN_SUCCESS', response.data)
          }
          if (callback) {
            callback(response)
          }
        })
      // TODO: Handle login failed
    },
    registerApi (params, callback) {
      let data = new FormData()
      for (let param in params) {
        data.append(param, params[param])
      }
      this.$http.post('register', data)
        .then(response => {
          if (callback) {
            callback()
          }
          // TODO: Do login here
          console.log(response)
        })
        .catch((error) => {
          if (callback) {
            callback(error)
          }
        })
      // TODO: Handle register failed
    },
    logoutApi (callback) {
      this.$http.get('logout')
        .then(response => {
          if (response.data.status === 1) {
            this.$removeToken()
            this.$store.commit('CLEAR_USER_ALL')
            if (callback) {
              callback()
            }
          }
        })
      // TODO: Handle logout failed
    }
  }
}

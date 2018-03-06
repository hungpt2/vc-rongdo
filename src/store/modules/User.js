export const User = {
  state: {
    currentUser: {
    },
    newUser: {},
    token: '',
    loginError: ''
  },

  getters: {
    user: state => {
      return state.currentUser
    },
    newUser: state => state.newUser,
    token: state => {
      state.token = localStorage.getItem('token')
      return state.token
    },
    isLoggedIn: state => {
      return state.token
    },
    loginError: state => state.loginError
  },

  mutations: {
    SET_USER (state, user) {
      localStorage.setItem('user', JSON.stringify(user))
      state.currentUser = user
      state.newUser = user
    },
    SET_TOKEN (state, token) {
      localStorage.setItem('token', token)
      state.token = token
    },
    CLEAR_USER_ALL (state) {
      localStorage.clear()
      state.currentUser = {}
      state.newUser = {}
      state.token = ''
    },
    REFRESH_USER (state) {
      if (localStorage.getItem('user') !== 'undefined') {
        state.currentUser = JSON.parse(localStorage.getItem('user'))
        state.newUser = JSON.parse(localStorage.getItem('user'))
      }
    },
    LOGIN_FAILED (state, message) {
      state.loginError = message
    },
    LOGIN_SUCCESS (state, data) {
      state.loginError = ''
    }
  }
}

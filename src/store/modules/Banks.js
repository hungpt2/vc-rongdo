export const BanksStore = {
  state: {
    bankList: []
  },
  getters: {
    bankList: state => {
      return state.bankList
    }
  },
  mutations: {
    SET_BANK_LIST (state, bankList) {
      state.bankList = bankList
      return bankList
    }
  }
}

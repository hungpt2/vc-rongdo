export const CodStore = {
  state: {
    codLog: [],
    codSummary: {
      not_transfer: 0,
      transfer: 0
    },
    codPagination: {
      per_page: 10
    }
  },
  getters: {
    codLog: state => state.codLog,
    codSummary: state => state.codSummary,
    codPagination: state => state.codPagination
  },
  mutations: {
    SET_COD_LOG (state, data) {
      state.codLog = data.data
      state.codPagination = data.pagination
    },
    SET_COD_SUMMARY (state, data) {
      state.codSummary = data.data
    }
  }
}

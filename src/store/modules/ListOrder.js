export const ListOrderStore = {
  state: {
    listOrder: [],
    summary: [],
    orderStatusList: [],
    pagination: {
      per_page: 10
    },
    listPagesize: [10, 30, 50]
  },
  getters: {
    listOrder: state => {
      return state.listOrder
    },
    listOrderPagination: state => state.pagination,
    listPagesize: state => state.listPagesize,
    listOrderSummary: state => state.summary,
    orderStatusList: state => state.orderStatusList
  },
  mutations: {
    SET_LIST_ORDER (state, data) {
      state.listOrder = data.data
      state.pagination = data.pagination
    },
    CHANGE_ORDERLIST_PAGINATION (state, data) {
      state.pagination.per_page = data.per_page
      state.pagination.page = data.page
    },
    SET_ORDER_SUMMARY (state, data) {
      state.summary = data
      let total = data.reduce((prev, current) => {
        console.log(prev, current)
        return prev + current.count
      }, 0)
      state.summary.push({
        order_status_id: 0,
        count: total
      })
    },
    SET_ORDER_SUMMARY_TYPE (state, data) {
      state.orderStatusList = data
    }
  }
}

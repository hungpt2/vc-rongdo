export const WarehouseStore = {
  state: {
    warehouses: []
  },

  getters: {
    warehouses: state => {
      return state.warehouses
    }
  },

  mutations: {
    SET_WAREHOUSE (state, warehouses) {
      state.warehouses = warehouses
    },
    ADD_WAREHOUSE (state, warehouse) {
      state.warehouses.push(warehouse)
    },
    REMOVE_WAREHOUSE (state, warehouseId) {
      let removeTarget = state.warehouses.find(warehouse => {
        return warehouse.id === warehouseId
      })
      state.warehouses.splice(state.warehouses.indexOf(removeTarget), 1)
    }
  }
}


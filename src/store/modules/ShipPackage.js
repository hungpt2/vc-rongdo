export const ShipPackageStore = {
  state: {
    shipPackages: []
  },

  getters: {
    shipPackages: state => {
      return state.shipPackages
    }
  },

  mutations: {
    SET_SHIP_PACKAGE (state, packages) {
      state.shipPackages = packages
    }
  }
}


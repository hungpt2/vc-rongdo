export const LocationStore = {
  state: {
    locationList: []
  },
  getters: {
    locationList: state => {
      return state.locationList
    },
    cityList: state => {
      return state.locationList.map(city => { return city })
    }
  },
  mutations: {
    SET_LOCATION_LIST (state, locationList) {
      state.locationList = locationList
      return locationList
    }
  }
}

export const QuickOrderStore = {
  state: {
    user_send_email: '',
    user_send_phone_number: '',
    warehouse_id: '',
    user_receive_name: '',
    user_receive_phone_number: '',
    user_receive_address: '',
    province_id: '',
    district_id: '',
    ward_id: '',
    package_name: '',
    package_weight: 0,
    package_size: '0x0x0',
    package_note: '',
    package_value: 0,
    deduct: false,
    order_money: 0,
    money_collection: 0,
    order_type_id: 2,
    package_ship_id: 0,
    package_ship: {},
    package_length: 0,
    package_width: 0,
    package_height: 0,
    subPrice: 0,
    totalPrice: 0
  },
  getters: {
    quickOrder: state => {
      return state
    }
  },
  mutations: {
    SET_QUICK_ORDER (state, object) {
      for (let prop in object) {
        state[prop] = object[prop]
      }
      let price = 0
      if (!state.district || !state.package_weight) {
        price = 0
      } else {
        let shipPackage = state.package_ship
        let areaPrice = state.district.area === 'urban' ? shipPackage.urban : shipPackage.suburban_1
        let priceKg = state.district.area === 'urban' ? shipPackage.price_kg_urban : shipPackage.price_kg_suburban_1
        let additionWeight = state.package_width * state.package_length * state.package_height / 6000
        price = (state.package_weight + additionWeight) / 1000 >= shipPackage.limit_kg + shipPackage.addition_kg ? (shipPackage.limit_kg + additionWeight) * priceKg / 1000 + Math.ceil((state.package_weight + additionWeight - shipPackage.limit_kg) / shipPackage.addition_kg) * priceKg / 1000 + areaPrice
        : (state.package_weight + additionWeight) * priceKg / 1000 + areaPrice
        if (parseInt(state.order_type_id) === 1) {
          price += parseInt(state.money_collection)
        }
      }
      state.subPrice = price
      return state
    },
    CLEAR_QUICK_ORDER (state) {
      state = {
        user_send_email: '',
        user_send_phone_number: '',
        warehouse_id: '',
        user_receive_name: '',
        user_receive_phone_number: '',
        user_receive_address: '',
        province_id: '',
        district_id: '',
        ward_id: '',
        package_name: '',
        package_weight: 0,
        package_size: '',
        package_note: '',
        package_value: 0,
        deduct: false,
        order_money: 0,
        money_collection: 0,
        order_type_id: 2,
        package_ship_id: 0,
        package_ship: {},
        package_length: 0,
        package_width: 0,
        package_height: 0,
        subPrice: 0,
        totalPrice: 0
      }
      return state
    },
    CLEAR_QUICK_ORDER_FORM (state, data) {
      return state
    }
  }
}

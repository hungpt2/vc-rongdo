import Vue from 'vue'
import Vuex from 'vuex'
import {User} from './modules/User'
import {LocationStore} from './modules/Location'
import {BanksStore} from './modules/Banks'
import {WarehouseStore} from './modules/Warehouse'
import {QuickOrderStore} from './modules/QuickOrder'
import {ShipPackageStore} from './modules/ShipPackage'
import {ListOrderStore} from './modules/ListOrder'
import {CodStore} from './modules/Cod'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    User,
    LocationStore,
    BanksStore,
    WarehouseStore,
    QuickOrderStore,
    ShipPackageStore,
    ListOrderStore,
    CodStore
  }
})

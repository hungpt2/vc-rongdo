<template>
  <div class="main-content" id="importexcel">
    <div class="col-sm-12">
      <h4>QUẢN LÝ ĐƠN HÀNG </h4>
    </div>
    <div class="col-sm-12">
      <h5 class="red">TÌM KIẾM THEO:</h5>

      <form class="form-horizontal">
        <fieldset>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="inputName" class="col-sm-4 control-label">Mã đơn hàng</label>
              <div class="col-sm-8 col-xs-12">
                <input type="name" class="form-control input-sm" id="inputName" placeholder="Nhập Mã vận đơn" @keyup="changeShipCode()" v-model="shipCode">
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail" class="col-sm-4 control-label">TT người nhận</label>
              <div class="col-sm-8 col-xs-12">
                <input type="text" class="form-control input-sm" id="inputEmail" placeholder="Nhập tên hoặc SDT người nhận" @keyup="changeUserReceive()" v-model="userReceive">
              </div>
            </div>
            <div class="form-group">
              <label for="inputPhonenumber" class="col-sm-4 control-label">Gói cước</label>
              <div class="col-sm-8 col-xs-12">
                <select class="form-control input-sm" id="select" v-model="selectedShipPackage" @change="changeShipPackage">
                    <option v-bind:value="0">--Chọn gói cước--</option>
                    <option v-for="shipPackage in shipPackages" v-bind:key="shipPackage.id" v-bind:value="shipPackage.id">{{shipPackage.name}}</option>
                  </select>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="inputName" class="col-sm-4 control-label">Từ ngày</label>
              <div class="col-sm-8 col-xs-12">
                <input type="date" class="form-control input-sm">
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail" class="col-sm-4 control-label">Đến ngày</label>
              <div class="col-sm-8 col-xs-12">
                <input type="date" class="form-control input-sm">
              </div>
            </div>
            <div class="form-group">
              <a href="#" class="btn btn-danger btn-sm pull-right"><i class="fa fa-search" aria-hidden="true"></i> Tìm kiếm</a>
            </div>

          </div>

        </fieldset>
      </form>
    </div>
    <div id="listdon">
      <ul>
        <li class="col-sm-1 col-xs-3">
          <div class=" panel panel-default panel-tatca" v-bind:class="currentStatus === 0 ? 'active' : ''" @click="changeStatus(0)">
            <div class="panel-heading">{{orderStatusCount(0)}}</div>
            <div class="panel-body">
              Tất cả
            </div>
          </div>
        </li>
        <li class="col-sm-1 col-xs-3" v-for="status in orderStatusList" v-bind:key="status.id" @click="changeStatus(status.id)">
          <div class="panel panel-default" v-bind:class="orderStatusClass(status.id) + ' ' + (currentStatus === status.id ? 'active' : '')">
            <div class="panel-heading">{{orderStatusCount(status.id)}}</div>
            <div class="panel-body">
              {{status.name}}
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div id="table-don">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Mã đơn hàng</th>
            <th>Người nhận hàng</th>
            <th>Tình trạng đơn hàng</th>
            <th>Thông tin hàng hoá</th>
            <th>Tiền thu hộ</th>
          </tr>
        </thead>
        <transition-group tag="tbody" name="slide-fade" mode="out-in">
          <tr v-for="order in listOrder" v-bind:key="order.id">
            <td>
              <p style="color:red">{{order.ship_code}}</p>
              <p>{{order.created_at}}</p>
              <button class="btn">Chi tiết</button>
            </td>
            <td>
              <p style="color:red">{{order.user_receive_name}}</p>
              <p>{{order.user_receive_address}}</p>
              <p>{{order.user_receive_phone_number}}</p>
            </td>
            <td>
              <p>{{order.order_status.name}}</p>
              <!--                            màu text theo trang thái-->
              <!-- <p> - {{order.package_ship.name}}</p> -->
            </td>
            <td>
              <p>{{order.package_name}}</p>
              <p>- Lưu ý: {{order.package_note}}</p>
            </td>
            <td>
              <p style="color:red; text-align:right">{{order.money_collection | currency('', 0)}}</p>
            </td> 
          </tr>
        </transition-group>
      </table>
      <div style="height: 40px;">
        <cube-spinner v-if="loading"></cube-spinner>
      </div>
      <nav aria-label="Page navigation">
        <ul class="pagination float-left">
          <li class="cursor-pointer" v-bind:class="{active: pageSize === listOrderPagination.per_page}" v-for="pageSize in listPagesize" v-bind:key="pageSize"><a @click="changePagesize(pageSize)">{{pageSize}}</a></li>
        </ul>
        <ul class="pagination float-right">
          <li class="cursor-pointer" v-bind:class="{disabled: listOrderPagination.current_page === 1}">
            <a @click="changePage(listOrderPagination.current_page - 1)" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="cursor-pointer" v-bind:class="{active: page === listOrderPagination.current_page}" v-for="page in listOrderPagination.total_page" v-bind:key="page"><a @click="changePage(page)">{{page}}</a></li>
          <li class="cursor-pointer" v-bind:class="{disabled: listOrderPagination.current_page === listOrderPagination.total_page}">
            <a @click="changePage(listOrderPagination.current_page + 1)" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Order from '@/blocks/api/order'
import ShipPackage from '@/blocks/api/shipPackage'
import CubeSpinner from '@/components/spinners/CubeSpinner'

export default {
  name: 'list-order',
  mixins: [Order, ShipPackage],
  computed: mapGetters([
    'isLoggedIn',
    'token',
    'listOrder',
    'listOrderPagination',
    'listPagesize',
    'listOrderSummary',
    'orderStatusList',
    'shipPackages'
  ]),
  data () {
    return {
      loading: false,
      params: {
        package_ship_id: 0
      },
      currentStatus: 0,
      shipCode: '',
      userReceive: '',
      selectedShipPackage: 0
    }
  },
  components: {CubeSpinner},
  beforeMount () {
    if (!this.isLoggedIn) {
      this.$router.push('/')
    }
  },
  mounted () {
    this.params.page = 1
    this.params.per_page = this.listOrderPagination.per_page
    this.getPage()
    this.getOrderSummary(() => {
      this.getOrderSummaryType()
    })
    this.getShipPackage()
  },
  methods: {
    changePage (page) {
      this.params.page = page
      this.getPage()
    },
    changePagesize (pagesize) {
      this.params.page = 1
      this.params.per_page = pagesize
      this.getPage()
    },
    changeStatus (statusId) {
      if (statusId !== 0) {
        this.params.order_status_id = statusId
      } else if (statusId === 0 || this.params.order_status_id === 0) {
        delete this.params.order_status_id
      }
      this.params.page = 1
      this.params.per_page = 10
      this.currentStatus = statusId
      this.getPage()
    },
    changeShipCode () {
      this.params.ship_code = this.shipCode
      this.params.page = 1
      this.params.per_page = 10
      this.currentStatus = 0
      if (this.params.order_status_id === 0) {
        delete this.params.order_status_id
      }
      this.getPage()
    },
    changeUserReceive () {
      this.params.user_receive = this.userReceive
      this.params.page = 1
      this.params.per_page = 10
      this.currentStatus = 0
      if (this.params.order_status_id === 0) {
        delete this.params.order_status_id
      }
      this.getPage()
    },
    changeShipPackage () {
      this.params.package_ship_id = this.selectedShipPackage
      this.params.page = 1
      this.params.per_page = 10
      this.currentStatus = 0
      if (this.params.order_status_id === 0) {
        delete this.params.order_status_id
      }
      this.getPage()
    },
    getPage () {
      this.loading = true
      if (this.params.ship_code === '') {
        delete this.params.ship_code
      }
      if (this.params.user_receive === '') {
        delete this.params.user_receive
      }
      this.getOrderlist(this.params, () => {
        this.loading = false
      })
    },
    orderStatusCount (statusId) {
      let target = this.listOrderSummary.find((status) => {
        return status.order_status_id === statusId
      })
      if (target) {
        return target.count || 0
      }
      return 0
    },
    orderStatusClass (statusId) {
      let className = ''
      switch (statusId) {
        case 1:
          className = 'panel-choduyet'
          break
        case 2:
          className = 'panel-daduyet'
          break
        case 3:
          className = 'panel-danglayhang'
          break
        case 4:
          className = 'panel-dalayhang'
          break
        case 5:
          className = 'panel-danggiaohang'
          break
        case 6:
          className = 'panel-kothanhcong1'
          break
        case 7:
          className = 'panel-giaohangthanhcong'
          break
        case 8:
          className = 'panel-trahang'
          break
        case 9:
          className = 'panel-hoantat'
          break
        case 10:
          className = ''
          break
      }
      return className
    }
  }
}
</script>
<style>

</style>

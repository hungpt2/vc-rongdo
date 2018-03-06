<template>
  <div class="main-content" id="importexcel">
        <div class="col-sm-12">
          <h4>QUẢN LÝ TIỀN THU HỘ </h4>
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
                  <label for="inputEmail" class="col-sm-4 control-label">Tên/SDT người nhận</label>
                  <div class="col-sm-8 col-xs-12">
                    <input type="text" class="form-control input-sm" id="inputEmail" placeholder="Nhập tên hoặc SDT người nhận" @keyup="changeUserFilter()" v-model="userReceive">
                  </div>
                </div>

              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="inputName" class="col-sm-4 control-label">Từ ngày</label>
                  <div class="col-sm-8 col-xs-12">
                    <input type="date" class="form-control input-sm" @change="changeDate('start')" v-model="startDate">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputEmail" class="col-sm-4 control-label">Đến ngày</label>
                  <div class="col-sm-8 col-xs-12">
                    <input type="date" class="form-control input-sm" @change="changeDate('end')" v-model="endDate">
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
            <li class="col-sm-4 col-xs-4">
              <div class=" panel panel-default panel-tatca" v-bind:class="{active: params.transfer === 2}" @click="changeStatus(2)">
                <div class="panel-heading">{{codSummary.not_transfer + codSummary.transfer}}</div>
                <div class="panel-body">
                  Tất cả
                </div>
              </div>
            </li>
            <li class="col-sm-4 col-xs-4">
              <div class=" panel panel-default panel-choduyet" v-bind:class="{active: params.transfer === 0}" @click="changeStatus(0)">
                <div class="panel-heading">{{codSummary.not_transfer}}</div>
                <div class="panel-body">
                  Chờ chuyển tiền thu hộ
                </div>
              </div>
            </li>
            <li class="col-sm-4 col-xs-4">
              <div class=" panel panel-default panel-daduyet" v-bind:class="{active: params.transfer === 1}" @click="changeStatus(1)">
                <div class="panel-heading">{{codSummary.transfer}}</div>
                <div class="panel-body">
                  Đã chuyển tiền thu hộ
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
                <th>Số tiền thu hộ</th>
                <th>Trạng thái tiền thu hộ</th>
                <th>Hình thức chuyển tiền</th>
              </tr>
            </thead>
            <transition-group tag="tbody" name="slide-fade" mode="out-in"  v-if="!loading">
              <tr v-for="log in codLog" v-bind:key="log.id">
                <td>
                  <p style="color:red">{{log.ship_code}}</p>
                  <p>{{log.updated_at}}</p>
                </td>
                <td>
                  <p>{{log.user_receive_name}}</p>
                </td>
                <td>
                  <p style="color:red">{{log.money_collection | currency('', 0)}}</p>
                </td>
                <td>
                  <p>{{log.transfer === 0 ? 'Chưa thu' : 'Đã thu' }}</p>
                  <!--                            màu text theo trang thái-->
                  <!-- <p> {thoi_gian_duyet}}</p> -->
                </td>
                <td>
                  <p>{{log.transfer_note}}</p>
                </td>
              </tr>
            </transition-group>
          </table>
          <div style="height: 40px;">
            <cube-spinner v-if="loading"></cube-spinner>
          </div>
          <nav aria-label="Page navigation">
            <ul class="pagination float-left">
              <li class="cursor-pointer" v-bind:class="{active: pageSize === codPagination.per_page}" v-for="pageSize in listPagesize" v-bind:key="pageSize"><a @click="changePagesize(pageSize)">{{pageSize}}</a></li>
            </ul>
            <ul class="pagination float-right">
              <li class="cursor-pointer" v-bind:class="{disabled: codPagination.current_page === 1}">
                <a @click="changePage(codPagination.current_page - 1)" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="cursor-pointer" v-bind:class="{active: page === codPagination.current_page}" v-for="page in codPagination.total_page" v-bind:key="page"><a @click="changePage(page)">{{page}}</a></li>
              <li class="cursor-pointer" v-bind:class="{disabled: codPagination.current_page === codPagination.total_page}">
                <a @click="changePage(codPagination.current_page + 1)" aria-label="Next">
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
import CubeSpinner from '@/components/spinners/CubeSpinner'
import Cod from '@/blocks/api/cod'

export default {
  name: 'log-cod',
  mixins: [Cod],
  computed: mapGetters([
    'isLoggedIn',
    'token',
    'codSummary',
    'codLog',
    'codPagination',
    'listPagesize'
  ]),
  data () {
    return {
      loading: false,
      params: {
        transfer: 2
      },
      shipCode: '',
      userReceive: '',
      startDate: '',
      endDate: ''
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
    this.params.per_page = this.codPagination.per_page
    this.getPage()
    this.getCodSummary()
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
    changeShipCode () {
      this.params.ship_code = this.shipCode
      this.params.page = 1
      this.params.per_page = this.listPagesize[0]
      this.params.transfer = 2
      this.getPage()
    },
    changeUserFilter () {
      this.params.user_receive = this.userReceive
      this.params.page = 1
      this.params.per_page = this.listPagesize[0]
      this.params.transfer = 2
      if (this.userReceive.length > 5) {
        this.getPage()
      }
    },
    changeStatus (status) {
      this.params.transfer = status
      this.params.page = 1
      this.params.per_page = this.listPagesize[0]
      this.getPage()
    },
    changeDate (type) {
      this.params.page = 1
      this.params.per_page = this.listPagesize[0]
      if (type === 'start') {
        console.log(this.startDate)
        this.params.start = this.startDate + ' 00:00:00'
      }
      if (type === 'end') {
        this.params.end = this.endDate + ' 23:59:59'
      }
      if (this.params.start === ' 00:00:00') {
        delete this.params.start
      }
      if (this.params.end === ' 23:59:59') {
        delete this.params.end
      }
      this.getPage()
    },
    getPage () {
      this.loading = true
      this.getCodlog(this.params, () => {
        this.loading = false
      })
    }
  }
}
</script>
<style>

</style>

<template>
  <div class="main-content" id="taodonhang">
        <div class="col-sm-12">
          <h4>TẠO NHIỀU ĐƠN HÀNG</h4> (lưu ý: chỉ có thể tối đa 15 đơn 1 lúc)</div>
        <div class="col-sm-12">
          <div class="well">
            <label>Người gửi:</label>&nbsp<span>{name}</span>&nbsp&nbsp|&nbsp&nbsp<label>Điện thoại:</label>&nbsp<span>{phonenumber}</span>
            <div>
              <div class="form-group">
                <label for="select" class=" control-label">Địa chỉ<span style="color:red;">(*)</span>:</label>
                <div>
                  <select class="form-control input-sm" id="select">
                        <option>--- Chọn địa chỉ kho ----</option>
                        <option>Ba Đình</option>
                        <option>Tây Hồ</option>
                        <option>Hoàn Kiếm</option>
                        <option>Cầu Giấy</option>
                        <option>Hoàng Mai</option>
                      </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12">
          
          <div class="panel-group" id="accordion">
            <div class="panel panel-default template">

              <!-- TEMPLATE DON -->
              <div class="panel-heading cursor-pointer" @click="showAccordion = !showAccordion"> <span class="glyphicon glyphicon-remove pull-right "></span>

                <h4 class="panel-title">
                  <a class="accordion-toggle">
                     Đơn hàng 1
                 </a>
                </h4>

              </div>
              <collapse v-model="showAccordion">
                <div id="collapseOne" class="panel-collapse collapse in">
                  <div class="panel-body">


                    <div class="col-sm-12" style="border-bottom:1px solid #ecf0f1;">


                      <div class="col-sm-12 col-xs-12">
                        <h3><span class="red">1</span>NGƯỜI NHẬN</h3>
                        <form class="form-horizontal">
                          <fieldset>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label for="inputName" class="col-sm-4 control-label">Họ tên<span style="color:red;">(*)</span></label>
                                <div class="col-sm-8 col-xs-12">
                                  <input type="name" class="form-control input-sm" id="inputName" placeholder="Điền họ tên">
                                </div>
                              </div>

                              <div class="form-group">
                                <label for="inputPhonenumber" class="col-sm-4 control-label">Số điện thoại<span style="color:red;">(*)</span></label>
                                <div class="col-sm-8 col-xs-12">
                                  <input type="number" class="form-control input-sm" id="inputPhonenumber" placeholder="Điền số điện thoại">
                                </div>
                              </div>
                              <div class="form-group">
                                <label for="inputAdress" class="col-sm-4 control-label">Địa chỉ<span style="color:red;">(*)</span></label>
                                <div class="col-sm-8 col-xs-12">
                                  <input type="text" class="form-control input-sm" id="inputAdress" placeholder="Số nhà, đường xá ...">
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label for="select" class="col-sm-4 control-label">Thành phố<span style="color:red;">(*)</span></label>
                                <div class="col-sm-8">
                                  <select class="form-control input-sm" id="select">
                          <option>Hồ Chí Minh</option>
                          <option>Hà Nội</option>
                          <option>Hải Phòng</option>
                          <option>Cần Thơ</option>
                          <option>Vĩnh Long</option>
                        </select>
                                </div>
                              </div>
                              <div class="form-group">
                                <label for="select" class="col-sm-4 control-label">Quận/Huyện<span style="color:red;">(*)</span></label>
                                <div class="col-sm-8">
                                  <select class="form-control input-sm" id="select">
                          <option>Ba Đình</option>
                          <option>Tây Hồ</option>
                          <option>Hoàn Kiếm</option>
                          <option>Cầu Giấy</option>
                          <option>Hoàng Mai</option>
                        </select>
                                </div>
                              </div>
                              <div class="form-group">
                                <label for="select" class="col-sm-4 control-label">Phường/Xã<span style="color:red;">(*)</span></label>
                                <div class="col-sm-8">
                                  <select class="form-control input-sm" id="select">
                          <option>Cống Vị</option>
                          <option>Tây Hồ</option>
                          <option>Hoàn Kiếm</option>
                          <option>Cầu Giấy</option>
                          <option>Hoàng Mai</option>
                        </select>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </form>

                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="col-sm-6 col-xs-12" style='border-right:1px solid #ecf0f1'>
                        <h3><span class="red">2</span>THÔNG TIN HÀNG HOÁ</h3>
                        <form class="form-horizontal">
                          <fieldset>
                            <div class="form-group">
                              <label for="inputName" class="col-sm-4 control-label">Tên hàng hoá<span style="color:red;">(*)</span></label>
                              <div class="col-sm-8 col-xs-12">
                                <textarea class="form-control" rows="3" id="textArea" placeholder="Tên hàng hoá-mã số hàng hoá-số lượng sản phẩm ..."></textarea>
                              </div>
                            </div>

                            <div class="form-group">
                              <label for="inputPhonenumber" class="col-sm-4 control-label">Khối lượng(g)<span style="color:red;">(*)</span></label>
                              <div class="col-sm-8 col-xs-12">
                                <input type="number" class="form-control input-sm" id="inputPhonenumber" placeholder="Điền số cân nặng">
                              </div>
                            </div>
                            <div class="quydoi">
                              <label for="inputPhonenumber" class=" control-label">Kích thước (cm) - quy đổi ra khối lượng (g) :</label>
                              <table class="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Dài x Rộng x Cao (cm) </th>
                                    <th>Quy đổi</th>
                                    <th>Khối lượng quy đổi (g)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td><input id="dai" type="text" style="width:50px"> x <input id="rong" type="text" style="width:50px"> x <input id="cao" type="text" style="width:50px"></td>
                                    <td>/6000</td>
                                    <td>=<span id="kqua">...</span></td>
                                  </tr>


                                </tbody>
                              </table>
                            </div>
                            <div class="form-group">
                              <label for="inputName" class="col-sm-4 control-label">Lưu ý </label>
                              <div class="col-sm-8 col-xs-12">
                                <textarea class="form-control" rows="3" id="textArea" placeholder="Quý khách có ghi chú gì cho hàng hoá, vui lòng ghi lại đây, tối đa 100 ký tự ..."></textarea>
                              </div>
                            </div>

                          </fieldset>
                        </form>
                      </div>

                      <div class="col-sm-6 col-xs-12" style="border-bottom:1px solid #ecf0f1;">
                        <h3><span class="red">3</span>GÓI DỊCH VỤ GIAO HÀNG</h3>
                        <div class="chonlua">

                          <table class="table table-bordered">

                            <tbody>
                              <tr>
                                <td>
                                  <div class="radio">
                                    <label>
                                                              <input type="radio" name="optiongoivanchuyen" id="optiongoivanchuyen" value="option1" checked="">
                                                              Gói 6 tiếng
                                                      </label><br><a href="#">(chi tiết)</a>
                                  </div>
                                </td>
                                <td>
                                  <div class="radio">
                                    <label>
                                                              <input type="radio" name="optiongoivanchuyen" id="optiongoivanchuyen" value="option2" checked="">
                                                              Gói qua ngày
                                                      </label><br><a href="#">(chi tiết)</a>
                                  </div>
                                </td>
                                <td>
                                  <div class="radio">
                                    <label>
                                                              <input type="radio" name="optiongoivanchuyen" id="optiongoivanchuyen" value="option3" checked="">
                                                              Gói tiết kiệm
                                                      </label><br><a href="#">(chi tiết)</a>
                                  </div>
                                </td>
                                <td>
                                  <div class="radio">
                                    <label>
                                                              <input type="radio" name="optiongoivanchuyen" id="optiongoivanchuyen" value="option4" checked="">
                                                              Gói siêu tốc
                                                      </label><br><a href="#">(chi tiết)</a>
                                  </div>
                                </td>
                                <td>
                                  <div class="radio">
                                    <label>
                                                              <input type="radio" name="optiongoivanchuyen" id="optiongoivanchuyen" value="option5" checked="">
                                                              Gói giao tối
                                                      </label><br><a href="#">(chi tiết)</a>
                                  </div>
                                </td>
                              </tr>


                            </tbody>
                          </table>
                          <div class="col-sm-12"><span style="color:#e74c3c;">THỜI ĐIỂM GIAO HÀNG DỰ KIẾN: | Ngày:</span> <span class="" id="time"> ...</span></div>
                          <span style="color:#95a5a6;font-style:italic">( Kể từ thời điểm chúng tôi xác nhận đơn hàng này )</span>
                        </div>
                      </div>
                      <div class="col-sm-6 col-xs-12 ">
                        <h3><span class="red">4</span>THÔNG TIN CƯỚC VÀ TIỀN THU HỘ </h3>
                        <div class="ketquacuoc">

                          <table class="table table-bordered">
                            <thead>
                              <thead>
                                <tr>
                                  <th>NGƯỜI TRẢ TIỀN </th>
                                  <th>NGƯỜI GỬI</th>
                                  <th>NGƯỜI NHẬN</th>
                                </tr>
                              </thead>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  Cước giao hàng
                                </td>
                                <td>
                                  <label>
                                                              <input type="radio" name="optionnguoitra" id="optionnguoitra" value="option1" checked="">
                                                              Người gửi trả
                                                  </label>
                                </td>
                                <td>
                                  <label>
                                                              <input type="radio" name="optionnguoitra" id="optionnguoitra" value="option2" checked="">
                                                              Người nhận trả
                                                  </label>
                                </td>

                              </tr>
                              <tr>
                                <td>
                                  Giá trị đơn hàng
                                </td>
                                <td>

                                  <input type="text" style="width:100px">


                                </td>
                                <td>

                                </td>

                              </tr>
                              <tr>
                                <td>
                                  Phí khai giá
                                </td>
                                <td>
                                  = <span class="ketqua"> </span>
                                </td>
                                <td>

                                </td>

                              </tr>
                              <tr>
                                <td>
                                  Tiền thu hộ
                                </td>
                                <td>

                                </td>
                                <td>
                                  <input type="text" style="width:100px">
                                </td>

                              </tr>
                              <tr>
                                <td>
                                  Tổng cộng
                                </td>
                                <td>
                                  <span class="ketquatongcong">0.0</span>
                                </td>
                                <td>

                                </td>

                              </tr>


                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </collapse>


              <!-- END OF TEMPLATE DON -->
            </div>

          </div>
<div class="panel-group" id="accordion">
            <div class="panel panel-default template">

              <!-- TEMPLATE DON -->
              <div class="panel-heading cursor-pointer" @click="showAccordion = !showAccordion"> <span class="glyphicon glyphicon-remove pull-right "></span>

                <h4 class="panel-title">
                  <a class="accordion-toggle">
                     Đơn hàng 1
                 </a>
                </h4>

              </div>
              <collapse v-model="showAccordion">
                <div id="collapseOne" class="panel-collapse collapse in">
                  <div class="panel-body">


                    <div class="col-sm-12" style="border-bottom:1px solid #ecf0f1;">


                      <div class="col-sm-12 col-xs-12">
                        <h3><span class="red">1</span>NGƯỜI NHẬN</h3>
                        <form class="form-horizontal">
                          <fieldset>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label for="inputName" class="col-sm-4 control-label">Họ tên<span style="color:red;">(*)</span></label>
                                <div class="col-sm-8 col-xs-12">
                                  <input type="name" class="form-control input-sm" id="inputName" placeholder="Điền họ tên">
                                </div>
                              </div>

                              <div class="form-group">
                                <label for="inputPhonenumber" class="col-sm-4 control-label">Số điện thoại<span style="color:red;">(*)</span></label>
                                <div class="col-sm-8 col-xs-12">
                                  <input type="number" class="form-control input-sm" id="inputPhonenumber" placeholder="Điền số điện thoại">
                                </div>
                              </div>
                              <div class="form-group">
                                <label for="inputAdress" class="col-sm-4 control-label">Địa chỉ<span style="color:red;">(*)</span></label>
                                <div class="col-sm-8 col-xs-12">
                                  <input type="text" class="form-control input-sm" id="inputAdress" placeholder="Số nhà, đường xá ...">
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label for="select" class="col-sm-4 control-label">Thành phố<span style="color:red;">(*)</span></label>
                                <div class="col-sm-8">
                                  <select class="form-control input-sm" id="select">
                          <option>Hồ Chí Minh</option>
                          <option>Hà Nội</option>
                          <option>Hải Phòng</option>
                          <option>Cần Thơ</option>
                          <option>Vĩnh Long</option>
                        </select>
                                </div>
                              </div>
                              <div class="form-group">
                                <label for="select" class="col-sm-4 control-label">Quận/Huyện<span style="color:red;">(*)</span></label>
                                <div class="col-sm-8">
                                  <select class="form-control input-sm" id="select">
                          <option>Ba Đình</option>
                          <option>Tây Hồ</option>
                          <option>Hoàn Kiếm</option>
                          <option>Cầu Giấy</option>
                          <option>Hoàng Mai</option>
                        </select>
                                </div>
                              </div>
                              <div class="form-group">
                                <label for="select" class="col-sm-4 control-label">Phường/Xã<span style="color:red;">(*)</span></label>
                                <div class="col-sm-8">
                                  <select class="form-control input-sm" id="select">
                          <option>Cống Vị</option>
                          <option>Tây Hồ</option>
                          <option>Hoàn Kiếm</option>
                          <option>Cầu Giấy</option>
                          <option>Hoàng Mai</option>
                        </select>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </form>

                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="col-sm-6 col-xs-12" style='border-right:1px solid #ecf0f1'>
                        <h3><span class="red">2</span>THÔNG TIN HÀNG HOÁ</h3>
                        <form class="form-horizontal">
                          <fieldset>
                            <div class="form-group">
                              <label for="inputName" class="col-sm-4 control-label">Tên hàng hoá<span style="color:red;">(*)</span></label>
                              <div class="col-sm-8 col-xs-12">
                                <textarea class="form-control" rows="3" id="textArea" placeholder="Tên hàng hoá-mã số hàng hoá-số lượng sản phẩm ..."></textarea>
                              </div>
                            </div>

                            <div class="form-group">
                              <label for="inputPhonenumber" class="col-sm-4 control-label">Khối lượng(g)<span style="color:red;">(*)</span></label>
                              <div class="col-sm-8 col-xs-12">
                                <input type="number" class="form-control input-sm" id="inputPhonenumber" placeholder="Điền số cân nặng">
                              </div>
                            </div>
                            <div class="quydoi">
                              <label for="inputPhonenumber" class=" control-label">Kích thước (cm) - quy đổi ra khối lượng (g) :</label>
                              <table class="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Dài x Rộng x Cao (cm) </th>
                                    <th>Quy đổi</th>
                                    <th>Khối lượng quy đổi (g)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td><input id="dai" type="text" style="width:50px"> x <input id="rong" type="text" style="width:50px"> x <input id="cao" type="text" style="width:50px"></td>
                                    <td>/6000</td>
                                    <td>=<span id="kqua">...</span></td>
                                  </tr>


                                </tbody>
                              </table>
                            </div>
                            <div class="form-group">
                              <label for="inputName" class="col-sm-4 control-label">Lưu ý </label>
                              <div class="col-sm-8 col-xs-12">
                                <textarea class="form-control" rows="3" id="textArea" placeholder="Quý khách có ghi chú gì cho hàng hoá, vui lòng ghi lại đây, tối đa 100 ký tự ..."></textarea>
                              </div>
                            </div>

                          </fieldset>
                        </form>
                      </div>

                      <div class="col-sm-6 col-xs-12" style="border-bottom:1px solid #ecf0f1;">
                        <h3><span class="red">3</span>GÓI DỊCH VỤ GIAO HÀNG</h3>
                        <div class="chonlua">

                          <table class="table table-bordered">

                            <tbody>
                              <tr>
                                <td>
                                  <div class="radio">
                                    <label>
                                                              <input type="radio" name="optiongoivanchuyen" id="optiongoivanchuyen" value="option1" checked="">
                                                              Gói 6 tiếng
                                                      </label><br><a href="#">(chi tiết)</a>
                                  </div>
                                </td>
                                <td>
                                  <div class="radio">
                                    <label>
                                                              <input type="radio" name="optiongoivanchuyen" id="optiongoivanchuyen" value="option2" checked="">
                                                              Gói qua ngày
                                                      </label><br><a href="#">(chi tiết)</a>
                                  </div>
                                </td>
                                <td>
                                  <div class="radio">
                                    <label>
                                                              <input type="radio" name="optiongoivanchuyen" id="optiongoivanchuyen" value="option3" checked="">
                                                              Gói tiết kiệm
                                                      </label><br><a href="#">(chi tiết)</a>
                                  </div>
                                </td>
                                <td>
                                  <div class="radio">
                                    <label>
                                                              <input type="radio" name="optiongoivanchuyen" id="optiongoivanchuyen" value="option4" checked="">
                                                              Gói siêu tốc
                                                      </label><br><a href="#">(chi tiết)</a>
                                  </div>
                                </td>
                                <td>
                                  <div class="radio">
                                    <label>
                                                              <input type="radio" name="optiongoivanchuyen" id="optiongoivanchuyen" value="option5" checked="">
                                                              Gói giao tối
                                                      </label><br><a href="#">(chi tiết)</a>
                                  </div>
                                </td>
                              </tr>


                            </tbody>
                          </table>
                          <div class="col-sm-12"><span style="color:#e74c3c;">THỜI ĐIỂM GIAO HÀNG DỰ KIẾN: | Ngày:</span> <span class="" id="time"> ...</span></div>
                          <span style="color:#95a5a6;font-style:italic">( Kể từ thời điểm chúng tôi xác nhận đơn hàng này )</span>
                        </div>
                      </div>
                      <div class="col-sm-6 col-xs-12 ">
                        <h3><span class="red">4</span>THÔNG TIN CƯỚC VÀ TIỀN THU HỘ </h3>
                        <div class="ketquacuoc">

                          <table class="table table-bordered">
                            <thead>
                              <thead>
                                <tr>
                                  <th>NGƯỜI TRẢ TIỀN </th>
                                  <th>NGƯỜI GỬI</th>
                                  <th>NGƯỜI NHẬN</th>
                                </tr>
                              </thead>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  Cước giao hàng
                                </td>
                                <td>
                                  <label>
                                                              <input type="radio" name="optionnguoitra" id="optionnguoitra" value="option1" checked="">
                                                              Người gửi trả
                                                  </label>
                                </td>
                                <td>
                                  <label>
                                                              <input type="radio" name="optionnguoitra" id="optionnguoitra" value="option2" checked="">
                                                              Người nhận trả
                                                  </label>
                                </td>

                              </tr>
                              <tr>
                                <td>
                                  Giá trị đơn hàng
                                </td>
                                <td>

                                  <input type="text" style="width:100px">


                                </td>
                                <td>

                                </td>

                              </tr>
                              <tr>
                                <td>
                                  Phí khai giá
                                </td>
                                <td>
                                  = <span class="ketqua"> </span>
                                </td>
                                <td>

                                </td>

                              </tr>
                              <tr>
                                <td>
                                  Tiền thu hộ
                                </td>
                                <td>

                                </td>
                                <td>
                                  <input type="text" style="width:100px">
                                </td>

                              </tr>
                              <tr>
                                <td>
                                  Tổng cộng
                                </td>
                                <td>
                                  <span class="ketquatongcong">0.0</span>
                                </td>
                                <td>

                                </td>

                              </tr>


                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </collapse>


              <!-- END OF TEMPLATE DON -->
            </div>

          </div> 
          <button class="btn btn-sm btn-info btn-add-panel"> <i class="glyphicon glyphicon-plus"></i> Tạo thêm đơn hàng</button>
          <button type="submit" class="btn btn-warning pull-right"><i class="fa fa-fighter-jet " aria-hidden="true"></i> GỬI ĐƠN HÀNG</button>
        </div>

      </div>
</template>
<script>
import {Collapse} from 'uiv'

export default {
  name: 'multi-order',
  components: {
    Collapse
  },
  data () {
    return {
      showAccordion: true
    }
  }
}
</script>
<style>

</style>

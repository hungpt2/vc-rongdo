<template>
    <div class="nav-side-menu ">
        <div class="brand">CHỨC NĂNG</div>
        <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

        <div class="menu-list">

            <ul id="menu-content" class="menu-content collapse out active">
                <router-link to="tao-don-hang-nhanh" exact-active-class="active" tag="li" data-toggle="collapse" data-target="#products" class="collapsed">
                    <a>
                      <div>
                      <i class="fa fa-cart-plus fa-lg"></i> TẠO ĐƠN HÀNG <span class="arrow"></span>
                      </div>
                     </a>
                </router-link>
                <ul class="sub-menu collapse in" id="products">
                    <router-link to="tao-don-hang-nhanh" tag="li" exact-active-class="active"><a>Tạo nhanh đơn hàng</a></router-link>
                    <!--<li class="active"><router-link to="tao-don-hang-nhanh"></router-link></li>-->
                    <router-link to="tao-nhieu-don-hang" tag="li" exact-active-class="active"><a>Tạo nhiều đơn hàng</a></router-link>
                    <li><a href="#">Import đơn hàng (.xls)</a></li>
                </ul>
                <router-link to="danh-sach-don-hang" tag="li" exact-active-class="active">
                  <a>
                    <div>
                    <i class="fa fa-tasks fa-lg"></i> QUẢN LÝ ĐƠN HÀNG
                    </div>
                  </a> 
                </router-link>
                <router-link to="dia-chi-lay-hang" tag="li" exact-active-class="active">
                    <a>
                      <div>
                        <i class="fa fa-map-o fa-lg"></i> QUẢN LÝ ĐỊA CHỈ LẤY HÀNG
                      </div>
                    </a>
                </router-link>
                <router-link to="tien-thu-ho" tag="li" exact-active-class="active">
                    <a>
                      <div>
                        <i class="fa fa-money fa-lg"></i> QUẢN LÝ THU TIỀN HỘ
                      </div>
                    </a>
                </router-link>
                <router-link to="tai-khoan" tag="li" exact-active-class="active" data-toggle="collapse" data-target="#service" class="collapsed">
                    <a href="#"><i class="fa fa-user-o fa-lg"></i> QUẢN LÝ TÀI KHOẢN<span class="arrow"></span></a>
                </router-link>
                <ul class="sub-menu collapse in" id="service">
                    <router-link to="tai-khoan" tag="li" exact-active-class="active">Thông tin tài khoản</router-link>
                    <li>Đổi mật khẩu</li>
                    <li>Thoát khỏi tài khoản</li>
                </ul>
                <li>
                    <a href="#">
                        <i class="fa fa-envelope-o fa-lg"></i> GỬI YÊU CẦU
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'side-nav'
  }
</script>
<style>
</style>

<template>
  <div id="app">
    <pale-header></pale-header>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <pale-footer></pale-footer>
    <notifications group="global" style="margin-top: 30px;"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import User from '@/blocks/api/user'
import PaleHeader from '@/components/Header'
import PaleFooter from '@/components/Footer'

export default {
  name: 'app',
  components: {
    PaleHeader,
    PaleFooter
  },
  mixins: [User],
  computed: mapGetters([
    'isLoggedIn',
    'token',
    'user'
  ]),
  created () {
    let token = localStorage.getItem('token')
    if (token) {
      this.$store.commit('SET_TOKEN', token)
      this.$setToken(this.token)
      // this.$store.commit('REFRESH_USER')
      // if (!this.user.id) {
      this.getUser()
      // }
    }
  }
}
</script>

<style>
  .slide-fade-enter-active {
    transition: all .15s ease;
  }
  .slide-fade-leave-active {
    transition: all .15s cubic-bezier(2.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(-10px);
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
  .list-complete-item {
    transition: all 1s;
    margin-right: 10px;
  }
  .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }

  .outer-l-small {
    margin-left: 5px;
  }
  .outer-t-small {
    margin-top: 5px;
  }
  .outer-t-medium {
    margin-top: 10px;
  }
  .cursor-pointer:hover {
    cursor: pointer;
  }
  .float-left {
    float: left;
  }
  .float-right {
    float: right;
  }
  .error-color {
    color: red;
  }
  .pagination>li>a {
    background-color: #e74c3c;
  }
  .pagination>.disabled>a, .pagination>.disabled>a:hover {
    background-color: #e74c3c;
  }
  .pagination>.active>a, .pagination>.active>span, .pagination>.active>a:hover, .pagination>.active>span:hover {
     background-color: #b53a2d;
  }
  .pagination>li>a:hover, .pagination>li>span:hover{
    background-color: #b53a2d;
  }
  .custom-notification {
    margin-top: 30px;
  }
</style>

<template>
  <div class="box">
    <div class="cloud-wrap">
      <img src="../../assets/imgs/cloud.png" alt=""/>
      <span class="title">{{week}}</span>
    </div>
    <div class="center-pic"></div>
    <router-link to='/item' tag="div" class="btn"></router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState(['week'])
  },
  created: function () {
    this.$store.commit('INIT_DATA')
  }
}
</script>

<style scoped>
.cloud-wrap{position:absolute;top:0;right:3rem;width:6.7rem;text-align:center;}
.cloud-wrap img{width:100%;}
.title{position:absolute;bottom:2.2rem;color:#a57c50;display:block;width:100%;font-size:1rem;}
.center-pic{position:absolute;top:12rem;left:3rem;width:27.3rem;height:24.1rem;background:url("../../assets/imgs/center.png");background-size:100% 100%;}
.btn{width:9rem;height:4.3rem;position:absolute;bottom:20rem;left:50%;transform:translateX(-50%);-webkit-transform:translateX(-50%);background:url("../../assets/imgs/btn-bg.png");background-size:100% 100%;}
</style>

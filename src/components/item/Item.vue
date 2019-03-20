<template>
  <div class="box">
    <div class="cloud-wrap">
      <img src="../../assets/imgs/cloud.png" alt=""/>
      <span class="title">第{{num}}题</span>
    </div>
    <div class="center-pic item-box">
      <header>{{itemDetail[num-1].topic_name}}</header>
      <ul>
        <li :class="nowselect==index?'selected':''" v-for="(item, index) in itemDetail[num-1]['topic_answer']" :key="index" @click="itemtap(index, item.topic_answer_id)">
          <i class="circle">{{map(index)}}</i>{{item.answer_name}}
        </li>
      </ul>
    </div>
    <div class="btn" @click="nexttap" v-if="num!=itemDetail.length"></div>
    <div v-else class="btn btn-submit" @click="submittap"></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import bg from '@/assets/imgs/bg.jpg'
export default {
  name: 'Item',
  created: function () {
    // 如果不设置当从得分返回来背景图就不正确
    document.body.style.backgroundImage = `url(${bg})`
  },
  data () {
    return {
      nowselect: '-1', // 当前被选中的索引
      id: '' // 当前被选中的id
    }
  },
  methods: {
    // 点击题目对应的答案
    itemtap: function (index, id) {
      this.nowselect = index
      this.id = id
    },
    // 点击下一题
    nexttap: function () {
      if (this.id === '') {
        alert('请选择对应的答案')
        return
      }
      this.$store.commit('PUSH_ANSWER', this.id)
      // 初始化选中的题
      this.nowselect = '-1'
      this.id = ''
    },
    // 点击提交
    submittap: function (id) {
      this.$store.commit('PUSH_ANSWER', this.id)
      // 跳转到得分页面
      this.$router.push('/score')
    },
    // 映射A B C D
    map: function (index) {
      switch (index) {
        case 0: return 'A'
        case 1: return 'B'
        case 2: return 'C'
        default: return 'D'
      }
    }
  },
  computed: {
    ...mapState(['num', 'itemDetail']) // num表示第几题，itemDetail表示全部题目集合
  }
}
</script>

<style scoped>
  .cloud-wrap{position:absolute;top:0;right:3rem;width:6.7rem;text-align:center;}
  .cloud-wrap img{width:100%;}
  .title{position:absolute;bottom:2.2rem;color:#a57c50;display:block;width:100%;font-size:1rem;}
  .center-pic{position:absolute;top:12rem;left:3rem;width:27.3rem;height:24.1rem;background:url("../../assets/imgs/item-bg.png");background-size:100% 100%;}
  .btn{width:9rem;height:4.3rem;position:absolute;bottom:20rem;left:50%;transform:translateX(-50%);-webkit-transform:translateX(-50%);background:url("../../assets/imgs/nextbtn.png");background-size:100% 100%;}
  .btn-submit{background-image:url("../../assets/imgs/submit.png");}
  .item-box{padding:4rem 3rem 3rem 6rem;box-sizing: border-box;}
  .item-box header{font-size:1.4rem;color:#fff;margin-bottom:1rem;}
  .item-box li{color:#fff;font-size:1.2rem;line-height:1.5rem;margin-bottom:1rem;}
  .circle{display:inline-block;vertical-align:bottom;width:15px;height:15px;text-align:center;line-height:15px;font-size:1rem;border-radius:50%;border:1px solid #ddd;margin-right:0.8rem;}
  .selected .circle{border-color:#83f0ba;background:#83f0ba;}
</style>

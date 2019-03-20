<template>
    <div class="score">
      <div class="top">
        <span class="word">{{score}}分</span>
      </div>
    </div>
</template>

<script>
import bg from '@/assets/imgs/score-bg.jpg'
import {mapState} from 'vuex'
export default {
  name: 'Score',
  created: function () {
    document.body.style.backgroundImage = `url(${bg})`
    // 计算分数
    this.calscore()
  },
  data: function () {
    return {
      score: 0, // 最后得分
      rightAnswer: [2, 7, 12, 13, 18] // 正确答案
    }
  },
  methods: {
    calscore: function () {
      this.answerid.forEach((item, i) => {
        if (item === this.rightAnswer[i]) {
          this.score += 20
        }
      })
    }
  },
  computed: {
    ...mapState(['answerid'])
  }
}
</script>

<style scoped>
.score{overflow:hidden;}
.score .top{position:relative;width:20rem;height:19rem;background:url(../../assets/imgs/score-top.png);background-size:100% 100%;margin: 10rem auto;}
.score .word{position:absolute;top:10rem;color:#a51d31;font-size:3.6rem;font-weight:bold;-webkit-text-stroke:0.1rem #000;display:block;width:100%;text-align:center;}
</style>

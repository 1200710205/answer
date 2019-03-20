const PUSH_ANSWER = 'PUSH_ANSWER'
const INIT_DATA = 'INIT_DATA'
export default {
  // 放所有选中的答案以及更改第几题
  [PUSH_ANSWER] (state, id) {
    state.answerid.push(id)
    // 最后一题的时候不++
    if (state.num < state.itemDetail.length) {
      state.num++
    }
  },
  // 初始化数据，当记录后返回首页，如果不初始到上次停留的地方
  [INIT_DATA] (state) {
    state.num = 1
    state.answerid = []
  }
}

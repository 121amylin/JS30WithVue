new Vue({
  el: '#app',
  data() {
    return {
      signal: [38, 38, 40, 40, 37, 39, 37, 39],
      inputArr: []
    }
  },
  methods: {
    //方法一
    inputHandle(e) {
      this.inputArr.push(e.keyCode)
      this.inputArr.splice(-this.signal.length - 1, this.inputArr.length - this.signal.length)
      if (this.inputArr.join("|") === this.signal.join("|")) {
        cornify_add();
      }
    },
    //方法二
    // inputHandle(e) {
    //   this.inputArr.push(e.keyCode)
    //   console.log(this.inputArr)
    //   if (this.inputArr.length >= this.signal.length) {
    //     this.inputArr = this.inputArr.splice(-this.signal.length, this.signal.length)
    //   }
    //   if (this.inputArr.join("|") === this.signal.join("|")) {
    //     cornify_add();
    //   }
    // }
  }
})
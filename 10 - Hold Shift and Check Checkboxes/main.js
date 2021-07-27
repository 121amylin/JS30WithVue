new Vue({
  el: '#app',
  data() {
    return {
      list: null, 
      shiftStart: null, //起始位置
      shiftEnd: null, //結束位置
    }
  },
  methods: {
    oneCheckHandle(id) {
      this.list[id].check = !this.list[id].check
    },
    shiftCheckHandle(id) {
    
      if (!this.shiftStart) { //如果是第一次點擊連選=>紀錄起始位置
        this.shiftStart = id  
      } else if (this.shiftStart) {
        
        if (this.shiftStart > id)  { //如果第二次點擊的項目在第一次點擊的下面，記錄結束位置
          this.shiftEnd = id

        } else { //如果第二次點擊的項目在第一次點擊的上面，將起始位置紀錄為結束位置，並另外記入起始位置
          this.shiftEnd = this.shiftStart
          this.shiftStart = id
        }

        //依起始位置、結束位置 遍歷
        for (let i = this.shiftStart + 1; i < this.shiftEnd; i++) {
          this.list[i].check = true
        }

      }
    }

  },
  //獲取API
  mounted() {
    fetch('db.json').then(res => res.json()).then(result => {
      result.forEach(item => {
        item.check = false
      });
      this.list = result
    })
  }
})
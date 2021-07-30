new Vue({
  el: "#app",
  data() {
    return {
      items: null,
      newValue: ''
    }
  },
  computed: {
    hasItem() {
      return this.items === [] ? false : true
    }
  },
  methods: {
    //增加項目
    addItem() {
      if (!this.newValue) {
        alert("請填寫內容")
        return
      }
      this.items.push({
        text: this.newValue,
        done: false
      })
      this.updateLocalStorage(this.items)
      this.newValue = ''
    },
    //修改完成狀態
    changeCheck(id) {
      this.items[id].done = !this.items[id].done
      this.updateLocalStorage(this.items)
    },
    //更新localStorage
    updateLocalStorage(content){
      localStorage.setItem('items', JSON.stringify(content));
    }
  },
  mounted() {
    this.items = window.localStorage.items ? JSON.parse(window.localStorage.items) : []
  }
})
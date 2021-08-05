new Vue({
  el: "#app",
  data() {
    return {
      canDrag: false,
      startX: 0,
      endX: 0,
    };
  },
  methods: {
    staryHandle(e) {
      this.canDrag = true;
      this.startX = e.pageX;
      this.endX = this.$refs.listBox.scrollLeft;
    },
    startDrag() {
      this.canDrag = false;
    },
    dragIng(e) {
      if (this.canDrag) {
        let X = e.pageX - this.startX;
        this.$refs.listBox.scrollLeft = this.startX - X * 5;
      }
    },
  },
});

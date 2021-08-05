new Vue({
  el: "#app",
  data() {
    return {
      startX: 0,
      startScroll: 0,
      canDrag: false,
    };
  },
  methods: {
    startDrag(e) {
      this.canDrag = true;
      this.startX = e.pageX;
      this.startScroll = this.$refs.listBox.scrollLeft;
      console.log(e.pageX);
    },
    stopDrag() {
      this.canDrag = stopDrag;
    },
    dragHandler(e) {
      if (this.canDrag) {
        let move = e.pageX - this.startX;
        this.$refs.listBox.scrollLeft = this.startScroll - move * 5;
        console.log(e.pageX);
      }
    },
  },
});

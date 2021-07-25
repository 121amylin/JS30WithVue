new Vue({
  el: "#app",
  data() {
    return {
      soundData,
      nowCode: null,
    };
  },
  methods: {
    //播放聲音
    playSound(code) {
      if (!this.$refs[`id${code}`]) return;
      this.$refs[`id${code}`][0].currentTime = 0;
      this.$refs[`id${code}`][0].play();
    },
    //使用者介面按鍵變量亮效果__觸發
    openLight(e) {
      this.nowCode = e;
    },
    //使用者介面按鍵變暗效果__觸發完成
    closeLight() {
      this.nowCode = null;
    },
    //監聽鍵盤事件
    watchKeydown(e) {
      this.playSound(e.keyCode);
      this.openLight(e.keyCode);
    },
  },
});

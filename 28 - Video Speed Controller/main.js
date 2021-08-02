new Vue({
  el: "#app",
  data() {
    return {
      playbackRate: 1, //影片播放速率
      min_playbackRate: 0.5, //最小影片播放速率
      max_playbackRate: 5 //最大影片播放速率
    }
  },
  computed: {
    stylePercent() {
      return (this.min_playbackRate / this.max_playbackRate * this.playbackRate) * 200 // *200轉為百分比
    }
  },
  methods: {
    playbackRateHandle(e) {
      let noeH = e.offsetY
      let H = this.$refs.speed_box.offsetHeight
      let percent = noeH / H
      this.playbackRate = (percent * (this.max_playbackRate - this.min_playbackRate) + this.min_playbackRate).toFixed(1)
      this.$refs.video.playbackRate = this.playbackRate;
    }
  }
})
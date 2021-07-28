new Vue({
  el: "#app",
  data() {
    return {
      isPlay: false, //
      volume_value: 0.5,
      playbackRate_value: 6,
      timer: null,
      playnowStyle: null,
      ischangeProgress: false,
    };
  },
  computed: {
    videoState() {
      return this.isPlay === true ? "play" : "pause";
    },
    videoIcon() {
      return this.isPlay === true ? "►" : "❚ ❚";
    },
    getvideoLength() {
      if (this.isPlay === true) {
        return this.$refs.video.duration;
      }
    },
  },
  methods: {
    // 快進操作
    fastForwardHandle(time) {
      this.$refs.video.currentTime += time;
    },
    //撥放/暫停操作
    togglePlay() {
      this.isPlay = !this.isPlay;
      this.$refs.video[this.videoState]();
      if (this.isPlay) {
        this.timerOpen();
      } else {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    timerOpen() {
      this.timer = window.setInterval(() => {
        this.playnowStyle =
          (this.$refs.video.currentTime / this.getvideoLength) * 100;
      }, 200);
    },
    //音量、速度範圍操作
    rangeHandle(type) {
      this.$refs.video[`${type}`] = this[`${type}_value`];
    },
    //開啟撥放位置更改操作
    ischangeProgressHandle(e) {
      this.ischangeProgress = true;
      this.progressBarHandle(e);
    },
    //關閉撥放位置更改操作
    choseChangeProgressHandle() {
      this.ischangeProgress = false;
    },
    //撥放位置更改
    progressBarHandle(e) {
      if (this.ischangeProgress) {
        const scrubTime =
          (e.offsetX / this.$refs.video.offsetWidth) * this.getvideoLength;
        if (this.$refs.video.currentTime) {
          this.$refs.video.currentTime = scrubTime;
        }
      }
    },
  },
  mounted() {
    this.$refs.video[this.videoState]();
    this.videoimer = this.getvideoLength;
  },
});

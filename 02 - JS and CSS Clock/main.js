new Vue({
  el: "#app",
  data() {
    return {
      nowData: new Date(),
    };
  },
  computed: {
    getSeconds() {
      return this.nowData.getSeconds();
    },
    getMin() {
      return this.nowData.getMinutes();
    },
    getHour() {
      return this.nowData.getHours() % 12;
    },
    secondsDeg() {
      console.log(this.getSeconds);
      let deg = this.getSeconds * 6 + 30;
      return { transform: "rotate(" + deg + "deg)" };
    },
    minDeg() {
      let deg = this.getMin * 6 + 30 + (this.getSeconds / 60) * 6;
      return { transform: "rotate(" + deg + "deg)" };
    },
    hourDeg() {
      let deg = this.getHour * 30 + 30 + (this.getMin / 60) * 30;
      return { transform: "rotate(" + deg + "deg)" };
    },
  },
  methods: {
    openTimer() {},
  },
  mounted() {
    window.setInterval(() => {
      this.nowData = new Date();
    }, 1000);
  },
});

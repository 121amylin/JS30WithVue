new Vue({
  el: "#app",
  data() {
    return {
      timer_Item: [
        {
          id: 1,
          text: "20 Secs",
          time: 20,
        },

        {
          id: 2,
          text: "Work 5",
          time: 300,
        },

        {
          id: 3,
          text: "Quick 15",
          time: 900,
        },
        {
          id: 4,
          text: "Snack 20",
          time: 1200,
        },
        {
          id: 5,
          text: "Lunch Break",
          time: 3600,
        },
      ],
      setTime: false, //設置倒數秒數
      countdownTime: false, //倒數剩餘秒數
      timer: null, //定時器
      inputTime: null, //輸入框設置分鐘數
    };
  },
  computed: {
    //獲取當前時間
    nowTime() {
      return new Date();
    },

    //獲取完成的時間_時
    atTime_H() {
      let result =
        Math.floor((this.setTime + this.nowTime.getSeconds()) / 3600) +
        this.nowTime.getHours();
      return result > 12 ? result - 12 + ":" : result + ":";
    },
    //獲取完成的時間_分
    atTime_M() {
      let result =
        Math.floor((this.setTime + this.nowTime.getSeconds()) / 60) +
        this.nowTime.getMinutes();
      return result > 60 ? result - 60 : result;
    },
    //獲取剩餘的時間_分
    countdownTime_M() {
      if (!this.setTime) return;
      let result = Math.floor(this.countdownTime / 60);
      return result >= 10 ? result + ":" : "0" + result + ":";
    },

    //獲取剩餘的時間_秒
    countdownTime_S() {
      if (!this.setTime) return;
      let result = this.countdownTime % 60;
      return result > 10 ? result : "0" + result;
    },
  },
  methods: {
    //自定義倒數時間設置
    inputHandle() {
      this.timerHandle(this.inputTime * 60);
      this.inputTime = null;
    },
    //倒數時間設置
    timerHandle(time) {
      clearInterval(this.timer);
      this.setTime = time;
      this.countdownTime = time;
      this.timeHandle();
    },
    //倒數計時器
    timeHandle() {
      this.timer = setInterval(() => {
        if (this.countdownTime) {
          this.countdownTime--;
        }
      }, 1000);
    },
  },
});

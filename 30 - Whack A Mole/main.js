new Vue({
  el: "#app",
  data() {
    return {
      score: 0,
      holesLength: 6,
      lastHole: null,
      timeUp: false,
      lastHole: null,
      nowID: null,
    };
  },
  methods: {
    randomTime(min, max) {
      Math.round(Math.random() * (max - min) + min);
    },
    randomHole() {
      this.nowID = Math.floor(Math.random() * this.holesLength) + 1;
      if (this.nowID === this.lastHole) {
        console.log("Ah nah thats the same one bud");
        return this.randomHole();
      }
      this.lastHole = this.hole;
      return this.hole;
    },
    peep() {
      const time = this.randomTime(200, 1000);
      // console.log(this.$refs[`hole${this.nowID}`][0]);
      this.$refs[`hole${this.nowID}`][0].classList.add("up");

      setTimeout(() => {
        this.$refs[`hole${this.nowID}`][0].classList.remove("up");
        if (!this.timeUp) this.peep();
      }, time);
    },
    startGame() {
      this.score = 0;
      this.timeUp = false;
      this.randomHole();
      this.peep();
      setTimeout(() => {
        this.timeUp = true;
        alert("遊戲結束!!");
      }, 10000);
    },
    bonk(e) {
      if (!e.isTrusted) return; // cheater!
      this.score++;
      this.$refs[`hole${this.nowID}`][0].classList.remove("up");
      this.randomHole();
    },
  },
});

new Vue({
  el:'#app',
  data() {
    return {
      spacingValue: 0,
      blurValue: 0,
      bgColor: "#ffc600",
    };
  },
  computed:{
    style(){
      return {
        filter: "blur(" + this.blurValue + "px)",
        padding: this.spacingValue + "px",
        background: this.bgColor,
      };
    }
  }
})
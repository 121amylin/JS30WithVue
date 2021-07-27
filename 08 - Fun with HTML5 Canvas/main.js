new Vue({
  el: '#draw',
  data() {
    return {
      isDrawing: false,
      lastX: 0,
      lastY: 0,
      hue: 0,
      direction: true,
    }
  },
  methods: {
    openDraw() {
      this.isDrawing = true
    },
    Draw(e) {
      if (!this.isDrawing) return
      const ctx = this.$refs.canvas.getContext('2d');
      ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
      ctx.beginPath();
      ctx.moveTo(this.lastX, this.lastY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();

      //變換設置筆畫起始位置
      [this.lastX, this.lastY] = [e.offsetX, e.offsetY];

      //畫筆顏色變換
      this.hue++;
      if (this.hue >= 360) {
        this.hue = 0;
      }
      if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        this.direction = !this.direction;
      }


      //畫筆粗細變換
      if (this.direction) {
        ctx.lineWidth++;
      } else {
        ctx.lineWidth--;
      }
    },
    closeDraw() {
      this.isDrawing = false
    }
  },
  //初始化canvas
  mounted() {
    //獲取canvas DOM
    let canvas = this.$refs.canvas
    //創建 2D canvas 渲染環境
    const ctx = canvas.getContext('2d');
    //畫布滿版設置
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //線條交接處樣式
    ctx.lineJoin = 'round';
    //筆畫末端樣式
    ctx.lineCap = 'round';
    //畫筆粗細
    ctx.lineWidth = 100;
  }
})
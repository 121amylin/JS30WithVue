function shadow(e) {
  const walk = 500; // 500px
  const { innerWidth: width, innerHeight: height } = window;

  let { offsetX: x, offsetY: y } = e;

  //補座標
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

    // const xWalk = Math.floor((x / width) * walk )* 2 - walk;
    // const yWalk = Math.floor((y / height) * walk)* 2 - walk;

  //textShadow: x y 模糊 顏色
  e.target.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
}

new Vue({
  el: "#app",
  mounted() {
    //監聽的是hero ( 最外層 )
    this.$refs.hero.addEventListener("mousemove", (e) => shadow(e));
  }
})
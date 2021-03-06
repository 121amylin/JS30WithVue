function shadow(e) {
  const walk = 500; // 500px
  const { innerWidth: width, innerHeight: height } = window;

  let { offsetX: x, offsetY: y } = e;

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

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
    //監聽的是text( 產陰影的物件本身 )
    this.$refs.shadowObj.addEventListener('mousemove', (e) => shadow(e))
  }
})
function shadow(e) {
  const walk = 500; // 500px
  const {
    innerWidth: width,
    innerHeight: height
  } = window;

  let {
    offsetX: x,
    offsetY: y
  } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

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
    this.$refs.shadowObj.addEventListener('mousemove', (e) => shadow(e))
  }
})
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      // if (!immediate)
      func.apply(context, args);
    };
    if (timeout) return;
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

new Vue({
  el: "#app",
  methods: {},
  mounted() {
    let picArr = document.querySelectorAll("img");

    function scrollAm() {
      picArr.forEach((pic) => {
        let initHeight_M = pic.offsetTop + pic.height / 2;
        let initHeight_B = window.scrollY + window.innerHeight;
        if (initHeight_M<initHeight_B && window.scrollY < initHeight_M
        ) {
          pic.classList.add("active");
        } else {
          pic.classList.remove("active");
        }
      });
    }

    window.addEventListener("scroll", debounce(scrollAm));
  },
});

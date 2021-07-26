//資料處理
const newPanelsDate = panelsDate.map((item) => {
  let obj = item;
  obj.class = `panel${obj.id + 1}`;
  obj.isOPen = false;
  return obj;
});

new Vue({
  el: "#app",
  data() {
    return {
      newPanelsDate,
    };
  },
  methods: {
    taggleIsOpen(id) {
      let e = this.$refs[`panels${id}`][0];
      e.classList.toggle("open");
      let timer = setTimeout(() => {
        e.classList.toggle("open-active");
      }, 800);
      clearTimeout(timer);
    },
  },
});

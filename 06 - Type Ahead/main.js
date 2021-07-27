const API =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

new Vue({
  el: "#app",
  data() {
    return {
      APIdata: null,
      nowValue: ""
    }
  },
  computed: {
    filterData() {
      return this.APIdata.filter(item => {
        const regex = new RegExp(this.nowValue, 'gi');
        return item.city.match(regex) || item.state.match(regex)
      });
    },
  },
  //讀取API與資料處理
  mounted() {
    fetch(API).then(res => res.json()).then(result => {
      result.forEach(item => {
        item.LocaleStringPopulation = (item.population * 1).toLocaleString()
      });
      this.APIdata = result
    })
  },

})
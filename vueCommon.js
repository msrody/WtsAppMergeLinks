const url = "https://api.steinhq.com/v1/storages/5d81e49d95caec04c53f7093/Data";  
const vm = new Vue({
  el: '#MediaData',
  data: {
    mediadata: []
  },
  mounted() {
      axios.get(url).then(response => {
        this.mediadata = response.data
      })
    }
});
/*
const urll = "https://api.steinhq.com/v1/storages/5d81e49d95caec04c53f7093/PageOptions";  
const vml = new Vue({
  el: '#PageOptions',
  data: {
    links: []
  },
  mounted() {
      axios.get(urll).then(response => {
        this.links = response.data
      })
    }
});
*/
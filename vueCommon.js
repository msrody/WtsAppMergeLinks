const url = "https://script.google.com/macros/s/AKfycbwynuqMjvvzdpClj54uiWKEFFtTfZirFAlbFu8kJ1GTa4FsPTtu/exec";  
const vm = new Vue({
  el: '#MediaData',
  data: {
    linkdata: []
  },
  mounted() {
      axios.get(url).then(response => {
        this.linkdata = response.data
      })
    }
});
/*
const urll = "https://api.steinhq.com/v1/storages/5d81e49d95caec04c53f7093/PageOptions";  
const vml = new Vue({
  el: '#PageOptions',
  data: {
    pgopts: []
  },
  mounted() {
      axios.get(urll).then(response => {
        this.pgopts = response.data
      })
    }
});
*/

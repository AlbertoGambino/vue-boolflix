function initVue() {

  new Vue({
        el: '#app',
        data: {

          search:'',
          movies:[],
        },
        methods: {
          searchFunction: function(){

            axios.get('https://api.themoviedb.org/3/search/movie',{

                params: {

                  'api_key': '3d057365a654ef0eb46f8c59fd2e6a5b',
                  'query': this.search
                }
            })
                .then(data => {

                    this.movies = data.data.results;

                    console.log(this.movies);
                    return this.movies


              })
              .catch(() => console.log('error'));
          }

      },



})

}

function init() {

  initVue();

}

document.addEventListener('DOMContentLoaded', init);

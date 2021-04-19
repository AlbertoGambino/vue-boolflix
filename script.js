function initVue() {

  new Vue({
        el: '#app',
        data: {

          search:'',
          movies:[],
          series:[]
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

              axios.get('https://api.themoviedb.org/3/search/tv',{

                  params: {

                    'api_key': '3d057365a654ef0eb46f8c59fd2e6a5b',
                    'query': this.search
                  }
              })
                  .then(data => {

                      this.series = data.data.results;

                      console.log(this.series);
                      return this.series


                })
                .catch(() => console.log('error'));
          },
          bandiera: function(language){

            if(language == 'en'){

              return 'bandieraen.png'

            } else if (language == 'it') {

              return 'bandierait.png'

            }else {

              return false 
            }
          }

      },



})

}

function init() {

  initVue();

}

document.addEventListener('DOMContentLoaded', init);

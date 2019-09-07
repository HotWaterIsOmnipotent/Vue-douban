<template>
  <div
   class="movie-box"
   v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10" 
  >
      <div class = 'loading' v-if = 'movies.length === 0'></div>
      <movieItem
        v-for = "movie in movies"
        :key = "movie.id"
        :movie = 'movie' 
        v-else
      ></movieItem>
  </div>
</template>

<script>
import movieItem from './movieItems';
import { Toast } from 'mint-ui';
export default {
    activated(){
        this.loading = false;
    },
    deactivated(){
        this.loading = true;
    },
    props:["type"],
    watch:{
        type(val){
            this.page = 1;
            this.isFinish = true;
            this.movies = [];
            this.getMovies();
        }
    },
    methods:{
        loadMore(){
            if(!this.isFinish){
                Toast({
                    message: '我是有底线的！',
                    iconClass: 'fa fa-times-rectangle',
                    duration:1000,
                    // position:'bottom'
                });
                this.loading = true;
                return false;
            }
            
            this.getMovies()
        },
        getMovies(){
            let {page, limit} = this;
            this.loading = true;

            let instance = Toast({
                message: 'loading...',
                iconClass: 'fa fa-spinner fa-pulse'
            });

            this.$http.get('/api/db/'+ this.type, {
                params:{
                    page, 
                    limit
                }
            }).then((res)=>{
                instance.close();
                this.movies = this.movies.concat(res.data.object_list)
                
                this.loading = false;
                if(this.page * this.limit >= res.data.total){
                    this.isFinish = false;
                    return false;
                }
                this.page++;
            })
        }
    },
    components:{
        movieItem
    },
    data(){
        return {
            movies:[],
            loading:false,
            page:1,
            limit:6,
            isFinish:true
        }
    }
}
</script>

<style>
    .movie-box{
        margin-bottom:60px;
    }
</style>
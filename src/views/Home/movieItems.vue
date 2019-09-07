<template>
    <router-link class="movie-item" tag = "div" :to = "{name:'movieDetail', params:{id:movie.id}}">
        <aside class="left">
          <img v-lazy="getImages(movie.images.small)" alt="">
      </aside>
      <aside class="right">
          <p>{{movie.title}}</p>
          <p>导演：{{movie.directors[0].name}}</p>
          <p>评分人数：{{movie.collect_count}}</p>
          <p>评分：<span>{{movie.rating.average}}</span></p>
      </aside>
    </router-link>
</template>

<script>
export default {
    props:{
        movie:{}
    },
    methods:{
        getImages(_url){
            if(_url !== undefined){
                let _u = _url.substring( 7 );
                return 'http://images.weserv.nl/?url=' + _u;
            }
        }
    }
}
</script>

<style lang = 'scss'>
    .movie-item{
        display: flex;
        border-bottom:1px solid #ccc;
        padding:0.1rem;
        margin:0 0.1rem;
        .right{
            display: flex;
            flex-direction: column;
            text-align: left;
            margin-left:0.2rem;
            p:first-child{
                /* font-size: 15px; */
                line-height: 22px;
                /* color: rgba(0,0,0,.9);
                font-weight: 700; */
                margin-bottom:0.2rem;
                font-size: 17px;
                color: #333;
                font-weight: 700;
            }
            p:nth-child(2){
                color: rgba(0,0,0,.5);
                font-size: 11px;
                line-height: 16px;
                margin-bottom:0.2rem;
            }
            p:nth-child(3){
                color: rgba(0,0,0,.5);
                font-size: 11px;
                line-height: 16px;
                margin-bottom:0.2rem;
            }
            p:last-child{
                color: rgba(0,0,0,.5);
                font-size: 11px;
                line-height: 15px;
                span{
                    font-size:18px;
                    color:orange;
                    font-weight: 700;
                }
            }
        }
        .left{
            width:1rem;
            img{
                width:1rem;
            }
        }
    }
</style>
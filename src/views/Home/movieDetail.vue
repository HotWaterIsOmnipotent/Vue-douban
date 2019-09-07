<template>
    <div v-if="!films" class="loading"></div>
    <div v-else class="movieDetail">
        <mt-header :title="films.title" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <img :src='getImages(films.images.small)' alt="">
        <p class='title'>{{films.title}}</p>
        <p>演员：</p>
        <div>
            <div v-for="cast in films.casts" :key="cast.id">
                <img :src="getImages(cast.avatars.small)" alt="">
                <p>{{cast.name}}</p>
            </div>
        </div>
        <div>{{films.summary}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                films: null,

            }
        },
        created() {
            this.$http.get("/api/db/movie_detail/" + this.$route.params.id).then(res => {
                console.log(res.data.images)
                this.films = res.data
            })
        },
        methods: {
            getImages(_url) {
                if (_url !== undefined) {
                    let _u = _url.substring(7);
                    return 'http://images.weserv.nl/?url=' + _u;
                }
            }
        }
    }
</script>

<style>

</style>
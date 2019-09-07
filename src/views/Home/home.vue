<template>
    <div class="home" :class = "{homeTop:isFixed}">
        <tabber></tabber>
        <banner></banner>
        <div class="navBox" :class = "{fixTop:isFixed}">
            <span 
            v-for = "nav in navs" 
            :key = "nav.id" 
            :class = '{active:type === nav.url}'
            @click = 'type = nav.url'
            >{{nav.title}}</span>
        </div>
        <movieBox :type = "type"></movieBox>
        <backTop></backTop>
    </div>
</template>

<script>
import tabber  from '@/components/Tabber';
import banner from '@/components/Banner';
import movieBox from './movieBox';
import backTop from './backTop'
export default {
    name:"home",
    methods:{
        handleScroll(e){
            let sTop = document.documentElement.scrollTop ||
            document.body.scrollTop;
            // console.log(sTop)
            if(sTop >= 225 && !this.isFixed){
                this.isFixed = true;
            }else if(sTop < 225 && this.isFixed){
                this.isFixed = false;
            }
        }
    },
    created(){
        // window.addEventListener("scroll", this.handleScroll)
    },
    beforeDestroy(){
        // window.removeEventListener("scroll", this.handleScroll)
    },
    activated(){
        window.addEventListener("scroll", this.handleScroll)
        window.scrollTo(0, this.homeTop);
    },
    deactivated(){
        window.removeEventListener("scroll", this.handleScroll)
        this.isFixed = false;
    },
    beforeRouteLeave(to, from, next){
        this.homeTop = document.documentElement.scrollTop ||
        document.body.scrollTop;
        next()
    },
    data(){
        return {
            type : 'in_theaters',
            isFixed : false,
            navs:[
                {id:1, title:"正在热映", url:"in_theaters"},
                {id:2, title:"即将上映", url:"coming_soon"}
            ]
        }
    },
    components:{
        tabber,banner,movieBox,backTop
    }
}
</script>

<style lang = 'scss'>
    .homeTop{
        margin-top:45px;
    }
    .navBox{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 44px;
        -webkit-box-pack: justify;
        justify-content: space-between;
        border-bottom: 1px solid #e6e6e6;
        padding: 0 0.5rem;
        background:#fff;
        width:100%;
        &.fixTop{
            position: fixed;
            top:0;
            z-index:10;
        }
        span{
            font-size: 15px;
            color: #666;
            width: 80px;
            width: 21.33333vw;
            text-align: center;
            margin: 0 12px;
            font-weight: 700;
            border-bottom:4px solid #fff;
            line-height: 39px;
        }
        .active{
            color: #42bd56;
            border-color:#42bd56;
        }
    }
</style>
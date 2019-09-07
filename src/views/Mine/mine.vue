<template>
    <div class="mine">
        <router-view></router-view>
        <mt-tabbar fixed>
            <mt-tabItem
                v-for="nav in navs"
                :key="nav.id"
            >
                <router-link active-class="active" :to="{name:nav.name}">
                    <i :class="['fa','fa-'+nav.icon]"></i>
                    <span>{{nav.title}}</span>
                </router-link>
            </mt-tabItem>
        </mt-tabbar>
    </div>
</template>

<script>
import tabber  from '@/components/Tabber'
export default {
    methods:{
        a(){
            console.log
        }
    },
    data(){
        return {
            navs:[
                {id:1,title:"列表",icon:"list",name:"list"},
                {id:2,title:"购物",icon:"shopping-cart",name:"car"}
            ]
        }
    },
    components:{
        tabber
        }
}
</script>

<style>
    .mint-tab-item{
        padding:18px 0;
    }
    .active{
        color:orange;
    }
</style>
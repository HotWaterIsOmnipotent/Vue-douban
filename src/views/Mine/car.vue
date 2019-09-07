<template>
    <div class="car">
        <router-link tag = 'div' v-if = "cars.length === 0" to = '/mine/list'>购物车空空如也？点击购物</router-link>
        <div v-else>
            <mt-cell v-for='good in cars' :key='good.id' :title="good.project_name"
                :label='"￥" + getString(good.price_low) + "*" + good.num'>
                <img class="tkImg" slot="icon" :src="good.cover + '@180w_240h.jpg'" width="100">
                <!-- <p class= 'p1'><span>{{good.start_time}}</span><span>{{good.city}}</span></p> -->
                <mt-button id = "btn1" class = 'buy' type  = 'danger' @click = 'addGoods(good)'>+</mt-button>
                <mt-button id ="btn2"  class = 'buy' type  = 'danger' @click = 'reduceGoods(good)'>-</mt-button>
            </mt-cell>
        </div>
        <div>
            <p>总数量：{{getTotal.num}}</p>
            <p>总价格：{{getTotal.p}}</p>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
    created(){
        console.log(this.getTotal.n)
    },
    computed:{
        ...mapState({
            cars:state => state.myCar.cars,
        }),
        ...mapGetters(["getTotal"])
    },
    methods:{
        getString(n) {
            return String(n)
        },
        ...mapActions(["addGoods", 'reduceGoods']),
    }
}
</script>

<style lang = 'scss'>
    .mint-cell-wrapper{
        padding:10px;
        .mint-cell-value{
            #btn1{
                width:15px;
                height:20px;
                position: absolute;
                bottom:20px;
                right:20px;
                text-align: center;
            }
            #btn2{
                width:20px;
                height:20px;
                position: absolute;
                bottom:20px;
                right:50px;
                text-align: center;

            }
        }
    .mint-cell-title {
        position: relative;

        .mint-cell-text{
            margin-top:10px;
            font-size: 16px;
            line-height: 18px;
            max-height: 36px;
            overflow: hidden;
            margin-left: 18px;
            font-weight: 700;
            color: #212121;
            width: 180px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            float: left;
        }
        .tkImg {
            float: left;
        }
        .p1{
            float:left;
            span{
            font-size: 12px;
            line-height: 16px;
            white-space: nowrap;

            }
        }
       /*  .mint-cell-text {
            width: 180px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 14px;
            float: left;
            text-align: left;
            margin-left: 20px;
        } */

        .mint-cell-label {
            position: absolute;
            bottom: 20px;
            left: 120px;
            font-size: 18px;
            font-weight: bold;
            line-height: 12px;
            color: rgb(251, 114, 153);
            -webkit-tap-highlight-color: transparent;
            font-family: Tahoma, Helvetica, Arial, sans-serif;
        }

    }
}
</style>
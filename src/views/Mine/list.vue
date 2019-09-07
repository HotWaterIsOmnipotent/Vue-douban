<template>
    <div class="list">
        <!-- <p>num:{{num}}</p>
        <p>getDblNum:{{getDblNum}}</p>
        <button @click = 'CHANG_NUM1'>更改按钮</button>
        <button @click = 'getBackendData'>获取数据</button> -->
        <!-- http://i1.hdslb.com/bfs/openplatform/201908/PPWgKzjF1565338927945.jpeg@180w_240h.jpg -->
        <!-- http://i1.hdslb.com/bfs/openplatform/201908/PPWgKzjF1565338927945.jpeg@180w_240h.jpg -->
        <mt-cell v-for='good in goods' :key='good.id' :title="good.project_name"
            :label='"￥" + getString(good.price_low)'>
            <img class="tkImg" slot="icon" :src="good.cover + '@180w_240h.jpg'" width="100">
            <!-- <p class= 'p1'><span>{{good.start_time}}</span><span>{{good.city}}</span></p> -->
            <mt-button class = 'buy' type  = 'danger' @click = 'addGoods(good)'>购买</mt-button>
        </mt-cell>
    </div>
</template>

<script>
    import {
        mapState,
        mapGetters,
        mapMutations,
        mapActions
    } from 'vuex'
    import {
        CHANG_NUM1
    } from '@/store/myNum/const'
    export default {
        data() {
            return {
                goods: []
            }
        },
        created() {
            console.log(this.$store.dispatch)
            this.$http.get('/vue-douban/api/ticket.json').then(res => {
                // console.log(res.data)
                this.goods = res.data
                // console.log(this.goods[0].cover + '@180w_240h.jpg')
            })
        },
        methods: {
            /* change(){
                this.$store.commit(CHANG_NUM1)
            }, */
            ...mapMutations([CHANG_NUM1]),
            ...mapActions(["getBackendData", 'addGoods']),
            /* getRandomNum(){
                this.$store.dispatch("getBackendData")
            } */
            getImages(_url) {
                if (_url !== undefined) {
                    let _u = _url.substring(7);
                    return 'http://images.weserv.nl/?url=' + _u;
                }
            },
            getString(n) {
                return String(n)
            }
        },
        /* computed:{
            num(){
                return this.$store.state.num
            }
        } */
        // computed:mapState(["num"])
        computed: {
            ...mapState({
                num: state => state.myNum.num
            }),
            ...mapGetters(["getDblNum"])
        }
    }
</script>

<style lang='scss' scope>
.mint-cell-wrapper{
    padding:10px;
    
        .mint-cell-value{
            button{
                position: absolute;
                bottom: 25px;
                right:20px;
                width:50px;
                height:25px;
            }
            .mint-button{
                width:50px;
                height:25px;
                font-size:12px;
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
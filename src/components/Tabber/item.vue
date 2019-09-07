<template>
    <div class="item"  @click = 'change'>
        <router-link :to = {path:path}>
            <span :id = 'txt' v-if = '!flag'>
                <slot name = 'normalImg'></slot>
            </span>
            <span v-else>
                <slot name = 'activeImg'></slot>
            </span>
            <span :class = {active:flag}>{{txt}}</span>
        </router-link>
    </div>
</template>

<script>
export default {
    props:["txt", 'path', 'sel', 'changeSel'],
    methods:{
        change(){
            // console.log(this.path)
            // console.log(this.sel)
            // let mark = this.path.substring(1);
            // this.changeSel(mark)
            // this.$router.push(this.path)
        }
    },
    computed:{
        flag(){
            let mark = this.path.substring(1);
            if(mark == this.sel){
                return true;
            }else{
                return false;
            }
        }
    }
}
</script>
<style lang = "scss">
    .item{ 
        flex:1;
        display:flex;
        flex-direction: column;
        align-items: center; 
        img{
            width:40px;
            height:40px;
        }
        .active{
            color:#42bd56;
        }
    }
</style>
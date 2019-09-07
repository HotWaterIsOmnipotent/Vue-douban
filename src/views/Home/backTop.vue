<template>
  <div 
  class="backTop" 
  v-if = "isShow"
  v-toTop
  >
      <i class = 'fa fa-chevron-up'></i>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isShow:false
        }
    },
    activated(){
        window.addEventListener("scroll", this.backtop);
    },
    deactivated(){
        window.removeEventListener("scroll", this.backtop)
    },
    methods:{
        backtop(){
            let h = document.documentElement.scrollTop ||
            document.body.scrollTop
            if(h >= 225 && !this.isShow){
                this.isShow = true;
            }else if(h < 225 && this.isShow){
                this.isShow = false;
            }
        },
        toTop(){
            window.scrollTo(0, 0)
        }
    }
}
</script>

<style lang = "scss">
    .backTop{
        width:0.4rem;
        height:0.4rem;
        background:rgba(0, 0, 0, .5);
        border-radius:50%;
        position:fixed;
        bottom:80px;
        right:10px;
        line-height:0.4rem;
        text-align:center;
        color:#fff;
    }
</style>
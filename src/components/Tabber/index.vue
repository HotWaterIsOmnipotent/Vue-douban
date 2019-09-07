<template>
    <div class="tabber">
        <!-- <router-link to='/home'> -->
            <item txt='首页' path = '/home' :sel = 'selected' :changeSel = 'changeSel'>
                <img slot='normalImg' src="../../assets/ic_tab_home_normal.png" alt="">
                <img slot='activeImg' src="../../assets/ic_tab_home_active.png" alt="">
            </item>
        <!-- </router-link> -->
        <!-- <router-link> -->
            <item txt='书影音' path = '/audio'  :sel = 'selected' :changeSel = 'changeSel'>
                <img slot='normalImg' src="../../assets/ic_tab_audio_normal.png" alt="">
                <img slot='activeImg' src="../../assets/ic_tab_audio_active.png" alt="">
            </item>
        <!-- </router-link> -->
        <!-- <router-link> -->
            <item txt='广播' path = '/broadcast' :sel = 'selected' :changeSel = 'changeSel'>
                <img slot='normalImg' src="../../assets/ic_tab_broadcast_normal.png" alt="">
                <img slot='activeImg' src="../../assets/ic_tab_broadcast_active.png" alt="">
            </item>
        <!-- </router-link> -->
        <!-- <router-link> -->
            <item txt='小组' path = '/group' :sel = 'selected' :changeSel = 'changeSel'>
                <img slot='normalImg' src="../../assets/ic_tab_group_normal.png" alt="">
                <img slot='activeImg' src="../../assets/ic_tab_group_active.png" alt="">
            </item>
        <!-- </router-link> -->
        <!-- <router-link> -->
            <item txt='我的' path = '/mine' :sel = 'selected' :changeSel = 'changeSel'>
                <img slot='normalImg' src="../../assets/ic_tab_mine_normal.png" alt="">
                <img slot='activeImg' src="../../assets/ic_tab_mine_active.png" alt="">
            </item>
        <!-- </router-link> -->
    </div>
</template>

<script>
    import item from './item'
    export default {
        data(){
            // console.log(this)
            // console.log(this.$route)
            return {
                selected:this.$route.name
            }
        },
        methods:{
            changeSel(sel){
                // this.selected = sel
            }
        },
        components: {
            item
        },
    }
</script>

<style lang="scss">
    .tabber {
        width: 100%;
        height: 60px;
        background: #fff;
        position: fixed;
        bottom: 0;
        display: flex;

    }
    .abc{
        display: none;
    }
</style>
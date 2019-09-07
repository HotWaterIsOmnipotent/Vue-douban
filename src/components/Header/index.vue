<template>
    <div class="header" v-if="isShow">
        <aside>
            <i :class="['fa', 'fa-'+icon]"></i>
            <span>
                {{title}}
            </span>
        </aside>
        <aside v-toTop:dblclick>城市</aside>
    </div>
</template>

<script>
    import router from '@/router'
    export default {
        data() {
            return {
                title: '豆瓣首页',
                icon: 'home',
                isShow: true
            }
        },
        created() {
            router.beforeEach((to, from, next) => {
                switch (to.name) {
                    case 'home':
                        this.title = '豆瓣首页';
                        this.icon = 'home';
                        this.isShow = true
                        break;
                    case 'audio':
                        this.title = '豆瓣影音';
                        this.icon = 'audio-description';
                        this.isShow = true
                        break;
                    case 'broadcast':
                        this.title = '豆瓣广播';
                        this.icon = 'volume-down';
                        this.isShow = true
                        break;
                    case 'group':
                        this.title = '豆瓣分组';
                        this.icon = 'group';
                        this.isShow = true
                        break;
                    case 'mine':
                        this.title = '豆瓣我的';
                        this.icon = 'user';
                        this.isShow = true
                        break;
                    default:
                        this.isShow = false;
                        break;
                }
                next();
            })
        }
    }
</script>

<style lang='scss'>
    .header {
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        background: rgba(66, 189, 86, 1);
        display: flex;
        position: fixed;
        top: 0;
        color: #fff;
        justify-content: space-between;
        padding: 0 0.2rem;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .08);
        z-index:2;
        i {
            padding: 0.05rem;
        }
    }
</style>
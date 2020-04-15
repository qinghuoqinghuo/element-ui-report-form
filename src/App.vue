<template>
    <div id="app">
        <NavMenu class="navMenuBox"></NavMenu>
        <transition name="fade">
            <router-view class="routerView"/>
        </transition>
    </div>
</template>
<script type="text/javascript">
    import NavMenu from '@/components/navMenu'

    export default {
        data() {
            return {
            }
        },
        mounted(){

        },
        components: {
            NavMenu
        }
    }
</script>
<style lang="scss">
    body {
        margin:0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    #app {

        .navMenuBox {
            position: fixed;
            width: 200px;
            height:100%;
            background: #545C64;
        }

        .routerView {
            margin-left: 200px
        }

    }

</style>

<template>
    <div id="app">
        <NavMenu class="navMenuBox"></NavMenu>
        <router-view class="routerView"/>
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

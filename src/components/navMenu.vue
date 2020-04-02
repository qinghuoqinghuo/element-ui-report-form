<template>
    <div>
        <el-menu
                default-active="1-1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545C64"
                text-color="#fff"
                active-text-color="#E6A23C"
                :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">elementUI实例</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">报表统计</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>

            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">vue大屏DataV</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">报表统计</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">敬请期待...</span>
            </el-menu-item>
            <el-menu-item index="4" disabled>
                <i class="el-icon-setting"></i>
                <span slot="title">敬请期待...</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isCollapse: false
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>
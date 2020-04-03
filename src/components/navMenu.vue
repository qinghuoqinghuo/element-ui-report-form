<template>
    <div>
        <el-scrollbar style = "height:103vh;">
            <el-menu
                    default-active="reportCount"
                    class="el-menu-vertical-demo"
                    @select="handleSelect"
                    background-color="#545C64"
                    text-color="#fff"
                    active-text-color="#E6A23C"
                    :collapse="isCollapse">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-eleme"></i>
                        <span slot="title">elementUI实例</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="reportCount">
                            <i class="el-icon-notebook-1"></i>报表统计
                        </el-menu-item>
                    </el-menu-item-group>

                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span slot="title">vue大屏DataV</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="VueDataVLoading">
                            <i class="el-icon-magic-stick"></i>
                            Loading特效
                        </el-menu-item>
                        <el-menu-item index="VueDataVBorder">
                            <i class="el-icon-magic-stick"></i>
                            边框特效
                        </el-menu-item>
                        <el-menu-item index="VueDataVDecoration">
                            <i class="el-icon-magic-stick"></i>
                            装饰器特效
                        </el-menu-item>
                        <el-menu-item index="VueDataVCharts">
                            <i class="el-icon-magic-stick"></i>
                            图表
                        </el-menu-item>
                        <el-menu-item index="VueDataVActiveRingChart">
                            <i class="el-icon-magic-stick"></i>
                            动态环图
                        </el-menu-item>
                        <el-menu-item index="VueDataVCapsuleChart">
                            <i class="el-icon-magic-stick"></i>
                            胶囊柱图
                        </el-menu-item>
                        <el-menu-item index="VueDataVPercentPond">
                            <i class="el-icon-magic-stick"></i>
                            进度池
                        </el-menu-item>
                        <el-menu-item index="VueDataVWaterLevelPond">
                            <i class="el-icon-magic-stick"></i>
                            水球图
                        </el-menu-item>
                        <el-menu-item index="VueDataVFlylineChart">
                            <i class="el-icon-magic-stick"></i>
                            飞线图
                        </el-menu-item>
                        <el-menu-item index="VueDataVFlylineChartEnhanced">
                            <i class="el-icon-magic-stick"></i>
                            飞线图增强版
                        </el-menu-item>
                        <el-menu-item index="VueDataVDigitalFlop">
                            <i class="el-icon-magic-stick"></i>
                            数字翻牌器
                        </el-menu-item>
                        <el-menu-item index="VueDataVConicalColumnChart">
                            <i class="el-icon-magic-stick"></i>
                            锥形柱图
                        </el-menu-item>
                        <el-menu-item index="VueDataVScrollboard">
                            <i class="el-icon-magic-stick"></i>
                            轮播表
                        </el-menu-item>
                        <el-menu-item index="VueDataVScrollRankingBoard">
                            <i class="el-icon-magic-stick"></i>
                            排名轮播表
                        </el-menu-item>
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
        </el-scrollbar>
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
//            handleOpen(key, keyPath) {
//                console.log(key, keyPath);
//            },
//            handleClose(key, keyPath) {
//                console.log(key, keyPath);
//            },
            handleSelect(key) {
                this.$router.push({name: key});
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
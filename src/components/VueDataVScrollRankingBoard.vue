<template>
    <div id="vueDataVScrollRankingBoard">
        <div class="border">
            <dv-scroll-ranking-board :config="config" style="width:500px;height:300px" />
        </div>
        <div class="border">
            <dv-scroll-ranking-board :config="config2" style="width:500px;height:300px" />
        </div>
        <div class="border">
            <dv-scroll-ranking-board :config="config3" style="width:500px;height:300px" />
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                config: {
                    data: [
                        {
                            name: '周口',
                            value: 55
                        },
                        {
                            name: '南阳',
                            value: 120
                        },
                        {
                            name: '西峡',
                            value: 78
                        },
                        {
                            name: '驻马店',
                            value: 66
                        },
                        {
                            name: '新乡',
                            value: 80
                        },
                        {
                            name: '信阳',
                            value: 45
                        },
                        {
                            name: '漯河',
                            value: 29
                        }
                    ]
                },
                config2: {
                    data: [
                        {
                            name: '周口',
                            value: 55
                        },
                        {
                            name: '南阳',
                            value: 120
                        },
                        {
                            name: '西峡',
                            value: 78
                        },
                        {
                            name: '驻马店',
                            value: 66
                        },
                        {
                            name: '新乡',
                            value: 80
                        },
                        {
                            name: '信阳',
                            value: 45
                        },
                        {
                            name: '漯河',
                            value: 29
                        }
                    ],
                    carousel: 'page'
                },
                config3: {
                    data: [
                        {
                            name: '周口',
                            value: 55
                        },
                        {
                            name: '南阳',
                            value: 120
                        },
                        {
                            name: '西峡',
                            value: 78
                        },
                        {
                            name: '驻马店',
                            value: 66
                        },
                        {
                            name: '新乡',
                            value: 80
                        }
                    ],
                    unit: '单位'
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    #vueDataVScrollRankingBoard {
        background: #282C34;
        overflow: hidden;
        padding-bottom: 15px;
        .border {
            height: 300px;
            width: 500px;
            float: left;
            margin-left:15px;
            margin-top: 15px;
            border: 1px solid red;
            p {
                color: #fff;
                font-weight: 900;
                font-size: 40px;
                text-align: center;
            }
            .borderContent {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #00B050;
            }
        }
    }
</style>
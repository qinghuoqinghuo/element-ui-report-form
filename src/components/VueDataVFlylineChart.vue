<template>
    <div id="vueDataVFlylineChart">
        <div class="border">
            <dv-flyline-chart :config="config" style="width:100%;height:100%;" />
        </div>
        <div class="border">
            <dv-flyline-chart :config="config2" style="width:100%;height:100%;" />
        </div>
        <div class="border">
            <dv-flyline-chart :config="config3" style="width:100%;height:100%;" />
        </div>
        <div class="border">
            <dv-flyline-chart :config="config4" style="width:100%;height:100%;" />
        </div>
    </div>
</template>
<script>
    const bgImgUrl = require('@/assets/map.jpg');
    const centerPointImg = require('@/assets/mapCenterPoint.png');
    const pointsImg = require('@/assets/mapPoint.png');
    export default {
        data() {
            return {
                config: {
                    centerPoint: [0.48, 0.35],
                    points: [
                        [0.52, 0.23],
                        [0.43, 0.29],
                        [0.59, 0.35],
                        [0.53, 0.47],
                        [0.45, 0.54],
                        [0.36, 0.38],
                        [0.62, 0.55],
                        [0.56, 0.56],
                        [0.37, 0.66],
                        [0.55, 0.81],
                        [0.55, 0.67],
                        [0.37, 0.29],
                        [0.20, 0.36],
                        [0.76, 0.41],
                        [0.59, 0.18],
                        [0.68, 0.17],
                        [0.59, 0.10]
                    ],
                    bgImgUrl:bgImgUrl
                },
                config2: {
                    centerPoint: [0.48, 0.35],
                    points: [
                        [0.52, 0.23],
                        [0.43, 0.29],
                        [0.59, 0.35],
                        [0.53, 0.47],
                        [0.45, 0.54],
                        [0.36, 0.38],
                        [0.62, 0.55],
                        [0.56, 0.56],
                        [0.37, 0.66],
                        [0.55, 0.81],
                        [0.55, 0.67],
                        [0.37, 0.29],
                        [0.20, 0.36],
                        [0.76, 0.41],
                        [0.59, 0.18],
                        [0.68, 0.17],
                        [0.59, 0.10]
                    ],
                    bgImgUrl: bgImgUrl,
                    centerPointImg: {
                        url: centerPointImg
                    },
                    pointsImg: {
                        url: pointsImg
                    }
                },
                config3: {
                    centerPoint: [0.48, 0.35],
                    points: [
                        {
                            position: [0.52, 0.235],
                            text: '新乡'
                        },
                        {
                            position: [0.43, 0.29],
                            text: '焦作'
                        },
                        {
                            position: [0.59, 0.35],
                            text: '开封'
                        },
                        {
                            position: [0.53, 0.47],
                            text: '许昌'
                        },
                        {
                            position: [0.45, 0.54],
                            text: '平顶山'
                        },
                        {
                            position: [0.36, 0.38],
                            text: '洛阳'
                        },
                        {
                            position: [0.62, 0.55],
                            text: '周口'
                        },
                        {
                            position: [0.56, 0.56],
                            text: '漯河'
                        },
                        {
                            position: [0.37, 0.66],
                            text: '南阳'
                        },
                        {
                            position: [0.55, 0.81],
                            text: '信阳'
                        },
                        {
                            position: [0.55, 0.67],
                            text: '驻马店'
                        },
                        {
                            position: [0.37, 0.29],
                            text: '济源'
                        },
                        {
                            position: [0.20, 0.36],
                            text: '三门峡'
                        },
                        {
                            position: [0.76, 0.41],
                            text: '商丘'
                        },
                        {
                            position: [0.59, 0.18],
                            text: '鹤壁'
                        },
                        {
                            position: [0.68, 0.17],
                            text: '濮阳'
                        },
                        {
                            position: [0.59, 0.10],
                            text: '安阳'
                        }
                    ],
                    bgImgUrl: bgImgUrl,
                    centerPointImg: {
                        url: centerPointImg
                    },
                    pointsImg: {
                        url: pointsImg
                    }
                },
                config4:{
                    centerPoint: [0.48, 0.35],
                    points: [
                        {
                            position: [0.52, 0.235],
                            text: '新乡'
                        },
                        {
                            position: [0.43, 0.29],
                            text: '焦作'
                        },
                        {
                            position: [0.59, 0.35],
                            text: '开封'
                        },
                        {
                            position: [0.53, 0.47],
                            text: '许昌'
                        },
                        {
                            position: [0.45, 0.54],
                            text: '平顶山'
                        },
                        {
                            position: [0.36, 0.38],
                            text: '洛阳'
                        },
                        {
                            position: [0.62, 0.55],
                            text: '周口'
                        },
                        {
                            position: [0.56, 0.56],
                            text: '漯河'
                        },
                        {
                            position: [0.37, 0.66],
                            text: '南阳'
                        },
                        {
                            position: [0.55, 0.81],
                            text: '信阳'
                        },
                        {
                            position: [0.55, 0.67],
                            text: '驻马店'
                        },
                        {
                            position: [0.37, 0.29],
                            text: '济源'
                        },
                        {
                            position: [0.20, 0.36],
                            text: '三门峡'
                        },
                        {
                            position: [0.76, 0.41],
                            text: '商丘'
                        },
                        {
                            position: [0.59, 0.18],
                            text: '鹤壁'
                        },
                        {
                            position: [0.68, 0.17],
                            text: '濮阳'
                        },
                        {
                            position: [0.59, 0.10],
                            text: '安阳'
                        }
                    ],
                    k: 0.5,
                    bgImgUrl: bgImgUrl,
                    centerPointImg: {
                        url: centerPointImg
                    },
                    pointsImg: {
                        url: pointsImg
                    }
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    #vueDataVFlylineChart {
        background: #282C34;
        overflow: hidden;
        padding-bottom: 15px;
        .border {
            height: 200px;
            width: 400px;
            float: left;
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
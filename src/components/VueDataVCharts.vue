<template>
    <div id="vueDataVCharts">
        <div class="border">
            <dv-charts :option="option" />
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                option:{
                    title: {
                        text: '剩余油量表',
                        style: {
                            fill: '#fff'
                        }
                    },
                    series: [
                        {
                            type: 'gauge',
                            data: [ { name: 'itemA', value: 55 } ],
                            center: ['50%', '55%'],
                            axisLabel: {
                                formatter: '{value}%',
                                style: {
                                    fill: '#fff'
                                }
                            },
                            axisTick: {
                                style: {
                                    stroke: '#fff'
                                }
                            },
                            animationCurve: 'easeInOutBack'
                        }
                    ]
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    #vueDataVCharts {
        background:#282C34;
        overflow: hidden;
        padding-bottom:15px;
        .border {
            height: 200px;
            width:400px;
            float:left;
            margin-top:15px;
            border:1px solid red;
            p {
                color:#fff;
                font-weight:900;
                font-size:40px;
                text-align: center;
            }
            .borderContent {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color:#00B050;
            }
        }
    }
</style>
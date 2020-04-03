<template>
    <div id="vueDataVActiveRingChart">
        <div class="border">
            <dv-active-ring-chart :config="config" style="width:300px;height:300px" />
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                config:{
                    radius: '40%',
                    activeRadius: '45%',
                    lineWidth: 10,
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
                    digitalFlopStyle: {
                        fill:'red',
                        fontSize: 20
                    }
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    #vueDataVActiveRingChart {
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
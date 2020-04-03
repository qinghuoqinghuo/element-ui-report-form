<template>
    <div id="vueDataVCapsuleChart">
        <div class="border">
            <dv-capsule-chart :config="config" style="width:300px;height:200px" />
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                config:{
                    data: [
                        {
                            name: '南阳',
                            value: 167
                        },
                        {
                            name: '周口',
                            value: 123
                        },
                        {
                            name: '漯河',
                            value: 98
                        },
                        {
                            name: '郑州',
                            value: 75
                        },
                        {
                            name: '西峡',
                            value: 66
                        },
                    ],
                    colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                    unit: '单位'
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    #vueDataVCapsuleChart {
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
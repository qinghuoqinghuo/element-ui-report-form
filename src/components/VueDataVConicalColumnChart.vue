<template>
    <div id="vueDataVConicalColumnChart">
        <div class="border">
            <dv-conical-column-chart :config="config" style="width:400px;height:200px;" />
        </div>
        <div class="border">
            <dv-conical-column-chart :config="config2" style="width:400px;height:200px;" />

        </div>
    </div>
</template>
<script>
    const st1 = require('@/assets/1st.png');
    const st2 = require('@/assets/2st.png');
    const st3 = require('@/assets/3st.png');
    const st4 = require('@/assets/4st.png');
    const st5 = require('@/assets/5st.png');
    const st6 = require('@/assets/6st.png');
    const st7 = require('@/assets/7st.png');
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
                            value: 71
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
                            value: 35
                        },
                        {
                            name: '漯河',
                            value: 15
                        }
                    ],
                    img: [
                        st1,
                        st2,
                        st3,
                        st4,
                        st5,
                        st6,
                        st7
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
                            value: 71
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
                            value: 35
                        },
                        {
                            name: '漯河',
                            value: 15
                        }
                    ],
                    img: [
                        st1,
                        st2,
                        st3,
                        st4,
                        st5,
                        st6,
                        st7
                    ],
                    columnColor:'rgba(131,137,224,.4)',
                    fontSize:20,
                    textColor:'#f40',
                    showValue: true
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    #vueDataVConicalColumnChart {
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
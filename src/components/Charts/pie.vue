<template>
    <div :id="id"></div>
</template>
<script>
    import echarts from 'echarts'

    export default {
        props: {
            id: {
                type: String,
                default: 'chart'
            },
            dataObj: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                chart: null
            }
        },
        mounted() {
            let self = this;
            self.initChart();
            window.onresize = function () {
                self.chart.resize()
            }
        },
        destroyed(){
            // 组件被销毁之后解除监听时间
            window.onresize = null;
            this.chart.dispose();
        },
        methods: {
            initChart() {
                let self = this;
                self.chart = echarts.init(document.getElementById(self.id));
                for(let i = 0;i<self.dataObj.series.length;i++) {
                    let item = self.dataObj.series[i];
                    item.type = 'pie';
                }
                let colors = ['#F39E06', '#33F3E6', '#0685F3', '#F35021', '#60F3AD', '#f3ef10',
                    '#B7F347', '#8389E0','#9E41F3','#3F8B72',
                    '#F38990','#5FA1F3','#F39211','#F378B0'];
                let option = {
                    color:colors,
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: self.dataObj.legend
                    },
                    series: [
                        {
                            name: '监测统计',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: self.dataObj.series,
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                self.chart.clear();
                self.chart.setOption(option);
            },
        },
        watch:{
            dataObj:{
                handler: function(newVal){
                    this.dataObj = newVal;
                    this.chart.dispose();
                    this.initChart();
                },
                deep:true
            }
        }
    }
</script>
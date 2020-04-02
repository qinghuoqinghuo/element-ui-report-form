<template>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="统计图" name="first">
            <Search-form @data="data" :activeName="activeName"></Search-form>
            <el-card class="box-card" style="margin-top:15px;">

                <div class="chart-container">

                    <lineChart v-if="selectCharts==1" :id="lineChartId" :dataObj="lineDataObj" height="100%"
                               width="100%"/>
                    <barChart v-if="selectCharts==2" :id="barChartId" :dataObj="barDataObj" height="100%"
                              width="100%"/>
                    <pieChart v-if="selectCharts==3" :id="pieChartId" :dataObj="pieDataObj" height="100%"
                              width="100%"/>

                </div>

            </el-card>
        </el-tab-pane>
        <el-tab-pane label="统计列表" name="second">
            <Search-form @data="data" :activeName="activeName"></Search-form>
            <el-card class="box-card" style="margin-top:15px;">
                <div slot="header" class="clearfix" style="text-align: left;">
                    <span>统计列表</span>
                    <download-excel
                            :fields="json_fields"
                            :data="multipleSelection"
                            :before-generate="startDownload"
                            :before-finish="finishDownload"
                            type="xls">
                        <el-button type="primary" style="float:right;margin-top:-26px;">导出</el-button>
                    </download-excel>
                </div>
                <el-table
                        ref="multipleTable"
                        :data="tableData"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            prop="updatetime"
                            label="监测时间"
                            show-overflow-tooltip>
                        <!--<template slot-scope="scope">{{ scope.row.updatetime }}</template>-->
                    </el-table-column>
                    <el-table-column
                            prop="stationname"
                            show-overflow-tooltip
                            label="监测站点">
                        <!--<template slot-scope="scope">{{ scope.row.stationname }}</template>-->
                    </el-table-column>
                    <el-table-column v-for="(item,index) in changeProjectOptions" :key="index"
                                     :prop="item.value"
                                     :label="item.label"
                                     show-overflow-tooltip>
                    </el-table-column>
                </el-table>
                <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="pageData.currentPage"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="pageData.pageSize"
                        layout="total,prev, pager, next"
                        :total="pageData.total">
                </el-pagination>
            </el-card>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import lineChart from '@/components/Charts/line'
    import barChart from '@/components/Charts/bar'
    import pieChart from '@/components/Charts/pie'
    import SearchForm from '@/components/search'
    import JsonExcel from 'vue-json-excel'
    import axios from 'axios'

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                lineChartId: 'lineChartId',
                barChartId: 'barChartId',
                pieChartId: 'pieChartId',
                selectCharts: 1,
                lineDataObj: {
                    type: '',
                    legend: [],
                    xAxis: [],
                    series: []
                },
                barDataObj: {
                    type: '',
                    legend: [],
                    xAxis: [],
                    series: []
                },
                pieDataObj: {
                    type: '',
                    legend: [],
                    series: []
                },
                loadDataEnd: false,
                pageData: {
                    currentPage: 1,
                    pageSize: 7,
                    total: 0
                },
                activeName: 'first',
                multipleSelection: [],
                json_fields: {
                    '监测时间': 'updatetime',
                    '监测站点': 'stationname'
                    // 'Telephone': 'phone.mobile',
                    // 'Telephone 2' : {
                    //   field: 'phone.landline',
                    //   callback: (value) => {
                    //     return `Landline Phone - ${value}`
                    //   }
                    // },
                },
                tableData: [],
                formOptions: {
                    timeType: 1,
                    time: '',
                    site: '',
                    project: '',
                    echartsType: 1,
                },
                projectOptions: [],
                changeProjectOptions: []
            }
        },
        components: {
            'lineChart': lineChart,
            'barChart': barChart,
            'pieChart': pieChart,
            'download-excel': JsonExcel,
            'Search-form': SearchForm
        },
        created() {
            this.getProjectOptions();
        },
        methods: {
            /**
             * 获取监测项目下拉框数据
             */
            getProjectOptions() {
                let self = this
                axios.get('/static/reportStatisticsProjectSelect.json').then((res) => {
                    self.projectOptions = res.data.data;
                    self.changeProjectOptions = res.data.data;
                })
            },
            /**
             * 获取搜索表单条件
             * */
            data(val) {
                let self = this;
                if (self.activeName == 'first') {
                    switch (val.action) {
                        case 'searchForm': // 查询表单
                            self.renderCharts(val.data);
                            break;
                        case 'resetForm': // 重置表单
                            self.renderCharts(val.data);
                            break;
                    }
                } else {
                    let search = Object.assign(val.data, self.pageData);
                    switch (val.action) {
                        case 'searchForm': // 查询表单
                            self.getTableData(search);
                            break;
                        case 'resetForm': // 重置表单
                            self.getTableData(search);
                            break;
                    }
                }
            },
            /**
             * 渲染统计图
             * */
            renderCharts(form) {
                let self = this;
                self.formOptions = form;
                self.selectCharts = form.echartsType;
                switch (form.echartsType) {
                    case 1:
                        axios.get('/static/line.json').then((res) => {
                            self.lineDataObj = res.data.data
                        })
                        break;
                    case 2:
                        axios.get('/static/bar1.json').then((res) => {
                            self.barDataObj = res.data.data
                        })
                        break;
                    case 3:
                        axios.get('/static/pie.json').then((res) => {
                            self.pieDataObj = res.data.data
                        })
                        break;
                }
            },
            /**
             * 获取统计列表
             * */
            getTableData(form) {
                let self = this;
                self.formOptions = form;
                self.json_fields = {
                    '监测时间': 'updatetime',
                    '监测站点': 'stationname'

                }
                if (form.project) {
                    self.changeProjectOptions = self.projectOptions.filter(function (item) {
                        return item.value == form.project
                    })
                    self.json_fields[self.changeProjectOptions[0].label] = self.changeProjectOptions[0].value
                } else {
                    self.changeProjectOptions = self.projectOptions
                    self.changeProjectOptions.forEach(item => {
                        self.json_fields[item.label] = item.value
                    })
                }
                axios.get('/static/table.json').then((res) => {
                    self.pageData.total = res.data.data.total
                    self.tableData = res.data.data.tableData.splice((self.pageData.currentPage - 1) * self.pageData.pageSize, self.pageData.pageSize)
                })
            },
            handleSizeChange() {
            },
            /**
             * 切换分页
             * */
            handleCurrentChange(val) {
                let self = this;
                self.pageData.currentPage = val;
                self.getTableData(this.formOptions);
            },
            /**
             * tab标签页切换
             * */
            handleClick(tab) {
                let self = this;
                self.activeName = tab.name;
                switch (tab.name) {
                    case 'first':
                        self.renderCharts(this.formOptions);
                        break;
                    case 'second':
                        self.getTableData(this.formOptions);
                        break;
                }
            },
            /**
             * 勾选复选框
             * */
            handleSelectionChange(val) {
                let self = this
                self.multipleSelection = val
            },
            /**
             *导出数据开始
             * */
            startDownload() {
                let self = this
                if (self.multipleSelection.length == 0) {
                    self.$message({
                        message: '警告，请勾选数据',
                        type: 'warning'
                    })
                }
            },
            /**
             * 导出数据结束
             * */
            finishDownload() {
                let self = this
                self.$message({
                    message: '恭喜，数据导出成功',
                    type: 'success'
                })
            }
        },
        mounted() {
            this.renderCharts(this.formOptions);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #lineChartId, #barChartId, #pieChartId {
        height: 100%;
        width: 100%;
    }

    .chart-container {
        position: relative;
        width: 100%;
        height: calc(100vh - 330px);
    }
</style>

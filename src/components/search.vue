<template>
    <el-card class="box-card my-card" style="overflow: visible">
        <div slot="header" class="clearfix" style="text-align: left;">
            <span>查询条件</span>
            <el-button style="float: right;margin-top:-7px;" type="primary" @click="clickSearchForm">查询</el-button>
            <el-button style="float: right;margin-top:-7px;margin-right:15px;" type="primary" @click="clickResetSearch">
                重置
            </el-button>
        </div>
        <el-form label-position="left" label-width="90px" :model="formOptions">
            <el-row>
                <el-col :span="10">
                    <el-form-item label="统计周期:">
                        <el-radio-group v-model="formOptions.timeType" @change="timeTypeChange">
                            <el-radio :label="1">年</el-radio>
                            <el-radio :label="2">月</el-radio>
                            <el-radio :label="3">周</el-radio>
                            <el-radio :label="4">季度</el-radio>
                            <el-radio :label="5">自定义</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="监测站点:">
                        <el-select v-model="formOptions.site" placeholder="请选择监测站点">
                            <el-option
                                    v-for="item in siteOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="监测项目:">
                        <el-select v-model="formOptions.project" placeholder="请选择监测项目">
                            <el-option
                                    v-for="item in projectOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8" v-show="activeName=='first'">
                    <el-form-item label="统计图类型:">
                        <el-radio-group v-model="formOptions.echartsType" @change="echartsTypeChange">
                            <el-radio :label="1">折线图</el-radio>
                            <el-radio :label="2">柱形图</el-radio>
                            <el-radio :label="3">饼状图</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="8" :offset="activeName=='first'?2:0">
                    <el-form-item label="监测时间:">
                        <el-col :span="6" v-show="formOptions.timeType==1">
                            <el-date-picker
                                    v-model="formOptions.time"
                                    type="year"
                                    format="yyyy年"
                                    value-format="yyyy年"
                                    :picker-options="pickerOptions"
                                    placeholder="选择年">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="6" v-show="formOptions.timeType==2">
                            <el-date-picker
                                    v-model="formOptions.time"
                                    type="month"
                                    format="yyyy年 MM月"
                                    value-format="yyyy年 MM月"
                                    :picker-options="pickerOptions"
                                    placeholder="选择月">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="6" v-show="formOptions.timeType==3">
                            <el-date-picker
                                    v-model="formOptions.time"
                                    type="week"
                                    format="yyyy年 WW周"
                                    :picker-options="pickerOptions"
                                    placeholder="选择周">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="6" v-show="formOptions.timeType==4" style="position:relative;">
                            <div class="el-date-editor el-input el-input--small el-input--prefix el-input--suffix el-date-editor--month">
                                <input type="text" autocomplete="off" name="" placeholder="选择季度"
                                       class="el-input__inner" @focus="inputFocus" v-model="quarterVal">
                                <span class="el-input__prefix" @click="clickInputIcon"><i
                                        class="el-input__icon el-icon-date"></i></span>
                                <span class="el-input__suffix"><span class="el-input__suffix-inner"><i
                                        class="el-input__icon"></i></span></span>
                            </div>

                            <div class="el-picker-panel el-date-picker el-popper el-zoom-in-top-enter"
                                 :class="{'el-zoom-in-top-enter-active':showQuarter}"
                                 style="position: absolute; top: 30px; left: 26px; z-index: 2013;"
                                 x-placement="bottom-start">
                                <div class="el-picker-panel__body-wrapper">
                                    <div class="el-picker-panel__body">
                                        <div class="el-date-picker__header el-date-picker__header--bordered">
                                            <button type="button" aria-label="前一年"
                                                    class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left"
                                                    @click="quarterYearPre"></button>
                                            <!--<button type="button" aria-label="上个月" class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-arrow-left" style="display: none;"></button>-->
                                            <span role="button"
                                                  class="el-date-picker__header-label">{{quarterYear}} 年</span>
                                            <!--<span role="button" class="el-date-picker__header-label active" style="display: none;">3 月</span>-->
                                            <button type="button" aria-label="后一年"
                                                    class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right"
                                                    @click="quarterYearNext"></button>
                                            <!--<button type="button" aria-label="下个月" class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-arrow-right" style="display: none;"></button>-->
                                        </div>
                                        <div class="el-picker-panel__content">
                                            <table class="el-month-table" style="">
                                                <tbody>
                                                <tr>
                                                    <td :class="returnQuarterClass(1)"
                                                        @click="selectQuarter(1,returnQuarterClass(1))">
                                                        <div><a class="cell">一季度</a></div>
                                                    </td>
                                                    <td :class="returnQuarterClass(2)"
                                                        @click="selectQuarter(2,returnQuarterClass(2))">
                                                        <div><a class="cell">二季度</a></div>
                                                    </td>
                                                    <td :class="returnQuarterClass(3)"
                                                        @click="selectQuarter(3,returnQuarterClass(3))">
                                                        <div><a class="cell">三季度</a></div>
                                                    </td>
                                                    <td :class="returnQuarterClass(4)"
                                                        @click="selectQuarter(4,returnQuarterClass(4))">
                                                        <div><a class="cell">四季度</a></div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div x-arrow="" class="popper__arrow" style="left: 35px;"></div>
                            </div>

                        </el-col>
                        <el-col :span="10" v-show="formOptions.timeType==5">
                            <el-date-picker
                                    v-model="formOptions.time"
                                    type="datetimerange"
                                    align="right"
                                    :unlink-panels="true"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    :default-time="['00:00:00','00:00:00']"
                                    :picker-options="pickerOptions">
                            </el-date-picker>
                        </el-col>
                    </el-form-item>
                </el-col>

            </el-row>
        </el-form>
    </el-card>
</template>
<script>
    import axios from 'axios'

    export default {
        props: {
            activeName: {
                type: String,
                default: 'first'
            }
        },
        data() {
            return {
                quarterVal: '',//季度输入框的值
                quarterYear: new Date().getFullYear(),// 季度下拉面板的年份
                quarterSelect: '',// 季度下拉面板选中的季度
                nowYear: new Date().getFullYear(), // 当前时间的年份
                nowMonth: new Date().getMonth(), // 当前时间的月份
                showQuarter: false,
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    }
                },
                siteOptions: [],
                projectOptions: [],
                formOptions: {
                    timeType: 1,
                    time: '',
                    site: '',
                    project: '',
                    echartsType: 1,
                },
            }
        },
        created() {
            this.getSiteOptions();
            this.getProjectOptions();
        },
        mounted() {

        },
        methods: {
            /**
             * 获取监测项目下拉框数据
             */
            getProjectOptions() {
                let self = this
                axios.get('/static/reportStatisticsProjectSelect.json').then((res) => {
                    self.projectOptions = res.data.data
                })
            },
            /**
             * 获取监测站点下拉框数据
             */
            getSiteOptions() {
                let self = this
                axios.get('/static/reportStatisticsSiteSelect.json').then((res) => {
                    self.siteOptions = res.data.data
                })
            },
            /**
             * 切换统计图类型
             * */
            echartsTypeChange(val) {
                this.formOptions.echartsType = val
            },
            /**
             * 选择季度
             * */
            selectQuarter(val, className) {
                let self = this;
                if (className !== 'disabled') {
                    self.quarterSelect = val;
                    setTimeout(function () {
                        self.showQuarter = false;
                    }, 100)
                    self.quarterVal = self.quarterYear + '年 ' + self.returnQuarter(val)
                }
            },
            /**
             * 返回季度
             * */
            returnQuarter(val) {
                let name = '';
                switch (val) {
                    case 1:
                        name = '一季度';
                        break;
                    case 2:
                        name = '二季度';
                        break;
                    case 3:
                        name = '三季度';
                        break;
                    case 4:
                        name = '四季度';
                        break;
                }
                return name;
            },
            /**
             * 点击季度上一年
             * */
            quarterYearPre() {
                let self = this;
                self.quarterYear--
            },
            /**
             * 点击季度下一年
             * */
            quarterYearNext() {
                let self = this;
                self.quarterYear++
            },
            /**
             * 点击查询表单
             * */
            clickSearchForm() {
                let self = this;
                if (self.formOptions.timeType == 3) {
                    self.formOptions.time = self.$moment(self.formOptions.time).format('YYYY年 WW周')
                }
                if (self.formOptions.timeType == 4) {
                    self.formOptions.time = self.quarterVal
                }
                if(self.formOptions.timeType==5) {
                    self.formOptions.time[0] = self.$moment(self.formOptions.time[0]).format('YYYY-MM-DD HH:mm:ss')
                    self.formOptions.time[1] = self.$moment(self.formOptions.time[1]).format('YYYY-MM-DD HH:mm:ss')
                }
                let data = {
                    action: 'searchForm',
                    data: self.formOptions
                }
                self.$emit('data', data)
            },
            /**
             * 点击重置表单
             * */
            clickResetSearch() {
                let self = this;
                self.formOptions = {
                    timeType: 1,
                    time: '',
                    site: '',
                    project: '',
                    echartsType: 1
                }
                self.quarterVal = '';
                self.quarterYear = new Date().getFullYear();
                self.quarterSelect = '';
                let data = {
                    action: 'resetForm',
                    data: self.formOptions
                }
                self.$emit('data', data)
            },
            /**
             * 切换统计周期
             * */
            timeTypeChange(val) {
                let self = this;
                self.quarterVal = '';
                self.quarterYear = new Date().getFullYear();
                self.quarterSelect = '';
                self.formOptions.timeType = val;
                if (val == 5) {
                    let startDate = self.$moment(new Date()).subtract(1,'month').format('YYYY-MM-DD 00:00:00');
                    let endDate = self.$moment(new Date()).format('YYYY-MM-DD 00:00:00');
                    self.formOptions.time = [startDate, endDate]
                } else {
                    self.formOptions.time = ''
                }
            },
            /**
             * 季度输入框获取焦点时
             * */
            inputFocus() {
                this.showQuarter = true;
            },
            /**
             * 季度输入框点击图标时
             * */
            clickInputIcon() {
                this.showQuarter = true;
            },
            /**
             * 返回季度css样式
             * */
            returnQuarterClass(val) {
                let self = this;
                let quarterSelect = self.quarterSelect;
                let nowMonth = self.nowMonth;
                let nowQuarter = null;
                if (nowMonth <= 2) {
                    nowQuarter = 1;
                } else if (nowMonth <= 5) {
                    nowQuarter = 2;
                } else if (nowMonth <= 8) {
                    nowQuarter = 3;
                } else {
                    nowQuarter = 4;
                }
                if (self.quarterYear < self.nowYear) {
                    if (quarterSelect == val) {
                        return 'current'
                    }
                    return ''
                } else if (self.quarterYear == self.nowYear) {
                    if (val <= nowQuarter) {
                        if (quarterSelect == val) {
                            return 'current'
                        }
                        return ''
                    } else {
                        return 'disabled'
                    }
                } else {
                    return 'disabled'
                }
            }
        }
    }
</script>
<style scoped>
    .my-card .el-zoom-in-top-enter {
        opacity: 0;
        transform: scaleY(0)
    }

    .my-card .el-zoom-in-top-enter-active {
        opacity: 1 !important;
        transform: scaleY(1) !important;
        transition: transform .3s cubic-bezier(.23, 1, .32, 1), opacity .3s cubic-bezier(.23, 1, .32, 1) !important;
        transform-origin: center top !important;
    }
</style>
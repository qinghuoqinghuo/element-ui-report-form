<template>
    <div id="vueDataVDigitalFlop">
        <div class="border">
            <dv-digital-flop :config="config" style="width:200px;height:50px;" />
        </div>
        <div class="border">
            <dv-digital-flop :config="config2" style="width:200px;height:50px;" />
        </div>
        <div class="border">
            <dv-digital-flop :config="config3" style="width:200px;height:50px;" />
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                config:{
                    number: [100],
                    content: '{nt}个'
                },
                config2: {
                    number: [100],
                    toFixed: 2,
                    content: '{nt}个'
                },
                config3:{
                    number: [10, 100],
                    content: '{nt}个{nt}元'
                },
                timer:null,
            }
        },
        destroyed(){
        },
        mounted(){
            let self = this;
            setTimeout(function(){
                self.config = {
                    number: [9999],
                    content: '{nt}个'
                };
                self.config2 = {
                    number: [999999],
                    toFixed: 2,
                    content: '{nt}个'
                };
                self.config3 = {
                    number: [888, 8],
                    content: '{nt}个{nt}元'
                };
            },2000)
        }
    }
</script>
<style lang="scss" scoped>
    #vueDataVDigitalFlop {
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
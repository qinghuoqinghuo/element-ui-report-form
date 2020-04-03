<template>
    <div id="vueDataVWaterLevelPond">
        <div class="border">
            <dv-water-level-pond :config="config" style="width:150px;height:200px"/>
        </div>
        <div class="border">
            <dv-water-level-pond :config="config2" style="width:150px;height:200px"/>
        </div>
        <div class="border">
            <dv-water-level-pond :config="config3" style="width:150px;height:200px"/>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                config: {
                    data: [66, 45],
                    shape: 'rect'
                },
                config2: {
                    data: [66, 45],
                    shape: 'roundRect'
                },
                config3: {
                    data: [66, 45],
                    shape: 'round',
                    colors:['red','green']
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    #vueDataVWaterLevelPond {
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
<template>
    <div id="vueDataVPercentPond">
        <div class="border">
            <dv-percent-pond :config="config" style="width:200px;height:100px;" />
        </div>
        <div class="border">
            <dv-percent-pond :config="config2" style="width:200px;height:100px;" />

        </div>
        <div class="border">
            <dv-percent-pond :config="config3" style="width:200px;height:50px;" />

        </div>
    </div>
</template>
<script>
    const fullWidth = 300
    const borderGap = 3
    const borderWidth = 3
    const usefulWidth = fullWidth - (borderGap + borderWidth) * 2

    const pieceLength = [0.25, 0.5, 0.25]
    const pieceGap = 3

    const lineDash = pieceLength
        .map(l => [usefulWidth * l, pieceGap])
        .reduce((all, current) => [...all, ...current], [])
    export default {
        data() {
            return {
                config: {
                    value: 66,
                    borderWidth: 5,
                    borderRadius: 10,
                    borderGap: 5
                },
                config2: {
                    value: 66,
                    lineDash: [10, 2]
                },
                config3: {
                    value: 100,
                    colors: ['#01c4f9', '#c135ff'],
                    lineDash
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    #vueDataVPercentPond {
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
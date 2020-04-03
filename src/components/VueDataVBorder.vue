<template>
    <div id="vueDataVborder">
        <div class="splitbox"></div>
        <dv-border-box-1 class="border">
            <div class="borderContent">border1</div>
        </dv-border-box-1>
        <div class="splitbox"></div>
        <dv-border-box-2 class="border">
            <div class="borderContent">border2</div>
        </dv-border-box-2>
        <div class="splitbox"></div>
        <dv-border-box-3 class="border">
            <div class="borderContent">border3</div>
        </dv-border-box-3>
        <div class="splitbox"></div>
        <dv-border-box-4 class="border">
            <div class="borderContent">border4</div>
        </dv-border-box-4>
        <div class="splitbox"></div>
        <dv-border-box-5 class="border">
            <div class="borderContent">border5</div>
        </dv-border-box-5>
        <div class="splitbox"></div>
        <div class="splitbox"></div>
        <dv-border-box-6 class="border">
            <div class="borderContent">border6</div>
        </dv-border-box-6>
        <div class="splitbox"></div>
        <dv-border-box-7 class="border">
            <div class="borderContent">border7</div>
        </dv-border-box-7>
        <div class="splitbox"></div>
        <dv-border-box-8 class="border">
            <div class="borderContent">border8</div>
        </dv-border-box-8>
        <div class="splitbox"></div>
        <dv-border-box-9 class="border">
            <div class="borderContent">border9</div>
        </dv-border-box-9>
        <div class="splitbox"></div>
        <dv-border-box-10 class="border">
            <div class="borderContent">border10</div>
        </dv-border-box-10>
        <div class="splitbox"></div>
        <dv-border-box-11 class="border">
            <div class="borderContent">border11</div>
        </dv-border-box-11>
        <div class="splitbox"></div>
        <dv-border-box-12 class="border">
            <div class="borderContent">border12</div>
        </dv-border-box-12>
        <div class="splitbox"></div>
        <dv-border-box-13 class="border">
            <div class="borderContent">border13</div>
        </dv-border-box-13>
        <div class="splitbox"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>
<style lang="scss" scoped>
    #vueDataVborder {
        background:#282C34;
        .splitbox {
            height:15px;
        }
        .border {
            height: 200px;

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
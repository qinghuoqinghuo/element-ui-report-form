<template>
    <div id="vueDataVDecoration">
        <div class="border">
            <p>1</p>
            <dv-decoration-1 style="width:200px;height:50px;" />
        </div>
        <div class="border">
            <p>2</p>
            <dv-decoration-2 style="width:200px;height:5px;" />
        </div>
        <div class="border">
            <p>2 reverse</p>
            <dv-decoration-2 :reverse="true" style="width:5px;height:150px;" />
        </div>
        <div class="border">
            <p>3</p>
            <dv-decoration-3 style="width:250px;height:30px;" />
        </div>
        <div class="border">
            <p>4</p>
            <dv-decoration-4 style="width:5px;height:150px;" />
        </div>
        <div class="border">
            <p>4 reverse</p>
            <dv-decoration-4 :reverse="true" style="width:250px;height:5px;" />
        </div>
        <div class="border">
            <p>5</p>
            <dv-decoration-5 style="width:300px;height:40px;" />
        </div>
        <div class="border">
            <p>6</p>
            <dv-decoration-6 style="width:300px;height:30px;" />
        </div>
        <div class="border">
            <p>7</p>
            <dv-decoration-7 style="width:150px;height:30px;">Decoration</dv-decoration-7>
        </div>
        <div class="border">
            <p>8</p>
            <dv-decoration-8 style="width:300px;height:50px;" />
        </div>
        <div class="border">
            <p>8 reverse</p>
            <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
        </div>
        <div class="border">
            <p>9</p>
            <dv-decoration-9 style="width:150px;height:150px;">66%</dv-decoration-9>
        </div>
        <div class="border">
            <p>10</p>
            <dv-decoration-10 style="width:90%;height:5px;" />
        </div>
        <div class="border">
            <p>11</p>
            <dv-decoration-11 style="width:200px;height:60px;">dv-decoration-11</dv-decoration-11>
        </div>

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
    #vueDataVDecoration {
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
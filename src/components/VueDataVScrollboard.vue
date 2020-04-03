<template>
    <div id="vueDataVScrollboard">
        <div class="border">
            <dv-scroll-board :config="config" style="width:500px;height:220px" />
        </div>
        <div class="border">
            <dv-scroll-board :config="config2" style="width:500px;height:220px" />
        </div>
        <div class="border">
            <dv-scroll-board :config="config3" style="width:500px;height:220px" />
        </div>
        <div class="border">
            <dv-scroll-board :config="config4" style="width:500px;height:220px" />
        </div>
        <div class="border">
            <dv-scroll-board :config="config5" style="width:500px;height:220px" />
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                config: {
                    data: [
                        ['行1列1', '行1列2', '行1列3'],
                        ['行2列1', '行2列2', '行2列3'],
                        ['行3列1', '行3列2', '行3列3'],
                        ['行4列1', '行4列2', '行4列3'],
                        ['行5列1', '行5列2', '行5列3'],
                        ['行6列1', '行6列2', '行6列3'],
                        ['行7列1', '行7列2', '行7列3'],
                        ['行8列1', '行8列2', '行8列3'],
                        ['行9列1', '行9列2', '行9列3'],
                        ['行10列1', '行10列2', '行10列3']
                    ]
                },
                config2: {
                    header: ['列1', '列2', '列3'],
                    data: [
                        ['行1列1', '行1列2', '行1列3'],
                        ['行2列1', '行2列2', '行2列3'],
                        ['行3列1', '行3列2', '行3列3'],
                        ['行4列1', '行4列2', '行4列3'],
                        ['行5列1', '行5列2', '行5列3'],
                        ['行6列1', '行6列2', '行6列3'],
                        ['行7列1', '行7列2', '行7列3'],
                        ['行8列1', '行8列2', '行8列3'],
                        ['行9列1', '行9列2', '行9列3'],
                        ['行10列1', '行10列2', '行10列3']
                    ]
                },
                config3: {
                    header: ['列1', '列2', '列3'],
                    data: [
                        ['行1列1', '行1列2', '行1列3'],
                        ['行2列1', '行2列2', '行2列3'],
                        ['行3列1', '行3列2', '行3列3'],
                        ['行4列1', '行4列2', '行4列3'],
                        ['行5列1', '行5列2', '行5列3'],
                        ['行6列1', '行6列2', '行6列3'],
                        ['行7列1', '行7列2', '行7列3'],
                        ['行8列1', '行8列2', '行8列3'],
                        ['行9列1', '行9列2', '行9列3'],
                        ['行10列1', '行10列2', '行10列3']
                    ],
                    index: true,
                    columnWidth: [50],
                    align: ['center']
                },
                config4:{
                    header: ['列1', '列2', '列3'],
                    data: [
                        ['行1列1', '行1列2', '行1列3'],
                        ['行2列1', '行2列2', '行2列3'],
                        ['行3列1', '行3列2', '行3列3'],
                        ['行4列1', '行4列2', '行4列3'],
                        ['行5列1', '行5列2', '行5列3'],
                        ['行6列1', '行6列2', '行6列3'],
                        ['行7列1', '行7列2', '行7列3'],
                        ['行8列1', '行8列2', '行8列3'],
                        ['行9列1', '行9列2', '行9列3'],
                        ['行10列1', '行10列2', '行10列3']
                    ],
                    index: true,
                    columnWidth: [50],
                    align: ['center'],
                    carousel: 'page'
                },
                config5: {
                    header: ['列1', '列2', '列3'],
                    data: [
                        ['<span style="color:#37a2da;">行1列1</span>', '行1列2', '行1列3'],
                        ['行2列1', '<span style="color:#32c5e9;">行2列2</span>', '行2列3'],
                        ['行3列1', '行3列2', '<span style="color:#67e0e3;">行3列3</span>'],
                        ['行4列1', '<span style="color:#9fe6b8;">行4列2</span>', '行4列3'],
                        ['<span style="color:#ffdb5c;">行5列1</span>', '行5列2', '行5列3'],
                        ['行6列1', '<span style="color:#ff9f7f;">行6列2</span>', '行6列3'],
                        ['行7列1', '行7列2', '<span style="color:#fb7293;">行7列3</span>'],
                        ['行8列1', '<span style="color:#e062ae;">行8列2</span>', '行8列3'],
                        ['<span style="color:#e690d1;">行9列1</span>', '行9列2', '行9列3'],
                        ['行10列1', '<span style="color:#e7bcf3;">行10列2</span>', '行10列3']
                    ],
                    index: true,
                    columnWidth: [50],
                    align: ['center']
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    #vueDataVScrollboard {
        background: #282C34;
        overflow: hidden;
        padding-bottom: 15px;
        .border {
            height: 220px;
            width: 500px;
            float: left;
            margin-top: 15px;
            margin-left:15px;
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
<template>
    <WeatherSubColumn title="生活指标">
        <ul class="info-list">
            <li class="info-item" v-for="i in 8" :key="i">
                <image class="img" src="@/static/images/clothes.png" mode="aspectFit" />
                <view class="text">
                    <h3 class="title">穿衣指数</h3>
                    <text class="desc">炎热</text>
                </view>
            </li>
        </ul>
    </WeatherSubColumn>
</template>

<script setup lang="ts">
import WeatherSubColumn from '@/components/WeatherSubColumn/WeatherSubColumn.vue';

</script>

<style lang="stylus" scoped>
.info-list
    display flex
    flex-wrap wrap
    justify-content space-around
    .info-item
        display flex
        background-color white
        padding 5px 15px 15px 5px
        .img
            width 50px
            height 50px
            overflow hidden
            border-radius 50%
        .text
            display flex
            flex-direction column
            justify-content space-around
            margin-left 5px
            .title
                font-size 12px
                font-weight 700
            .desc
                color rgba(0,0,0,.5)
                font-size 10px
        
</style>
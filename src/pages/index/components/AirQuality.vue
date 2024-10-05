<template>
    <WeatherSubColumn title="空气质量">
        <view class="air-wrap">
            <text class="air-state">
                60-良好
            </text>
            <br />
            <text class="desc">
                空气质量可接受，但某些污染物可能对极少数异常敏感人群健康有较弱影响
            </text>
            <Progress></Progress>
            <ul class="info-list"></ul>
        </view>
    </WeatherSubColumn>
</template>

<script setup lang="ts">
import WeatherSubColumn from '@/components/WeatherSubColumn/WeatherSubColumn.vue';
import Progress from '@/components/Progress/Progress.vue';
</script>

<style lang="stylus" scoped>
.air-wrap
    width 80%
    margin 0 auto
    .air-state
        line-height 30px
    .desc
        font-size 12px
        line-height 12px
</style>
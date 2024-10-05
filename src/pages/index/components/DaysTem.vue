<template>
    <WeatherSubColumn title="10天天气预报">
        <ul class="tem-list">
            <li class="tem-item" v-for="i in 10" :key="i">
                <text class="time">今天</text>
                <i class="weather-icon qi-100-fill"></i>
                <Progress width="200rpx" height="20rpx"></Progress>
            </li>
        </ul>
    </WeatherSubColumn>
</template>

<script setup lang="ts">
import WeatherSubColumn from '@/components/WeatherSubColumn/WeatherSubColumn.vue';
import Progress from '@/components/Progress/Progress.vue';
</script>

<style lang="stylus" scoped>
.tem-item
    display flex
    justify-content space-between
    align-items center
    margin 5px 0px
    .weather-icon
        font-size 30px
    .tem-echart
        width 300rpx
        height 80rpx
</style>
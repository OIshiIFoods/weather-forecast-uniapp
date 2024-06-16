<template>
    <view class="weather" :style="{paddingTop:safeAreaInsets?.top+'px'}">
        <WeatherInfo></WeatherInfo>
        <HoursTem></HoursTem>
        <DaysTem></DaysTem>
        <AirQuality></AirQuality>
        <LifeIndex></LifeIndex>
    </view>
</template>

<script setup lang="ts">
import WeatherInfo from './components/WeatherInfo.vue'
import HoursTem from './components/HoursTem.vue'
import DaysTem from './components/DaysTem.vue'
import AirQuality from './components/AirQuality.vue'
import LifeIndex from './components/LifeIndex.vue'
import { getCurPosition } from '@/service/geoPosition'
import { getTodayWeatherInfo } from '@/service/weather'
const {safeAreaInsets} = uni.getSystemInfoSync()
getCurPosition().then(data=>{
    console.log(data)
    getTodayWeatherInfo(data.result.location).then(data => console.log(data))
})
</script>

<style lang="stylus" scoped>
@import '../../static/css/variable';
.weather
    box-sizing border-box
    padding 0 side-distance
</style>

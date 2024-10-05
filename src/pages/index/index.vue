<template>
    <view class="weather" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
        <WeatherInfo :posInfo="posInfo"></WeatherInfo>
        <HoursTem :posInfo="posInfo"></HoursTem>
        <DaysTem :posInfo="posInfo"></DaysTem>
        <AirQuality :posInfo="posInfo"></AirQuality>
        <LifeIndex :posInfo="posInfo"></LifeIndex>
    </view>
</template>

<script setup lang="ts">
import WeatherInfo from './components/WeatherInfo.vue'
import HoursTem from './components/HoursTem.vue'
import DaysTem from './components/DaysTem.vue'
import AirQuality from './components/AirQuality.vue'
import LifeIndex from './components/LifeIndex.vue'

import { getCurPosition } from '@/service/geoPosition'
import { onMounted, reactive, ref, toRefs, type ToRefs } from 'vue'

const { safeAreaInsets } = uni.getSystemInfoSync()

let posInfo = ref({ lng: 116.41, lat: 39.92 })

onMounted(async () => {
    let data = await getCurPosition()
    posInfo.value = data.result.location
})

</script>

<style lang="stylus" scoped>
@import '../../static/css/variable';
.weather
    box-sizing border-box
    padding 0 side-distance
</style>

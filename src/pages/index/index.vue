<template>
    <view class="weather" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
        <WeatherInfo></WeatherInfo>
        <HoursTem></HoursTem>
        <DaysTem></DaysTem>
        <AirQuality></AirQuality>
        <LifeIndex></LifeIndex>
    </view>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, toRefs, type ToRefs } from 'vue'
import WeatherInfo from './components/WeatherInfo.vue'
import HoursTem from './components/HoursTem.vue'
import DaysTem from './components/DaysTem.vue'
import AirQuality from './components/AirQuality.vue'
import LifeIndex from './components/LifeIndex.vue'
import { usePositionStore } from '@/stores/modules/position'
import { getCurPosition } from '@/service/geoPosition'

const { safeAreaInsets } = uni.getSystemInfoSync()
const positionStore = usePositionStore()


onMounted(async () => {
    const data = await getCurPosition()
    /** 更新仓库中的位置信息 */
    positionStore.changePositionInfo(data.result)
})

</script>

<style lang="less" scoped>
@import '../../static/css/variable';

.weather {
    box-sizing: border-box;
    padding: 0 @side-distance;
}
</style>

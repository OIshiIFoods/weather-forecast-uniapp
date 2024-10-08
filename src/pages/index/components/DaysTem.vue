<template>
    <WeatherSubColumn :title="hourlyWeatherInfo.length + '天天气预报'">
        <ul class="weather-list">
            <li class="weather-item" v-for="(value, idx) in hourlyWeatherInfo" :key="value.fxDate">
                <text class="time">{{ numMap[new Date(value.fxDate).getDay()] }}</text>
                <img class="weather-icon" :src="Weather_IMG_BASE_URL + '/' + value.iconDay + '.png'" />
                <view class="temp">
                    <span>{{ value.tempMin + '°' }}</span>
                    <Progress width="200rpx" height="20rpx" class="temp-progress"></Progress>
                    <span>{{ value.tempMax + '°' }}</span>
                </view>
            </li>
        </ul>
    </WeatherSubColumn>
</template>

<script setup lang="ts">
import WeatherSubColumn from '@/components/WeatherSubColumn/WeatherSubColumn.vue';
import Progress from '@/components/Progress/Progress.vue';
import { usePositionStore } from '@/stores/modules/position';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
import { getMultDayWeatherInfo } from '@/service/weather';

/** 位置信息仓库 */
const positionStore = usePositionStore()
const { positionInfo } = storeToRefs(positionStore)

/** 天气图标BASE_URL */
const Weather_IMG_BASE_URL = process.env.Weather_IMG_BASE_URL

/** 数字文本映射 */
const numMap = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

/** 未来每天的天气信息 */
const hourlyWeatherInfo = ref<Api.Weather.GetMultDayWeatherInfo.Response['daily']>([])

/** 监听位置信息的变化 */
watch(positionInfo, async (newProps) => {
    /** getMultDayWeatherInfo 响应结果 */
    const res = await getMultDayWeatherInfo({ ...newProps.location, days: 7 })
    hourlyWeatherInfo.value = res.daily
})

</script>

<style lang="less" scoped>
.weather-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    font-size: 13px;

    .weather-icon {
        width: 40px;
        height: 40px;
    }

    .temp {
        display: flex;

        .temp-progress {
            margin: 0 8px;
        }
    }
}
</style>
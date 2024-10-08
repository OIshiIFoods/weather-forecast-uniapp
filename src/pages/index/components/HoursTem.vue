<template>
    <WeatherSubColumn :title="`当前天气${hourlyWeatherInfo[0]?.text ?? '晴'}，风速最高${hourlyWeatherInfo[0]?.windSpeed ?? 0}米/秒`">
        <scroll-view scroll-x>
            <ul class="tem-list">
                <li class="tem-item" v-for="(value, idx) in hourlyWeatherInfo" :key="value.fxTime">
                    <text class="tem">{{ value.temp + '°' }}</text>
                    <img class="weather-icon" :src="Weather_IMG_BASE_URL + '/' + value.icon + '.png'" />
                    <text class="time">{{ idx === 0 ? '现在' : new Date(value.fxTime).getHours() + '时' }}</text>
                </li>
            </ul>
        </scroll-view>
    </WeatherSubColumn>
</template>

<script setup lang="ts">
import WeatherSubColumn from '@/components/WeatherSubColumn/WeatherSubColumn.vue';
import { getHourlyWeatherInfo } from '@/service/weather';
import { usePositionStore } from '@/stores/modules/position';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';

/** 天气图标BASE_URL */
const Weather_IMG_BASE_URL = process.env.Weather_IMG_BASE_URL

/** 位置信息仓库 */
const positionStore = usePositionStore()
const { positionInfo } = storeToRefs(positionStore)

/** 未来每小时的天气信息 */
const hourlyWeatherInfo = ref<Api.Weather.GetHourlyWeatherInfo.Response['hourly']>([])

/** 监听位置信息变化，更新小时计温度 */
watch(positionInfo, async (newPosition) => {
    const res = await getHourlyWeatherInfo({ ...newPosition.location, hours: 24 })
    hourlyWeatherInfo.value = res.hourly
})

</script>

<style lang="less" scoped>
.tem-list {
    display: flex;

    .tem-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 12px;
        margin-right: 26px;

        .weather-icon {
            width: 30px;
            height: 30px;
            margin: 6px 0;
        }

    }

}
</style>
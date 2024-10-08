<template>
    <WeatherSubColumn title="空气质量">
        <view class="air-wrap">
            <view class="air-state">
                {{ curAirInfo?.aqi + '-' + curAirInfo?.category }}
            </view>
            <view class="info-list">
                <view class="info-item" v-for="value in airInfoList">
                    <span class="title">{{ value.name }}</span>
                    <Progress width="200rpx" height="20rpx" class="progress" />
                    <span class="num">{{ value.value }}</span>
                </view>
            </view>
        </view>
    </WeatherSubColumn>
</template>

<script setup lang="ts">
import WeatherSubColumn from '@/components/WeatherSubColumn/WeatherSubColumn.vue';
import Progress from '@/components/Progress/Progress.vue';
import { usePositionStore } from '@/stores/modules/position';
import { storeToRefs } from 'pinia';
import { computed, ref, watch } from 'vue';
import { getCurAirQuality } from '@/service/weather';

/** 位置信息仓库 */
const positionStore = usePositionStore()
const { positionInfo } = storeToRefs(positionStore)

/** 当前空气信息 */
const curAirInfo = ref<Api.Weather.GetCurAirQuality.Response['now']>()


/** 监听位置信息的变化 */
watch(positionInfo, async (newProps) => {
    const res = await getCurAirQuality(newProps.location)
    curAirInfo.value = res.now
})

/** 空气信息列表 */
const airInfoList = computed(() => {
    /** 不显示的字段信息 */
    const excludeInfo = ['pubTime', 'aqi', 'level', 'category', 'primary']
    /** 空气信息数组 */
    const airInfoArr = Object.entries(curAirInfo.value ?? {}).filter(([name]) => !excludeInfo.includes(name))
    return airInfoArr.map(([name, value]) => ({ name, value }))
})
</script>

<style lang="less" scoped>
.air-wrap {
    width: 80%;
    margin: 0 auto;

    .air-state {
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 700;
    }

    .info-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .info-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 15px;

            .title {
                font-weight: 700;
                font-size: 14px;
            }

            .progress {
                margin: 6px 0;
            }

            .num {
                color: #888888;
                font-size: 12px;
            }
        }
    }
}
</style>
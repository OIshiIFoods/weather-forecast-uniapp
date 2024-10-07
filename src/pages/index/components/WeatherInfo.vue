<template>
    <view class="weather-info" :style=backgroundStyle>
        <view class="position-desc">
            <uni-icons type="map-pin-ellipse" size="15" />
            {{ weatherInfo.posInfo.city + '，' + weatherInfo.posInfo.province }}
        </view>
        <view class="wrap">
            <view class="main-info">
                <img class="weather-icon"
                    :src="weatherInfo.weatherIconUrl.baseUrl + weatherInfo.weatherIconUrl.fileName + '.png'" />
                <view class="tem-and-state">
                    <text class="tem">{{ weatherInfo.temp + '°' }}</text>
                    <text class="state">{{ weatherInfo.weatherState }}</text>
                </view>
            </view>
            <ul class="other-info-list">
                <li class="info-item" v-for="info in weatherInfo.otherInfoList" :key="info?.desc">
                    <text class="num">{{ info?.value }}</text>
                    <text class="desc">{{ info?.desc }}</text>
                </li>
            </ul>
        </view>
    </view>
</template>

<script setup lang="ts">
import { getCurWeatherInfo } from '@/service/weather';
import { usePositionStore } from '@/stores/modules/position';
import { storeToRefs } from 'pinia';
import { watch, ref } from 'vue';

/** 位置信息仓库 */
const positionStore = usePositionStore()
const { positionInfo } = storeToRefs(positionStore)

/** 天气信息 */
const weatherInfo = ref({
    /** 温度 */
    temp: '18',
    /** 天气状态 */
    weatherState: '晴',
    /** 位置信息 */
    posInfo: {
        province: '辽宁省',
        city: '沈阳市'
    },
    /** 天气图标链接 */
    weatherIconUrl: {
        baseUrl: process.env.Weather_IMG_BASE_URL + '/',
        fileName: '100'
    },
    otherInfoList: new Array(8) as { value: number | string, desc: string }[]
})

/** 背景样式 */
const backgroundStyle = ref({
    background: 'linear-gradient(45deg, #f9f2f2, #fde5cb)'
})

/** 监听位置信息的变化 */
watch(positionInfo, async (newProps) => {
    /** 当前天气信息 */
    const curWeatherInfo = (await getCurWeatherInfo(newProps.location)).now

    /** 更新界面中的天气信息 */
    weatherInfo.value = {
        temp: curWeatherInfo.temp,
        weatherState: curWeatherInfo.text,
        posInfo: {
            province: positionInfo.value.ad_info.province,
            city: positionInfo.value.ad_info.city ?? ''
        },
        weatherIconUrl: {
            baseUrl: process.env.Weather_IMG_BASE_URL + '/',
            fileName: curWeatherInfo.icon
        },
        otherInfoList: [
            {
                value: curWeatherInfo.windScale + '级',
                desc: curWeatherInfo.windDir
            },
            {
                value: curWeatherInfo.humidity + '%',
                desc: '相对湿度'
            },
            {
                value: curWeatherInfo.feelsLike + '°',
                desc: '体感温度'
            },
            {
                value: curWeatherInfo.dew + '°',
                desc: '露点温度'
            },
            {
                value: curWeatherInfo.cloud + '%',
                desc: '云量'
            },
            {
                value: curWeatherInfo.vis + 'km',
                desc: '能见度'
            },
            {
                value: curWeatherInfo.pressure + 'hPa',
                desc: '大气压'
            },
            {
                value: curWeatherInfo.precip + 'mm',
                desc: '降水量'
            }
        ]
    }

    /** 更新界面背景 */
    backgroundStyle.value = getBackground(curWeatherInfo.obsTime)
})

/** 获取背景 */
const getBackground = (time: string | number) => {
    /** 规则背景映射列表 */
    const ruleBackMapList = [
        {
            /** 晚上18点到凌晨6点 */
            rule: (curHour: number) => curHour >= 18 || curHour <= 6,
            style: {
                background: "linear-gradient(225deg, #fee5ca, #e9f0ff 55%, #dce3fb)"
            }
        },
        {
            /** 凌晨6点到晚上18点*/
            rule: (curHour: number) => curHour >= 6 && curHour <= 18,
            style: {
                background: "linear-gradient(45deg, #f9f2f2, #fde5cb)"
            }
        }
    ]
    /** 当前钟点数 */
    const curHour = new Date(time).getHours()
    /** 获取第一个符合规则的样式, 没有则采取当前样式 */
    return ruleBackMapList.find(({ rule }) => rule(curHour))?.style ?? backgroundStyle.value
}

</script>

<style lang="less" scoped>
.weather-info {
    border-radius: 30rpx;
    box-sizing: border-box;
    padding: 30rpx 23rpx;

    .position-desc {
        font-size: 12px;
    }

    .wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 10rpx 20rpx 10rpx;

        .main-info {
            display: flex;
            align-items: center;

            .weather-icon {
                width: 100px;
                height: 100px;
            }

            .tem-and-state {
                display: flex;
                flex-direction: column;
                margin-left: 15rpx;

                .tem {
                    font-size: 20px;
                    font-weight: 700;
                }
            }
        }

        .other-info-list {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 40rpx;
            font-size: 10px;

            .info-item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 55px;
                height: 55px;
                background-color: rgba(0, 0, 0, .05);
                border-radius: 15px;
                margin: 0 10rpx 10rpx;

                .num {
                    font-weight: 700;
                    margin-bottom: 3px;
                }

                .desc {
                    color: #908e8d;
                }
            }
        }
    }
}
</style>
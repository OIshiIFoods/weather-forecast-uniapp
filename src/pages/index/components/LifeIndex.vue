<template>
    <WeatherSubColumn title="生活指标">
        <ul class="info-list">
            <li class="info-item" v-for="lifeIndex in lifeIndexList" :key="lifeIndex.type">
                <view
                    :class="['icon', '.indices-' + lifeIndex.code + '-level--' + lifeIndex.level, '.' + lifeIndex.code]"
                    :style="{ backgroundImage: 'url(' + Weather_IMG_BASE_URL + '/index-icon.png)' }" />
                <view class="text">
                    <h3 class="title">{{ lifeIndex.name }}</h3>
                    <text class="desc">{{ lifeIndex.category }}</text>
                </view>
            </li>
        </ul>
    </WeatherSubColumn>
</template>

<script setup lang="ts">
import WeatherSubColumn from '@/components/WeatherSubColumn/WeatherSubColumn.vue';
import { getCurWeatherInfo, getLifeIndex } from '@/service/weather';
import { usePositionStore } from '@/stores/modules/position';
import { storeToRefs } from 'pinia';
import { watch, ref } from 'vue';

/** 位置信息仓库 */
const positionStore = usePositionStore()
const { positionInfo } = storeToRefs(positionStore)

/** 天气图标BASE_URL */
const Weather_IMG_BASE_URL = process.env.Weather_IMG_BASE_URL

/** 生活指数列表 */
const lifeIndexList = ref<(
    Api.Weather.GetLifeIndex.Response['daily'][0]
    & {
        /** 码 */
        code: string
    }
)[]>()

/** 监听位置信息的变化 */
watch(positionInfo, async (newProps) => {
    const res = await getLifeIndex({ ...newProps.location, days: 1 })
    /** type 映射表 */
    const typeMap: { [field: string]: { name: string, label: string } } = {
        '1': {
            name: 'sport',
            label: '运动指数',
        },

        '2': {
            name: 'cw',
            label: '洗车指数',
        },
        '3': {
            name: 'drsg',
            label: '穿衣指数',
        },
        '5': {
            name: 'uv',
            label: '紫外线指数',
        },
        '6': {
            name: 'trav',
            label: '旅游指数',
        },
        '8': {
            name: 'comf',
            label: '舒适度指数',
        },
        '9': {
            name: 'flu',
            label: '感冒指数',
        },
        '10': {
            name: 'air',
            label: '空气污染扩散指数',
        }
    }
    /** 生活指数 */
    const lifeIndex = res.daily.filter(item => item.type in typeMap).map((item) => {
        return {
            ...item,
            code: typeMap[item.type].name
        }
    })
    lifeIndexList.value = lifeIndex
})


</script>

<style lang="less" scoped>
.info-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .info-item {
        display: flex;
        align-items: center;
        background-color: white;
        width: 120px;
        padding: 5px;
        margin-bottom: 5px;

        .icon {
            width: 50px;
            height: 50px;
            margin-right: 8px;
            background-repeat: no-repeat;
            background-size: 438px;
            border-radius: 50%;
            transform: scale(.8);

            &.comf {
                background-position: -69px -4px;
            }

            &.cw {
                background-position: -129px -4px;
            }

            &.drsg {
                background-position: -189px -4px;
            }

            &.flu {
                background-position: -248px -4px;
            }

            &.sport {
                background-position: -69px -70px;
            }

            &.trav {
                background-position: -129px -70px;
            }

            &.uv {
                background-position: -188px -70px;
            }

            &.air {
                background-position: -248px -70px;
            }
        }

        .text {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 50px;

            .title {
                font-size: 12px;
                font-weight: 700;
                margin-bottom: 5px;
            }

            .desc {
                color: rgba(0, 0, 0, .5);
                font-size: 10px;
            }
        }
    }
}

.indices-sport-level--1 {
    background-color: #95B359;
}

.indices-sport-level--2 {
    background-color: #C7BC13;
}

.indices-sport-level--3 {
    background-color: #EC5252;
}

.indices-cw-level--1 {
    background-color: #95B359;
}

.indices-cw-level--2 {
    background-color: #C7BC13;
}

.indices-cw-level--3 {
    background-color: #EC5252;
}

.indices-cw-level--4 {
    background-color: #B145C6;
}

.indices-drsg-level--1 {
    background-color: #7746D6;
}

.indices-drsg-level--2 {
    background-color: #B145C6;
}

.indices-drsg-level--3 {
    background-color: #EC5252;
}

.indices-drsg-level--4 {
    background-color: #F18720;
}

.indices-drsg-level--5 {
    background-color: #FFC805;
}

.indices-drsg-level--6 {
    background-color: #C7BC13;
}

.indices-drsg-level--7 {
    background-color: #95B359;
}

.indices-uv-level--1 {
    background-color: #95B359;
}

.indices-uv-level--2 {
    background-color: #C7BC13;
}

.indices-uv-level--3 {
    background-color: #FFC805;
}

.indices-uv-level--4 {
    background-color: #EC5252;
}

.indices-uv-level--5 {
    background-color: #B145C6;
}

.indices-trav-level--1 {
    background-color: #95B359;
}

.indices-trav-level--2 {
    background-color: #C7BC13;
}

.indices-trav-level--3 {
    background-color: #FFC805;
}

.indices-trav-level--4 {
    background-color: #EC5252;
}

.indices-trav-level--5 {
    background-color: #B145C6;
}

.indices-comf-level--1 {
    background-color: #95B359;
}

.indices-comf-level--2 {
    background-color: #C7BC13;
}

.indices-comf-level--3 {
    background-color: #FFC805;
}

.indices-comf-level--4 {
    background-color: #F18720;
}

.indices-comf-level--5 {
    background-color: #EC5252;
}

.indices-comf-level--6 {
    background-color: #B145C6;
}

.indices-comf-level--7 {
    background-color: #7746D6;
}

.indices-flu-level--1 {
    background-color: #95B359;
}

.indices-flu-level--2 {
    background-color: #FFC805;
}

.indices-flu-level--3 {
    background-color: #EC5252;
}

.indices-flu-level--4 {
    background-color: #B145C6;
}

.indices-air-level--1 {
    background-color: #95B359;
}

.indices-air-level--2 {
    background-color: #A9A538;
}

.indices-air-level--3 {
    background-color: #E0991D;
}

.indices-air-level--4 {
    background-color: #D96161;
}

.indices-air-level--5 {
    background-color: #A257D0;
}
</style>
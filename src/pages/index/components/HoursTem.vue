<template>
    <WeatherSubColumn title="今天持续晴朗，阵风风速最高4米/秒">
        <scroll-view scroll-x>
            <ul class="tem-list">
                <li class="tem-item" v-for="value in 10" :key="value">
                    <text class="tem">26°</text>
                    <i class="weather-icon qi-100-fill"></i>
                    <text class="time">现在</text>
                </li>
            </ul>
        </scroll-view>
    </WeatherSubColumn>
</template>

<script setup lang="ts">
import WeatherSubColumn from '@/components/WeatherSubColumn/WeatherSubColumn.vue';

</script>

<style lang="stylus" scoped>
.tem-list
    display flex
    .tem-item
        display flex
        flex-direction column
        align-items center
        font-size 12px
        margin-right 26px
        .weather-icon
            font-size 30px
            padding 3px 0
</style>
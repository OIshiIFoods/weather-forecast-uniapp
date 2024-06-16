<template>
    <view class="weather-info">
        <view class="position-desc">
            <uni-icons type="map-pin-ellipse" size="15" />
            沈阳市，辽宁省
        </view>
    </view>
</template>

<script setup lang="ts">

</script>

<style lang="stylus" scoped>
.weather-info
    height 650rpx
    background linear-gradient(45deg,#f9f2f2, #fde5cb)
    border-radius 30rpx
    box-sizing border-box
    padding 30rpx 23rpx
    .position-desc
        font-size 12px
</style>
<template>
    <view class="weather-info">
        <view class="position-desc">
            <uni-icons type="map-pin-ellipse" size="15" />
            沈阳市，辽宁省
        </view>
        <view class="wrap">
            <view class="main-info">
                <i class="weather-icon qi-100-fill"></i>
                <view class="tem-and-state">
                    <text class="tem">26°</text>
                    <text class="state">晴</text>
                </view>
            </view>
            <view class="weather-desc">
                今天天气晴，夜晚晴，现在26°，空气一般
            </view>
            <ul class="other-info-list">
                <li class="info-item">
                    <text class="num">1级</text>
                    <text class="info-desc">东风</text>
                </li>
                <li class="info-item">
                    <text class="num">1级</text>
                    <text class="info-desc">东风</text>
                </li>
                <li class="info-item">
                    <text class="num">1级</text>
                    <text class="info-desc">东风</text>
                </li>
                <li class="info-item">
                    <text class="num">1级</text>
                    <text class="info-desc">东风</text>
                </li>
                <li class="info-item">
                    <text class="num">1级</text>
                    <text class="info-desc">东风</text>
                </li>
                <li class="info-item">
                    <text class="num">1级</text>
                    <text class="info-desc">东风</text>
                </li>
                <li class="info-item">
                    <text class="num">1级</text>
                    <text class="info-desc">东风</text>
                </li>

                <li class="info-item">
                    <text class="num">1级</text>
                    <text class="info-desc">东风</text>
                </li>
            </ul>
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
    .wrap
        display flex
        flex-direction column
        align-items center
        box-sizing border-box
        padding 10rpx 20rpx 10rpx
        .main-info
            display flex
            align-items center
            .weather-icon
                font-size 56px
            .tem-and-state
                display:flex
                flex-direction:column
                margin-left 15rpx
                .tem
                    font-size 20px 
                    font-weight 700
        .weather-desc
            font-size 11px
        .other-info-list
            display flex
            justify-content center
            flex-wrap wrap
            margin-top 40rpx
            font-size 10px
            .info-item
                display flex
                flex-direction column
                padding 12px 17px
                background-color rgba(0,0,0,.05)
                border-radius 15px
                margin 0 10rpx 10rpx
                .num
                    font-weight 700
                    margin-bottom 3px
</style>
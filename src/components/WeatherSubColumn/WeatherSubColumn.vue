<template>
  <view class="weather-sub-column">
    <h2 class="title">
      {{ props.title }}
    </h2>
    <view class="constent">
      <slot></slot>
    </view>
  </view>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ title?: string }>(), {
  title: '标题'
})
</script>

<style lang="less" scoped>
.weather-sub-column {
  margin-top: 10px;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 6px 15px 20px;
  background-color: rgb(247, 247, 247);

  .title {
    font-size: 12px;
    line-height: 29px;
    padding-bottom: 5px;
  }
}
</style>
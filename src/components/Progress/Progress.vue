<template>
  <div :style="progressStyle"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{ width: string, height: string, colors: Array<string> }>(), {
  width: '200px',
  height: '10px',
  colors: () => ['#427bff', '#916cae', '#f65949'],
})

const linearGradient = () => {
  let colorCount = props.colors.length
  // 当只有一个颜色时
  if (colorCount === 1) {
    return props.colors[0]
  }
  // 确定两侧颜色的比例
  let sideRate = 5
  let rate = ~~((100 - sideRate * 2) / (colorCount - 1))
  let value = props.colors.reduce((acc, curValue, idx) => {
    acc += `,${curValue} ${sideRate + rate * idx}%`
    return acc
  }, 'to right')
  return `linear-gradient(${value})`
}
const progressStyle = computed(() => ({
  'background': linearGradient(),
  'width': props.width,
  'height': props.height,
  'border-radius': parseFloat(props.height) / 2 + props.height.replace(/[0-9]+/g, '')
}))
</script>

<style lang="stylus" scoped>
</style>
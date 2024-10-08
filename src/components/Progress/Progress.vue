<template>
  <div :style="progressStyle">
    <div :style="showContentStyle">
      <div :style="colorLineStyle"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue';

type Props = {
  /** 进度条宽度 */
  width?: string
  /** 进度条高度 */
  height?: string
  /** 进度条颜色 */
  colors?: Array<string>
  /** 进度条背景颜色 */
  backgroundColor?: string,
  /** 进度条的最小值 */
  minValue?: number
  /** 进度条最大值 */
  maxValue?: number
  /** 进度条当前值 */
  curValue?: number
}

const props = withDefaults(defineProps<Props>(), {
  width: '200px',
  height: '10px',
  colors: () => ['#427bff', '#916cae', '#f65949'],
  backgroundColor: '#dadde0',
  maxValue: 100,
  minValue: 0,
  curValue: 100,
})

/** 获取进度条渐变色 */
const getLinearGradient = (colors: string[]) => {
  let colorCount = colors.length
  // 当只有一个颜色时
  if (colorCount === 1) {
    return colors[0]
  }
  // 确定两侧颜色的比例
  let sideRate = 5
  let rate = ~~((100 - sideRate * 2) / (colorCount - 1))
  /** 颜色渐变方向 */
  const colorDirection = 'to right,'
  /** 颜色 */
  let value = colors.map((curValue, idx) => {
    return `${curValue} ${sideRate + rate * idx}%`
  }).join(',')
  return `linear-gradient(${colorDirection + value})`
}

/** 获取显示区域宽度 */
const getShowAreaWidth = (params: Required<Pick<Props, 'width' | 'curValue' | 'maxValue' | 'minValue'>>) => {
  /** 比例 */
  const ratio = (params.curValue - params.minValue) / (params.maxValue - params.minValue)
  /** 宽度 */
  const width = ~~(parseFloat(params.width) * ratio) + params.width.replace(/[0-9\.]+/g, '')
  return width
}

/** 进度条样式 */
const progressStyle = computed(() => ({
  'overflow': 'hidden',
  'width': props.width,
  'height': props.height,
  'backgroundColor': props.backgroundColor,
  'border-radius': parseFloat(props.height) / 2 + props.height.replace(/[0-9]+/g, '')
} as CSSProperties))

/** 显示内容的区域样式 */
const showContentStyle = computed(() => ({
  'overflow': 'hidden',
  'width': getShowAreaWidth(props),
  'height': props.height,
  'border-radius': parseFloat(props.height) / 2 + props.height.replace(/[0-9]+/g, '')
} as CSSProperties))

/** 颜色线样式 */
const colorLineStyle = computed(() => ({
  'width': props.width,
  'height': props.height,
  'background': getLinearGradient(props.colors),
} as CSSProperties))
</script>

<style lang="less" scoped></style>
<template>
  <section id="myChart" ref="myChart" style="height:500px"></section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// 重点：此位置引入的是你单独配置的echarts
import echarts from '@/config/echart.config';

@Component
export default class Eline extends Vue {
  private pieChart: any;
  private option: object = {
    title: {
      text: '折线图',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['邮件营销', '联盟广告', '搜索引擎'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };

  private mounted() {
    this.draw();
  }
  private draw() {
    this.pieChart = echarts.init(this.$refs.myChart as HTMLCanvasElement);
    // 下面是具体的配置
    this.pieChart.setOption(this.option);
  }
}
</script>

<style scoped>
</style>

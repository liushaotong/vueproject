<template>
  <div>
    <div style="min-height: 300px;" ref="myEchart"></div>   
  </div>
</template>

<script>
export default {
  data () {
    return {
      chart: null,
      option:{  //echarts
        title: {
         text: '拓扑图'
        },
        tooltip: {
         show: false,
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
        {
            type: 'graph',
            layout: 'none',
            label: {
                normal: {
                    show: false,
                    positon: 'bottom',
                }
            },
            edgeSymbol: ['none', 'none'],
            // edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
                name: 'switch',
                symbol: 'image://https://raw.githubusercontent.com/liushaotong/vueproject/master/src/assets/switch.png',
                symbolSize: 50,
                x: 500,
                y: 300
            }, {
                name: '1',
                symbol: 'image://https://raw.githubusercontent.com/liushaotong/vueproject/master/src/assets/pc.png',
                symbolSize: 50,
                x: 800,
                y: 300
            }, {
                name: '2',
                symbol: 'image://https://raw.githubusercontent.com/liushaotong/vueproject/master/src/assets/pc.png',
                symbolSize: 50,
                x: 550,
                y: 100
            }, {
                name: '3',
                symbol: 'image://https://raw.githubusercontent.com/liushaotong/vueproject/master/src/assets/pc.png',
                symbolSize: 50,
                x: 350,
                y: 500
            }],
            links: [{
                source: 0,
                target: 2,
            }, {
                source: 0,
                target: 1,
            }, {
                source: 0,
                target: 3
            }],
            lineStyle: {
                normal: {
                    color: '#FFFFFF',
                    opacity: 1,
                    width: 2,
                    curveness: 0
                }
            }
        }
    ]
      }
    }
  },
  mounted(){
    this.initChart();
  },
  methods: {
    initChart(){
          this.chart = this.$echarts.init(this.$refs.myEchart);
          this.chart.setOption(this.option);
          let self = this;
          this.chart.on('click',function(params){
            self.$emit("sethost", params.data.name);
          })
      },
  },
}

</script>
<style lang='css' scoped>

</style>
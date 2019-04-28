<template lang="html">
  <transition name="fade">
    <div>
      <el-row :gutter="20" >
        <v-function :primessage="mypri" :pubmessage="mypub" @searchpri="searchpri" @searchpub="searchpub"></v-function>
        <el-col :span="12">
          <br>
          <br>
          <div class="grid-content-big bg-purple-dark">
            <div style="min-height: 300px;" ref="myEchart"></div>   
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content-small bg-purple">
            <v-button :message="myhost" :mysearchpri="mysearchpri" :mysearchpub="mysearchpub" @listenpri="setpri" @listenpub="setpub"></v-button>
          </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content-small bg-purple-light">
              <v-table :primessage="mypri" :pubmessage="mypub"></v-table>
            </div>
          </el-col>
      </el-row>
    </div>
  </transition>
</template>

<script>
import button from './module/button.vue'
import table from './module/table.vue'
import func from './module/function.vue'
export default {
  name: 'mytable',
  components: {
    'v-button': button,
    'v-table': table,
    'v-function': func,
   },
  data () {
    return {
      chart: null,
      mypri: "",
      mypub: "",
      mysearchpri: "",
      mysearchpub: "",
      myhost: 0,
      myjson: "",
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
            self.myhost = params.data.name;
          })
      },
     setpri(data){
       this.mypri = data;
      },
     setpub(data){
        this.mypub = data;
      },
      searchpri(data){
        this.mysearchpri = data;
      },
      searchpub(data){
        this.mysearchpub = data;
      },
  },
  created: function(){    
  }
}
</script>

<style lang="css" scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s
}
.fade-enter, .fade-leave-to  {
    opacity: 0
}

/* .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  } */
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .grid-content-big {
    border-radius: 4px;
    min-height: 400px;
  }
  .grid-content-small{
    border-radius: 4px;
    min-height: 200px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

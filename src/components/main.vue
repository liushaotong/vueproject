<template lang="html">
  <transition name="fade">
    <div>
      <el-row :gutter="20" >
        <el-button style="float: right; margin-right:10px" @click="findpri()">找私钥</el-button>
        <el-button style="float: right; margin-right:20px" @click="findpub()">找公钥</el-button>
        <el-col :span="12">
          <br>
          <br>
          <div class="grid-content-big bg-purple-dark">
            <div style="min-height: 300px;" ref="myEchart"></div>   
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content-small bg-purple">
              <!-- <v-tpmbutton message="dad's msg" @listen="showData"></v-tpmbutton>
              <v-tpmpubbutton message="dad's msg" @listen="showpubData"></v-tpmpubbutton> -->
            <v-button></v-button>
          </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content-small bg-purple-light">
                <el-table :data="pritableData" border style="width: 100%" v-show="showpri">
              <el-table-column prop="uuid" label="uuid" width="180">
              </el-table-column>
              <el-table-column prop="vtcm_uuid" label="vtcm_uuid" width="180">
              </el-table-column>
              <el-table-column prop="issmkwrapped" label="issmkwrapped" width="130">
              </el-table-column>
              <el-table-column prop="key_usage" label="key_usage" width="130">
              </el-table-column>
              <el-table-column prop="key_flags" label="key_flags" width="130">
              </el-table-column>
              <el-table-column prop="pcrinfo_uuid" label="pcrinfo_uuid" width="120">
              </el-table-column>
              <el-table-column prop="wrapkey_uuid" label="wrapkey_uuid" width="120">
              </el-table-column>
              <el-table-column prop="pubkey_uuid" label="pubkey_uuid" width="130">
              </el-table-column>
            </el-table>

            <el-table :data="pubtableData" border style="width: 100%" v-show="showpub">
              <el-table-column prop="uuid" label="uuid" width="180">
              </el-table-column>
              <el-table-column prop="vtcm_uuid" label="vtcm_uuid" width="180">
              </el-table-column>
              <el-table-column prop="ispubek" label="ispubek" width="130">
              </el-table-column>
              <el-table-column prop="key_usage" label="key_usage" width="130">
              </el-table-column>
              <el-table-column prop="key_flags" label="key_flags" width="130">
              </el-table-column>
              <el-table-column prop="pcrinfo_uuid" label="pcrinfo_uuid" width="120">
              </el-table-column>
              <el-table-column prop="prikey_uuid" label="prikey_uuid" width="130">
              </el-table-column>
            </el-table>
            </div>
          </el-col>
      </el-row>
    </div>
  </transition>
</template>

<script>
import button from './button.vue'
export default {
  name: 'mytable',
  components: {
    'v-button': button,
   },
  data () {
    return {
      chart: null,
      showpri: true,
      showpub: true,
      mypri: "",
      mypub: "",
      myhost: '',
      myhost: null, //哪台host
      priData: [],
      pubData: [],
      pritableData: [],
      pubtableData: [],
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
            console.log(params.data.name);
            self.myhost = params.data.name;
          })
      },
     showData(data){
       this.mypri = data;
        for(let i = 0; i<this.priData.length; i++ ){
        if(this.priData[i].uuid == data){
          this.pritableData.pop();
          this.pritableData.push(this.priData[i]);
        }
      }
    },
    showpubData(data){
        this.mypub = data;
        for(let i = 0; i<this.pubData.length; i++ ){
        if(this.pubData[i].uuid == data){
          this.pubtableData.pop();
          this.pubtableData.push(this.pubData[i]);
        }
      }
    },
    findpri(){
      for(let i = 0; i<this.priData.length; i++){
        if(this.priData[i].pubkey_uuid == this.mypub){
          alert(i);
        }
      }
    },
    findpub(){
      for(let i = 0; i<this.pubData.length; i++){
        if(this.pubData[i].prikey_uuid == this.mypri){
          alert(i);
        }
      }
    },
  },
  created: function(){
    let self = this;
    self.$http.get('/static/resource/privatekey1.json').then(response => {
      self.priData.push(response.data);
    });
    self.$http.get('/static/resource/privatekey2.json').then(response => {
      self.priData.push(response.data);
    });
    self.$http.get('/static/resource/privatekey3.json').then(response => {
      self.priData.push(response.data);
    });
    self.$http.get('/static/resource/publickey1.json').then(response => {
      self.pubData.push(response.data);
    });
    self.$http.get('/static/resource/publickey2.json').then(response => {
      self.pubData.push(response.data);
    });
    self.$http.get('/static/resource/publickey3.json').then(response => {
      self.pubData.push(response.data);
    });
    
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

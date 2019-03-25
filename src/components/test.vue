<template lang="html">
  <transition name="fade">
    <div>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="button-content bg-purple">
              <h2> TPM1 </h2>
              <el-button type="primary" v-for="site in myData" @click = "showData(site.name)">{{site.name}}</el-button>
            </div>
            <div class="button-content bg-purple">
              <h2> TPM2 </h2>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="name" label="名字" width="180">
              </el-table-column>
              <el-table-column prop="data" label="数据" width="180">
              </el-table-column>
              <el-table-column prop="info" label="信息">
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
  </transition>
</template>

<script>
// import Modal from '../modal/testmodal.vue'
export default {
  name: 'test',
  // components: {
  //   Modal
  // },
  data () {
    return {
      myData: [],
      tableData: [],
    }
  },
  methods: {
    showData(name){
      // console.log(name)
      for(let i = 0; i<this.myData.length; i++ ){
        if(this.myData[i].name == name){
          this.tableData.pop();
          this.tableData.push(this.myData[i]);
        }
      }
    }
  },
  created: function(){
    this.$http.get('/static/resource/example.json').then(response => {
      // this.myjson = JSON.stringify(response.data.tableData);
      // console.log(this.myjson);
      this.myData = response.data.tableData;
    })
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
  .grid-content {
    border-radius: 4px;
    min-height: 400px;
  }
  .button-content {
    border-style: solid;
    height: 130px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<template lang="html">
  <transition name="fade">
    <div>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="button-content">
              <v-tpmbutton message="dad's msg" @listen="showData"></v-tpmbutton>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-table :data="tableData" border style="width: 100%">
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
          </div>
        </el-col>
      </el-row>
    </div>
  </transition>
</template>

<script>
//import Modal from '../modal/testmodal.vue'
import tpmbutton from './tpm-button.vue'
export default {
  name: 'mytable',
  components: {
  //   Modal
    'v-tpmbutton': tpmbutton 
   },
  data () {
    return {
      myData: [],
      tableData: [],
      myjson: "",
    }
  },
  methods: {
    showData(data){
        for(let i = 0; i<this.myData.length; i++ ){
        if(this.myData[i].uuid == data){
          this.tableData.pop();
          this.tableData.push(this.myData[i]);
        }
      }
    }
  },
  created: function(){
    let self = this;
    self.$http.get('/static/resource/testkey1.json').then(response => {
      self.myData.push(response.data);
    });
    self.$http.get('/static/resource/testkey2.json').then(response => {
      self.myData.push(response.data);
    });
    self.$http.get('/static/resource/testkey3.json').then(response => {
      self.myData.push(response.data);
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

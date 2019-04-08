<template lang="html">
  <transition name="fade">
    <div>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-button> public key </el-button>
            <div class="host-content" @click="changehost1">
              <h3> host1 </h3>
              <div class="tpm-content" @click="changetpm1">
               <!-- <v-tpmbutton :message="site.name" @listen="showData" v-for="(site, name) in sites" :key="name"></v-tpmbutton> -->
                <v-tpmbutton message="tpm1" @listen="showData"></v-tpmbutton>
              </div>
              <div class="tpm-content" @click="changetpm2">
                <v-tpmbutton message="tpm2" @listen="showData"></v-tpmbutton>
              </div>
            </div>
            <div class="host-content" @click="changehost2">
              <h3> host2 </h3>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <h1> {{hosttitle}} </h1>
            <h2> {{tpmtitle}} </h2>
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
  name: 'test',
  components: {
  //   Modal
    'v-tpmbutton': tpmbutton 
   },
  data () {
    return {
      myData: [],
      tableData: [],
      testdata: 123,
      hosttitle: '',
      tpmtitle: '',
      sites: [
      { name: 'Runoob' },
      { name: 'Google' },
      { name: 'Taobao' }
    ],
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
    },
    changehost1(){
      this.hosttitle = 'host1';
    },
    changehost2(){
      this.hosttitle = 'host2';
    },
    changetpm1(){
      this.tpmtitle = 'tpm1';
    },
    changetpm2(){
      this.tpmtitle = 'tpm2';
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
    min-height: 600px;
  }
  .tpm-content {
    border-style: solid;
    height: 130px;
  }
  .host-content {
    border-style: solid;
    height: 320px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

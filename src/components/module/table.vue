<template>
    <div>
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
</template>

<script>
export default {
  data () {
    return {
        showpri: false,
        showpub: false,
        priData: [],
        pubData: [],
        pritableData: [],
        pubtableData: [],
    }
  },
  props:['primessage', 'pubmessage'],
  watch: {
    primessage: function(newVal, oldVal){
      this.showpri = true;
      this.showpub = false;
      this.showpriData(newVal);
    },
    pubmessage: function(newVal, oldVal){
      this.showpri = false;
      this.showpub = true;
      this.showpubData(newVal);
    },
  },
  methods: {
    showpriData(data){
        for(let i = 0; i<this.priData.length; i++ ){
        if(this.priData[i].uuid == data){
          this.pritableData.pop();
          this.pritableData.push(this.priData[i]);
        }
      }
    },
    showpubData(data){
        for(let i = 0; i<this.pubData.length; i++ ){
        if(this.pubData[i].uuid == data){
          this.pubtableData.pop();
          this.pubtableData.push(this.pubData[i]);
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
    })
    
  }
}

</script>
<style lang='css' scoped>

</style>
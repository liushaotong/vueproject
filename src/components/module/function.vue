<template>
  <div>
    <el-button style="float: right; margin-right:10px" @click="findpri()">找私钥</el-button>
    <el-button style="float: right; margin-right:20px" @click="findpub()">找公钥</el-button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      priData: [],
      pubData: [],
    }
  },
  props:['primessage', 'pubmessage'],
  methods: {
    findpri(){
       for(let i = 0; i<this.priData.length; i++){
         if(this.priData[i].pubkey_uuid == this.pubmessage){
           this.$emit("searchpri", this.priData[i].uuid);
           this.$emit("searchpub", null);
         }
       }
    },
    findpub(){
       for(let i = 0; i<this.pubData.length; i++){
         if(this.pubData[i].prikey_uuid == this.primessage){
           this.$emit("searchpub", this.pubData[i].uuid);
           this.$emit("searchpri", null);
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
<template>
  <div class="button-content">
      <div v-show="showone">
        <el-button :type="pritype" v-for="(site, uuid) in priData" :key="uuid" @click="sendName(site.uuid)">{{ site.uuid | sixbit }}</el-button>
        <br>
        <br>
        <el-button :type="pubtype" v-for="(site, uuid) in pubData" :key="uuid" @click="sendName(site.uuid)">{{ site.uuid | sixbit }}</el-button>
      </div>
      <div v-show="showtwo">

      </div>
      <div v-show="showthree">

      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      priData: [],
      pubData: [],
      showone: false,
      showtwo: false,
      showthree: false,
      //myName,
      pritype: "primary",
      pubtype: "success",
    }
  },
  props:['message'],
  filters: {
    sixbit(value){
      return value.substr(0,6);
    }
  },
  methods: {
    sendName(uuid){
        let myName = uuid;
        this.$emit("listen", myName);
    }
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
.button-content {
    height: 60px;
  }
</style>
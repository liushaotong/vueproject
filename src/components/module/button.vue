<template>
  <div class="button-content">
      <div v-show="showone">
        <el-button :type="site.uuid===mysearchpri ? 'warning':'primary'" v-for="(site, id) in priData" :key="'pri'+id" @click="sendpriName(site.uuid)">{{ site.uuid | sixbit }}</el-button>
        <br>
        <br>
        <el-button :type="site.uuid===mysearchpub ? 'warning':'success'" v-for="(site, id) in pubData" :key="'pub'+id" @click="sendpubName(site.uuid)">{{ site.uuid | sixbit }}</el-button>
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
      showData: '',
      testuuid: "f8db6f8e71df484ef7a7541264d560eff408366c75799c63d1f91faa1956d8a1",
      //myName,
    }
  },
  props:['message', 'mysearchpri', 'mysearchpub'],
  watch: {
    message: function(newVal, oldVal){
      this.showData = newVal;
      this.showButton();
    },
    // mysearchpri: function(newVal, oldVal){

    // },
    // mysearchpub: function(newVal, oldVal){

    // },
  },
  filters: {
    sixbit(value){
      return value.substr(0,6);
    }
  },
  methods: {
    // test(data){
    //   if(data != 0){
    //     return "primary";
    //   }
    // },
    sendpriName(uuid){
        let mypriName = uuid;
        this.$emit("listenpri", mypriName);
    },
    sendpubName(uuid){
      let mypubName = uuid;
      this.$emit("listenpub", mypubName);
    },
    showButton(){
         if(this.showData == 1){
            this.showone = true;
            this.showtwo = false;
            this.showthree = false;
         }
         else if(this.showData == 2){
           this.showone = false;
           this.showtwo = true;
           this.showthree = false;
         }
         else if(this.showData == 3){
           this.showone = false;
           this.showtwo = false;
           this.showthree = true;
         }
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
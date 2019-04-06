<template>
  <div class="button-content">
    <h2>{{message}}</h2>
    <el-button :type="mytype" v-for="(site, uuid) in myData" :key="uuid" @click="sendName(site.uuid)">{{ site.uuid | sixbit }}</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myData: [],
      //myName,
      mytype: "primary",
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
    setTimeout(function(){self.$http.get('/static/resource/testkey1.json').then(response => {
      self.myData.push(response.data);
    });
    }, 500);
    setTimeout(function(){self.$http.get('/static/resource/testkey2.json').then(response => {
      self.myData.push(response.data);
    });
    }, 1000);
    
    setTimeout(function(){self.$http.get('/static/resource/testkey3.json').then(response => {
      self.myData.push(response.data);
    })
    }, 1500);
  }
}

</script>
<style lang='css' scoped>
.button-content {
    border-style: solid;
    height: 130px;
  }
</style>
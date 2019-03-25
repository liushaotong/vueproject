<template>
  <div class="button-content">
    <h2>TPM</h2>
    <el-button type="primary" v-for="(site, name) in myData" :key="name" @click="sendName(site.name)">{{site.name}}</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myData: [],
      //myName,
    }
  },
  props:['message'],
  methods: {
    sendName(name){
        let myName = name;
        this.$emit("listen", myName);
    }
  },
  created: function(){
    this.$http.get('/static/resource/example.json').then(response => {
        this.myData = response.data.tableData;
    })
  }
}

</script>
<style lang='css' scoped>
.button-content {
    border-style: solid;
    height: 130px;
  }
</style>
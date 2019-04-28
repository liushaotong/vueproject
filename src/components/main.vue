<template lang="html">
  <transition name="fade">
    <div>
      <el-row :gutter="20" >
        <v-function :primessage="mypri" :pubmessage="mypub" @searchpri="searchpri" @searchpub="searchpub"></v-function>
        <el-col :span="12">
          <br>
          <br>
          <div class="grid-content-big bg-purple-dark">
            <v-topo @sethost="sethost"></v-topo>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content-small bg-purple">
            <v-button :message="myhost" :mysearchpri="mysearchpri" :mysearchpub="mysearchpub" @listenpri="setpri" @listenpub="setpub"></v-button>
          </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content-small bg-purple-light">
              <v-table :primessage="mypri" :pubmessage="mypub"></v-table>
            </div>
          </el-col>
      </el-row>
    </div>
  </transition>
</template>

<script>
import button from './module/button.vue'
import table from './module/table.vue'
import func from './module/function.vue'
import topo from './module/topo.vue'
export default {
  name: 'mytable',
  components: {
    'v-button': button,
    'v-table': table,
    'v-function': func,
    'v-topo': topo,
   },
  data () {
    return {
      mypri: "",
      mypub: "",
      mysearchpri: "",
      mysearchpub: "",
      myhost: 0,
      myjson: "",
    }
  },
  mounted(){
  },
  methods: {
     setpri(data){
       this.mypri = data;
      },
     setpub(data){
        this.mypub = data;
      },
     searchpri(data){
        this.mysearchpri = data;
      },
     searchpub(data){
        this.mysearchpub = data;
      },
      sethost(data){
        this.myhost = data;
      }
  },
  created: function(){    
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

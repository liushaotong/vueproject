<template>
  <div>
    <div class="login" v-show="loginShow">
      <h2>连接</h2>
      <input type="text" name="" placeholder="ip地址" id="addr_id" value="192.168.92.129">
      <br>
      <input type="text" name="" placeholder="端口号" id="port_id" value="13999">
      <br>
      <button type="button" name="button" @click="login()">连接</button>
    </div>
    <transition name="newplatform">
      <div class="myplatform" v-show="platformShow">
        <h2>platform</h2>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      loginShow: true,
      platformShow: false,
      isconnected: false,
      wsock:'',
      data: {}, //传输json数据

    }
  },
  methods:{
    login () {
      this.socketinit();
    },
    login_success () {
      this.loginShow = false;
      this.platformShow = true;
    },
    socketinit () {
			let netaddr = document.getElementById("addr_id");
			let netport = document.getElementById("port_id");
      this.wsock = new WebSocket('ws://'+netaddr.value+':'+netport.value, 'cube-wsport');
      let self=this;
			self.wsock.onopen = function (e) {
        if (!this.isconnected) {
	         this.isconnected = true;
	         self.login_success();
	        }
	         return;
	       };
	    self.wsock.onclose = function(e) {
			   };
			self.wsock.onerror = function(e) {
			     alert("连接失败");
			};
    },
  }
}
</script>

<style lang="css" scoped>
</style>

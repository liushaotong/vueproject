<template>
  <div>
    <div class="loginback" v-show="loginShow">
      <div class="loginfront">
        <h1>连接</h1>
        <input type="text" name="" placeholder="ip地址" id="addr_id" value="192.168.92.130">
        <br>
        <input type="text" name="" placeholder="端口号" id="port_id" value="13999">
        <br>
        <button type="button" name="button" @click="login()">连接</button>
      </div>
    </div>
    <transition name="fade">
      <div class="myplatform" v-show="platformShow">
        <h2>platform</h2>
        <p>
           <router-link to="/test"> test </router-link>
        </p>
        <div>
          <router-view></router-view>
        </div>
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
.loginback
{
  background-image: url(../assets/background.jpg);
  background-repeat: no-repeat;
  position: absolute;
  height: 100%;
  width: 100%;
}
.loginfront h1
{
  text-shadow: 5px 5px 5px #FF0000;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s
}
.fade-enter, .fade-leave-to  {
    opacity: 0
}


</style>

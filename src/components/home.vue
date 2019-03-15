<template>
  <div>
    <div class="loginback" v-show="loginShow">
      <div class="loginfront">
        <h1>连接</h1>
          <div class="input_control">
            <input type="text" name="" placeholder="请输入你的ip地址" id="addr_id" value="192.168.92.131">
          </div>
          <div class="input_control">
            <input type="text" name="" placeholder="请输入你的端口号" id="port_id" value="13999">
          </div>
        <div class="input_control">
          <input type="button" value="连接" @click="login()">
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="myplatform" v-show="platformShow">
        <h2>platform</h2>
        <p>
          <router-link to="/"> hello </router-link>
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
  background-position: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: cover;
}
.loginfront h1
{
  text-shadow: 5px 5px 5px #FF0000;
  text-align: center;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s
}
.fade-enter, .fade-leave-to  {
    opacity: 0
}
.input_control{
  width:360px;
  margin:20px auto;
}
input[type="text"],#btn1,#btn2{
  box-sizing: border-box;
  text-align:center;
  font-size:1.4em;
  height:2.7em;
  border-radius:4px;
  border:1px solid #c8cccf;
  color:#6a6f77;
  -web-kit-appearance:none;
  -moz-appearance: none;
  display:block;
  outline:0;
  padding:0 1em;
  text-decoration:none;
  width:100%;
}
input[type="text"]:focus{
  border:1px solid #ff7496;
}
input[type="button"]{
  background-color: green;
  box-sizing: border-box;
  text-align:center;
  font-size:1.4em;
  height:2.7em;
  border-radius:4px;
  border:1px solid #c8cccf;
  -web-kit-appearance:none;
  -moz-appearance: none;
  display:block;
  outline:0;
  padding:0 1em;
  text-decoration:none;
  width:100%;

}

</style>

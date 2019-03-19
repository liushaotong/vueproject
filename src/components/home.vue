<template>
  <div>
  <section class="login" v-show="loginShow">
    <header class="login-header">
      <h1 class="brand"><router-link to="/" tabindex="-1">Title</router-link></h1>
    </header>
    <el-form class="login-form" auto-complete="off"  :rules="rules" ref="login-form" label-position="top">
      <h2 class="heading">Connect</h2>
      <el-form-item label="ip地址">
        <el-input type="text" v-model="addr_id" placeholder="请输入ip地址"/>
      </el-form-item>
      <el-form-item label="端口号">
        <el-input type="text" v-model="port_id" placeholder="请输入端口号"/>
      </el-form-item>
      <el-button type="primary" :loading="loading" @click="login()">{{ loading ? 'Loading...' : 'Login' }}</el-button>
    </el-form>
    <footer class="login-footer">
      my project
    </footer>
  </section>
  <transition name="fade">
    <div class="myplatform" v-show="platformShow">
      <h2>platform</h2>
      <!-- <p> -->
        <router-link :to="{ name : 'Hello'}"> hello </router-link>
        <router-link :to="{name : 'test'}"> test </router-link>
      <!-- </p> -->
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
    const rules = {
      username: { required: true, message: '请输入ip地址' },
      password: { required: true, message: '请输入端口号' },
    }

    return {

      rules: rules,
      loading: false,

      addr_id: '192.168.92.131',
      port_id: '13999',

      loginShow: true,
      platformShow: false,
      isconnected: false,
      wsock:'',
      data: {}, //传输json数据
    }
  },

  methods: {
    login () {
      this.socketinit();
    },
    login_success () {
      this.loginShow = false;
      this.platformShow = true;
    },
    socketinit () {
      this.wsock = new WebSocket('ws://'+this.addr_id+':'+this.port_id, 'cube-wsport');
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

<style lang="scss">

body {
  background: #2b3b49;
  color: #FFFFFF;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s
}
.fade-enter, .fade-leave-to  {
    opacity: 0
}

  .login {
    flex: 1;
    width: 95%;
    max-width: 22rem;
    margin: 0 auto;
    font-size: .875rem;

    &-header {
      margin-bottom: 1rem;

      .brand {
        margin: 4.5rem 0 3.5rem;
        text-align: center;
        letter-spacing: .125rem;

        a {
          margin: 0;
          color: #D3DCE6;
          font: 300 3rem sans-serif;

          &:hover {
            color: #FFFFFF;
            text-shadow: 0 0 1rem #FFFFFF;
          }
        }
      }
    }

    &-form {
      margin-bottom: 2.5rem;
      padding: 1.875rem 1.25rem;
      background: #D3DCE6;
      color: #2b3b49;

      .heading {
        margin: 0 0 1rem;
        font-weight: 400;
        font-size: 1.5rem;
      }

      .el-button {
        margin-top: .5rem;
        width: 100%;
      }
    }

    &-footer {
      margin-bottom: 1rem;
      padding: .625rem;
      border: .0625rem solid #D3DCE6;
      font-size: .75rem;
      text-align: center;

      a {
        color: #D3DCE6;
      }
    }
  }
</style>

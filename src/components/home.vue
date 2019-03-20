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
    <div v-show="platformShow">
    <el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#2b3b49"  text-color="#fff"  active-text-color="#ffd04b">
  <el-menu-item index="/">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="/test">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
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
    handleSelect(key, keyPath) {
       console.log(key, keyPath);
     },
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

<template lang="html">
  <transition name="fade">
    <div>
      <button type="button" name="button" @click="showModal">打开</button>
      <modal v-show="isModalVisible" @close="closeModal">
        <template v-slot:header>
          <h2> {{msg}} </h2>
        </template>
        <template v-slot:body>
          <p> my paragraph </p>
        </template>
        <!-- <template v-slot:footer>
          <p> my footer </p>
        </template> -->
      </modal>
    </div>
  </transition>
</template>

<script>
import Modal from '../modal/testmodal.vue'
export default {
  name: 'test',
  components: {
    Modal
  },
  data () {
    return {
      isModalVisible: false,
      msg: 'myheader'
    }
  },
  methods: {
    showModal: function() {
      this.isModalVisible = true
    },
    closeModal: function() {
      this.isModalVisible = false
    },
  }
}
</script>

<style lang="css" scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s
}
.fade-enter, .fade-leave-to  {
    opacity: 0
}
</style>

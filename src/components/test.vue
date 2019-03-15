<template lang="html">
  <div>
    <button type="button" name="button" @click="showModal">打开</button>
    <modal v-show="isModalVisible" @close="closeModal" />
  </div>
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
      isModalVisible: false
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
</style>

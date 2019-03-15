<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-header">
        <slot name="header">
          <h2>Title</h2>
          <button type="button" class="btn-close" @click="close">x</button>
        </slot>
      </div>
      <div class="modal-body">
        <slot name="body"> Body </slot>
      </div>
      <div class="modal-footer">
        <slot name="footer">
          Footer
          <button type="button" class="btn-green" @click="close">关闭</button>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    close: function () {
      this.$emit('close');
      console.log('123');
    }
  }
}
</script>
<style scoped>
.modal-backdrop
{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal
{
  background-color: #fff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x:auto;
  display: flex;
  flex-direction: column;
}
.modal-header,.modal-footer
{
  padding: 15px;
  display: flex;
}
.modal-header
{
  border-bottom: 1px solid #eee;
  color: #4aae9b;
  justify-content: space-between;
}
.modal-footer
{
  border-top: 1px solid #eee;
  justify-content: flex-end;
}
.modal-body
{
  position: relative;
  padding: 20px 10px;
}
.btn-close
{
  border: none 0;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background-color: transparent;
}
.btn-green
{
  color: #fff;
  background-color: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>

<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <!-- <slot name="main"></slot> -->
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
  .layout-container{
    height: 100%;
    width: 100%;
    display: flex;
    .left, .right{
      flex: 0 0 auto;
      // overflow: hidden;
    }
    .main{
      // height: 100%;
      // width: 100%;
      flex: 1 1 auto;
      overflow: hidden;
    }
  }
</style>
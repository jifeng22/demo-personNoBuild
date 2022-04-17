<template>
  <div class="not-found-container">
      <span>Sorry Not Found</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import '~@/styles/mix.less';
    .not-found-container{
        height: 100%;
        width: 100%;
        font-size: 40px;
        text-align: center;
        line-height: 100%;
        position: relative;
        span{
            .self-center();
        }
    }
</style>
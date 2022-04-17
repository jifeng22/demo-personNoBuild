<template>
  <div class="top-container" @click="handleClick" v-show="show">Top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    async handleScroll(dom) {
        if(!dom) {
            this.show = false;
            return;
        }
      const range = 500;
     
      this.show = dom.scrollTop >= range ? true : false;
    },
    handleClick() {
        this.$bus.$emit('setMainScroll', 0);
    },
    isShow(isShow) {
        this.show = isShow;
    }
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
    this.$bus.$on("scroll", this.handleScroll)
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
    this.$bus.$off('scroll', this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.top-container {
  position: fixed;
  right: 50px;
  bottom: 50px;
  height: 50px;
  width: 50px;
  background: @primary;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 50px;
  box-shadow: 1px 1px 5px 2px #abcdef;
  cursor: pointer;
}
</style>
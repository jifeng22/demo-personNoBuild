<template>
  <div class="site-aside-container">
    <Avatar
      :url="data.avatar" v-if="data"
    />
    <h2 class="title" v-if="data">{{data.siteTitle}}</h2>
    <Menu />
    <Concat v-if="data" />
    <p class="footer" v-if="data">{{data.icp}}</p>
  </div>
</template>

<script>
import Menu from "./Menu";
import Avatar from "../Avatar";
import Concat from "./Concat";
import {mapState} from 'vuex'
export default {
  components: {
    Menu,
    Avatar,
    Concat,
  },
  computed: mapState('setting', ['state', 'data']),
  created() {
    this.$store.dispatch('setting/fetchData');
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mix.less";
@import '~@/styles/var.less';
.site-aside-container {
  background-color: @dark;
  // padding: 20px 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
  padding: 10px 0;
}
.menu-container {
  margin: 20px 0;
} 
.title {
  color: #fff;
  text-align: center;
}
.footer{
  text-align: center;
  padding: 10px;
  margin: 0;
}
</style>
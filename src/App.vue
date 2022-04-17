<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside ref="comp" />
        </div>
      </template>
      <!-- <template #main>
        
      </template> -->
      <div class="main">
        <RouterView />
      </div>
    </Layout>
    <Top />
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import "@/styles/global.less";
import Top from '@/components/Top'
import 'nprogress/nprogress.css'
// console.log(Icon)
export default {
  components: {
    Layout,
    SiteAside,
    Top
  },
  created() {
    // this.$router.push('/');
  },
};
</script>

<style scoped lang="less">
@import './styles/mix.less';
.app-container {
  .self-fill(fixed);
}
.aside {
  width: 250px;
  height: 100%;
  background-color: lightpink;
}
 .main{
  height: 100%;
  width: 100%;
} 
</style>
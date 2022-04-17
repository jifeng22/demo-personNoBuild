<template>
  <div class="detail-container">
    <Layout>
      <div class="main-container" v-loading="isLoading" ref="mainContainer">
        <BlogDetail v-if="data" :blog="data" />
        <BlogComment v-if="!isLoading" />
      </div>
      <template #right>
        <div class="toc-container" v-loading="isLoading">
          <BlogTOC v-if="data" :tocList="data.toc" />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import fetchData from "@/mixins/dataFetch.js";
import { getBlog } from "@/api/blog.js";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail.vue";
import BlogTOC from "./components/BlogTOC.vue";
import BlogComment from "./components/BlogComment.vue";
import mainScroll from '@/mixins/mainScroll.js'
import {titleControl} from '@/utils'

export default {
  mixins: [fetchData(null), mainScroll('mainContainer')],

  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
 
  methods: {
    async fetchData() {
      let resp = await getBlog(this.$route.params.id); 
      if(!resp) {
        this.$router.push('/404');
        return;
      }
      titleControl.setSiteTitle(resp.title);
      return resp;
    },
  
  },
  updated() {
    let hash = location.hash;
    if (!hash) {
      return;
    }
    location.hash = "";
    setTimeout(() => {
      location = hash;
    }, 100);
  },
};
</script>

<style scoped lang="less">
.detail-container {
  height: 100%;
  position: relative;

  .main-container {
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
  .toc-container {
    width: 300px;
    height: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    overflow-y: scroll;
    position: relative;
    // overflow: hidden;
  }
}
</style>
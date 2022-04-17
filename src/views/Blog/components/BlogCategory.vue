<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h1>文章分类</h1>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import fetchData from "@/mixins/dataFetch.js";
import { getBlogTypes } from "@/api/blog.js";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },

    list() {
      // console.log(this.data);

      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );

      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ];
      return result.map((it) => ({
        ...it,
        isSelected: it.id === this.categoryId,
        aside: `${it.articleCount}篇`
      }));
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    handleSelect(item) {
     
      const query = {
        page: 1,
        limit: this.limit,
      };
    
      if (this.$route.params.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 300px;
  padding: 10px 20px;
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
  position: relative;
  h1{
    letter-spacing: 2px;
  }
}
</style>
<template>
  <div class="blog-comment-container">
    <MessageArea
      :title="'评论列表'"
      :subtitle="data.total"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/dataFetch.js";
import { getComments, postComment } from "@/api/blog.js";
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  computed: {
    hasMore() {
      return this.data.rows.length <= this.data.total;
    },
  },
  components: {
    MessageArea,
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom || this.isLoading) {
        return;
      }
      const range = 100;
      const top = Math.abs(
        dom.scrollHeight - (dom.scrollTop + dom.clientHeight)
      );
      if (top <= range) {
        this.fetchMoreData();
      }
    },
    async fetchMoreData() {
      if (!this.hasMore) {
        return;
      }
       this.page++;
        this.isLoading = true;
        const resp = await this.fetchData();
        this.data.total = resp.total;
        this.data.rows = this.data.rows.concat(resp.rows);
        this.isLoading = false;
    },
    async fetchData() {
      return await getComments(this.page, this.limit, this.$route.params.id);
    },
    async handleSubmit(formData, callback) {
      const result = await postComment({
        ...formData,
        blogId: this.$route.params.id,
      });
      this.data.rows.unshift(result);
      this.data.total++;
      callback("评论成功");
    },
  },
};
</script>

<style lang="less" scoped>
.blog-comment-container {
  width: 100%;
}
</style>
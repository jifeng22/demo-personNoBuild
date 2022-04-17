<template>
  <div class="blog-detail-container">
    <h2>{{ blog.title }}</h2>
    <div class="aside">
      <span>日期：{{ formatDate(blog.createDate) }}</span>
      <span>浏览：{{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论：{{ blog.commentNumber }}</a>
      <RouterLink :to="{
        name: 'CategoryBlog',
        params: {
          categoryId: blog.category.id
        }
      }">{{ blog.category.name }}</RouterLink>
    </div>
    <div class="description markdown-body" v-html="blog.htmlContent">
      <!-- {{ blog.htmlContent }} -->
    </div>
  </div>
</template>

<script>
import formatDate from "@/utils/formatDate.js";
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
export default {
  props: {
    blog: {
      type: Object,
      require: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-detail-container {
  padding: 20px;

  h2 {
    margin-top: 0;
  }
  .aside {
    color: @gray;
    font-size: 12px;
    span {
      margin-right: 10px;
    }
    a {
      margin-right: 10px;
    }
  }
  .description {
    margin-top: 20px;
  }
}
</style>
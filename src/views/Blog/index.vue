<template>
  <div class="blog-container" ref="container">
    <Layout>
     
         <BlogList />
     
      <template #right>
       <BlogCategory />
      </template>

    </Layout>
  </div>
</template>

<script>
import RightList from "./components/RightList.vue";
import BlogList from './components/BlogList.vue';
import BlogCategory from './components/BlogCategory';
import Layout from '@/components/Layout'
export default {
  components: {
    RightList,
    Layout,
    BlogList,
    BlogCategory
  },
  methods: {
    // handleSelect(item) {
    //   console.log(item);
    // }
  },
};
</script>

<style>
.blog-container{
  height: 100%;
  width: 100%;
}
</style>
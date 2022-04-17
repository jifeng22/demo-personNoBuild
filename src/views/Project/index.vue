<template>
  <div class="project-container" v-loading="loading" ref="projectContainer">
    <ul>
      <li v-for="item in data" :key="item.id">
        <div class="img">
          <a target="_blank" :href="item.url">
            <img :src="item.thumb" alt="" v-lazy="item.thumb" />
          </a>
        </div>
        <div class="content">
          <h2>{{ item.name }}</h2>
          <div class="desc">
            <p v-for="(desc, i) in item.description" :key="i">
              {{ desc }}
            </p>
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.length == 0 && !loading" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll";
import Empty from '@/components/Empty'
export default {
  mixins: [mainScroll("projectContainer")],
  components: {
    Empty
  },
  computed: mapState("project", ["loading", "data"]),
  created() {
    this.$store.dispatch("project/fetchData");
  },
};
</script>

<style lang="less" scoped>
.project-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow-y: scroll;
  scroll-behavior: smooth;

  ul {
    box-sizing: border-box;
    list-style: none;
    li {
      // flex: 1 1 auto;
      display: flex;
      // border: 1px soli d #000;
      box-sizing: border-box;
      padding: 10px 0;
      // overflow: hidden;
      padding: 10px;
      transition: 0.4s;
      &:hover {
        transform: scale(1.01);
        // box-shadow: 1px 1px 1px 1px #000;
      }
      .img {
        // padding: 5px;
        margin-right: 10px;

        overflow: hidden;
        width: 200px;
        height: 150px;
        object-fit: cover;
        img {
          // height: 90%;
          // width: 90%;
          width: 100%;
          height: 100%;
        }
      }
      .content {
        h2 {
          margin: 0;
        }
      }
    }
  }
}
</style>
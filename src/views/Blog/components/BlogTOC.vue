<template>
  <div class="blog-toc-container">
    <h1>目录</h1>
    <RightList :list="withSelected" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import {debounce} from "@/utils";
export default {
  props: {
    tocList: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  components: {
    RightList,
  },
  computed: {
    withSelected() {
      const getToc = (tocList = []) => {
        return tocList.map((t) => ({
          ...t,
          isSelected: this.activeAnchor == t.anchor,
          children: getToc(t.children),
        }));
      };
      return getToc(this.tocList);
    },
    doms() {
      const tocDoms = [];
      const getTocDoms = function (toc) {
        for (const item of toc) {
          let dom = document.getElementById(item.anchor);
          tocDoms.push(dom);
          if (item.children && item.children.length) {
            getTocDoms(item.children);
          }
        }
      };
      getTocDoms(this.tocList);
      return tocDoms;
    },
  },
  created() {
    this.setSelectedDebounce = debounce(this.setSelected, 100);
    this.$bus.$on("mainScroll", this.setSelectedDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectedDebounce);
  },
  methods: {
    setSelected(scrollDom) {
      if(!scrollDom) {
        return;
      }
      const doms = this.doms;
      const range = 200;
      this.activeAnchor = "";
      for (const dom of doms) {
        const top = dom.getBoundingClientRect().top;
        if (!dom) {
          continue;
        }
        if (top >= 0 && top <= range) {
          this.activeAnchor = dom.id;
          return; //设置好了后面就不需要看
        } else if (top > range) {
          return;
        } else {
          this.activeAnchor = dom.id; //先假设是被选中状态
        }
      }
    },
    handleSelect(item) {
      // console.log(item);
      location.hash = item.anchor;
    },
  },
 
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h1 {
    letter-spacing: 2px;
    font-size: 20px;
  }
}
</style>
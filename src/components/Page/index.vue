<template>
  <div class="page-container" v-if="pageNumbers > 1">
    <a :class="{ disable: current == 1 }" @click="handleChange(1)">|&lt;&lt;</a>
    <a :class="{ disable: current == 1 }" @click="handleChange(current - 1)"
      >&lt;&lt;</a
    >
    <a
      v-for="(item, index) in pageList"
      :key="index"
      :class="{ active: item == current }"
      @click="handleChange(item)"
      >{{ item }}</a
    >
    <a
      :class="{ disable: current == pageNumbers }"
      @click="handleChange(current + 1)"
    >
      &gt;&gt;
    </a>
    <a
      :class="{ disable: current == pageNumbers }"
      @click="handleChange(pageNumbers, $event)"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    current: {
      default: 1,
      type: Number,
    },
    total: {
      //总数据量
      type: Number,
      default: 0,
    },
    limit: {
      // 页容量
      type: Number,
      default: 10,
    },
    visibleNumber: {
      //可见页码数
      type: Number,
      default: 10,
    },
  },
  computed: {
    pageNumbers() {
      return Math.ceil(this.total / this.visibleNumber);
    },
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      //   console.log(max);
      if (max > this.pageNumbers) {
        max = this.pageNumbers;
      }
      return max;
    },
    pageList() {
      const arr = [];
      //   console.log(this.visibleMin, this.visibleMax);
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    handleChange(pageNumber) {
      if (pageNumber < 1) {
        pageNumber = 1;
      }
      if (pageNumber > this.pageNumbers) {
        pageNumber = this.pageNumbers;
      }
      if (this.current == pageNumber) {
        return;
      }
      this.$emit("pageChange", pageNumber);
    },
  },
};
</script>


 <style lang="less">
@import "~@/styles/var.less";
.page-container {
  margin: 20px 0;
  text-align: center;
  a {
    color: @primary;
    cursor: pointer;
    margin: 0 5px;
    &.disable {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      cursor: text;
      font-weight: bolder;
    }
  }
}
</style>
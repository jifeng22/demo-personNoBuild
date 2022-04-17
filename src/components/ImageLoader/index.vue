<template>
  <div class="image-loader-container">
    <img v-if="!everyThing" class="placeholder" :src="placeholder" alt="" />
    <img
      :src="src"
      alt=""
      @load="handleLoad"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      everyThing: false,
      originLoaded: false, //原图是否加载完成
    };
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.originLoaded = !this.originLoaded;
      setTimeout(() => {
        this.everyThing = !this.everyThing;
        this.$emit("load");
      }, this.duration);
      // console.log(this.originOpacity)
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mix.less";
.image-loader-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  img {
    object-fit: cover;
    .self-fill(absolute);
    &.placeholder {
      filter: blur(2vw);
    }
  }
}
</style>
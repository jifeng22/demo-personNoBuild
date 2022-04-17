<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" :style="imagePosition" ref="image">
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        @load="showWords"
      />
    </div>
    <div class="title" ref="title">
      {{ carousel.title }}
    </div>
    <div class="desc" ref="desc">
      {{ carousel.description }}
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, //获取容宽高
      innerSize: null, //
      mouseX: 0,
      mouseY: 0, //鼠标距离容器的高度
    };
  },
  computed: {
    imagePosition() {
      if (!this.containerSize || !this.innerSize) {
        return;
      }
      const extractX = this.innerSize.width - this.containerSize.width; //多余图片宽度
      const extractY = this.innerSize.height - this.containerSize.height; //多余图片的高度
      // console.log(extractX, extractY);
      const left = (-extractX / this.containerSize.width) * this.mouseX;
      const top = (-extractY / this.containerSize.height) * this.mouseY;

      return {
        transform: `translate(${left}px, ${top}px)`
      };
    },
    center () {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2
      }
    }
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;

    this.setSize();
    this.mouseX = this.center.x;  //初始化鼠标位置为容器中间
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.desc.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.desc.style.width = 0;

      this.$refs.desc.clientWidth;
      this.$refs.title.clientWidth;

      this.$refs.title.style.transition = "1s";
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.title.style.width = this.titleWidth + "px";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    setSize() {
      this.containerSize = {
        height: this.$refs.container.clientHeight,
        width: this.$refs.container.clientWidth,
      };
      this.innerSize = {
        height: this.$refs.image.clientHeight,
        width: this.$refs.image.clientWidth,
      };
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() { //鼠标离开让鼠标的位置回归中心
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    }
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.carousel-item-container {
  height: 100%;
  width: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;

  .carousel-img {
    height: 110%;
    width: 110%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s;
  }
  .title,
  .desc {
    position: absolute;
    left: 25px;
    letter-spacing: 4px;
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  }
  .title {
    top: calc(50% - 30px);
    font-size: 2em;
  }
  .desc {
    font-size: 1.2em;
    top: calc(50% + 30px);
  }
}
</style>
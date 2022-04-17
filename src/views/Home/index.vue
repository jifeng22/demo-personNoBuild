<template>
  <div
    class="home-container"
    v-loading="loading"
    @wheel="handleWheel"
    ref="container"
  >
    <ul
      class="carousel-container"
      @transitionend="handleTransitionend"
      :style="{
        marginTop,
      }"
    >
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <div class="icon arrow-up" v-show="index > 0" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon arrow-down"
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        @click="switchTo(i)"
        :class="{
          active: i == index,
        }"
      ></li>
    </ul>
  </div>
</template>

<script>
// import {showMessage} from '@/utils'
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icon";
import {mapState} from 'vuex'
export default {
  components: {
    CarouselItem,
    Icon,
  },
  computed: {
    marginTop() {
      return -this.containerHeight * this.index + "px";
    },
    ...mapState('banner', ['loading', 'data'])
  },
  data() {
    return {
      index: 0, //第几张轮播图
      containerHeight: 0, //容器高度
      switching: false, //根据鼠标滑轮判断是否切换
    };
  },
  created() {
    this.$store.dispatch('banner/fetchData')
  },
  methods: {
    switchTo(i) {
      //轮播切换
      if (this.switching) {
        return;
      }
      this.index = i;
      this.switching = true;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.index++;
        this.switching = true;
        // this.wheeling = false;
      }
      if (e.deltaY < -5 && this.index > 0) {
        this.index--;
        this.switching = true;
      }
    },
    handleTransitionend() {
      this.switching = false;
    },
    handleWindowResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleWindowResize);
    this.containerHeight = this.$refs.container.clientHeight;
  },
  destroyed() {
    window.removeEventListener("resize", this.handleWindowResize);
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mix.less";
@import "~@/styles/var.less";
.home-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  //测试
  // height: 300px;
  // width: 80%;
  // overflow: visible;
  // border: 1px solid red;
  // margin: 50px auto;

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }
}
.carousel-container {
  height: 100%;
  width: 100%;
  transition: 1s;
  li {
    height: 100%;
    width: 100%;
  }
}
@jump: 10px;
@keyframes jump-up {
  0% {
    transform: translate(-50%, -@jump);
  }
  50% {
    transform: translate(-50%, 0px);
  }
  100% {
    transform: translate(-50%, -@jump);
  }
}
@keyframes jump-down {
  0% {
    transform: translate(-50%, @jump);
  }
  50% {
    transform: translate(-50%, 0px);
  }
  100% {
    transform: translate(-50%, @jump);
  }
}
.icon {
  .self-center();
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);
  @gap: 25px;
  &.arrow-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.arrow-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
    // bottom: 25px;
  }
}
.indicator {
  .self-center();
  left: auto;
  right: 20px;
  transform: translateY(-50%);
  li {
    height: 7px;
    width: 7px;
    border: 1px solid #fff;
    border-radius: 50%;
    background-color: @dark;
    margin: 5px 0;
    box-sizing: border-box;
    cursor: pointer;
    &.active {
      background: #fff;
    }
  }
}
</style>
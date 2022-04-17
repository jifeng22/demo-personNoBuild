<template>
    <i class="iconfont icon-container" :class="iconType"></i>
</template>

<script>
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};
export default {
    props: {
        type: {
            type: String,
            // required: true
        }
    },
    computed: {
        iconType() {
            // console.log(this.type);
            return classMap[this.type]
        }
    }
}
</script>

<style>
    /* @import url('//at.alicdn.com/t/font_3276096_tdwwik9mxgo.css'); */
    @import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
    .iconfont{
        color: inherit;
        font-size: inherit;
    }

</style>
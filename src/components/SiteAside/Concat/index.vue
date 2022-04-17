<template>
  <ul class="concat-container">
    <li>
      <a target="_blank" :href="data.github">
        <div class="icon"><Icon type="github" /></div>
        <span>{{data.githubName}}</span>
      </a>
      <div class="pop">
        <img
          src="https://qr.api.cli.im/newqr/create?data=https%253A%252F%252Fgithub.com%252Fjifeng22&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&logoshape=no&size=500&kid=cliim&key=a89841d3a64a5de0ece8d08f6503ae2b"
          alt=""
        />
      </div>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=1449466534&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon"><Icon type="qq" /></div>
        <span>1440466534</span>
      </a>
    </li>
    <li>
      <a href="mailto:14000808977@qq.com">
        <div class="icon"><Icon type="mail" /></div>
        <span>14000808977@qq.com</span>
      </a>
      <div class="pop">
        <img
          :src="data.qqQrCode"    alt=""
        />
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon weixin"><Icon type="weixin" /></div>
        <span>{{data.weixin}}</span>
      </a>
      <div class="pop">
        <img
          :src="data.weixinQrCode" alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import {mapState} from 'vuex';
export default {
  components: {
    Icon,
  },
  computed: mapState('setting', ['loading', 'data']),
  created() {
    this.$store.dispatch('setting/fetchData')
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.concat-container {
  list-style: none;
  padding: 10px 0px;
  margin: 0;
  width: 100%;
  color: @gray;
  li {
    position: relative;
    height: 30px;
    line-height: 30px;
    margin: 10px 0;

    a {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0 10px;
      font-size: 14px;
      .icon {
        font-size: 26px;
        margin-right: 10px;
        &.weixin {
            font-size: 30px;
            text-indent: -3px;
        }
      }
    }
    .pop {
      background-color: white;
      padding: 5px 10px;
      border-radius: 5px;
      position: absolute;
      left: 0;
      bottom: 30px;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;
      img {
        height: 150px;
        width: 150px;
      }
      &::after {
        content: "";
        position: absolute;
        height: 8px;
        width: 8px;
        background: #fff;
        left: calc(50% - 4px);
        bottom: -4px;
        transform: rotate(45deg);
      }
    }
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
}
</style>
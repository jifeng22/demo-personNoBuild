<template>
  <nav class="menu-container">
    <RouterLink
      v-for="item in menuList"
      :key="item.link"
      :to="{name: item.name
      }"
      :exact="item.exact"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.type" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default { 
  components: {
    Icon,
  },
  data() {
    return {
      menuList: [
        {
          link: "/",
          name: "Home",
          type: "home",
          title: "首页",
          exact: true,
        },
        {
           name: "Blog",
          link: "/blog",
          type: "blog",
          title: "文章",
          exact: false,
        },
        {
          link: "/about",
          name: "About",
          type: "about",
          title: "关于我",
          exact: true,
        },
        {
          link: "/project",
          name: "Project",
          type: "code",
          title: "项目&效果",
          exact: true,
        },
        {
          link: "/message",
          name: "Message",
          type: "info",
          title: "留言板",
          exact: true,
        },
      ],
    };
  },

};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  a {
    display: flex;
    align-items: center;
    padding: 0 50px;
    height: 30px;
    line-height: 30px;
    .icon {
      width: 30px;
    }
    &:hover {
      color: #fff;
      background-color: #2d2d2d;
    }
    &.selected {
      color: #fff;
      background-color: #2d2d2d;
    }
  }
}
</style>
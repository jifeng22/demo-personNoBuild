<template>
  <ul class="data-list-container">
    <li v-for="item in list" :key="item.id">
      <div class="avatar">
        <img
          :src="item.avatar"
        />
      </div>
      <div class="content">
        <div class="nickname">{{item.nickname}}</div>
        <div class="text">
          {{item.content}}
           </div>
        <div class="time">{{formatDate(item.createDate, true)}}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import {formatDate} from '@/utils';
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    formatDate
  },
};
</script>

<style lang="less" scoped>

.data-list-container {
  padding: 0;
  margin: 0;
  li {
    list-style: none;
    display: flex;
    box-sizing: border-box;
    padding: 10px 0;
    border-bottom: 1px solid #eaebec;
    .avatar {
      margin-right: 15px;
      img {
        @size: 44px;
        height: @size;
        width: @size;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .content {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      position: relative;
      .nickname{
        box-sizing: border-box;
        padding-bottom: 10px;
        color: #65a13b;
      }
      .text{
        font-size: 14px;
      }
      .time{
        position: absolute;
        font-size: 12px;
        color: lighten(gray, 20%);
        right: 0px;
        top: 0px;
      }
    }
  }
}
</style>
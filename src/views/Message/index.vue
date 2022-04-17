<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      :title="'留言板'"
      :subtitle="data.total"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/dataFetch";
import * as messageApi from "@/api/message.js";
import mainScroll from "@/mixins/mainScroll";
export default {
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("messageContainer")],
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  components: {
    MessageArea
  },
  computed: {
    hasMore() {
      return this.data.rows.length <= this.data.total;
    },
  },
  created() {
    this.$bus.$on("mainScroll", this.handleMainScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleMainScroll);
  },
  methods: {
    async handleSubmit(data, callback) {
      const resp = await messageApi.postMessage(data);
      this.data.rows.unshift(resp);
      this.data.total ++;
      callback('感謝你的留言')
    },
    async fetchData() {
      return await messageApi.getMessage(this.page, this.limit);
    },
    handleMainScroll(dom) {
      if (!dom || this.isLoading) {
        return;
      }
      // console.log(dom)
      const range = 100;
      const top = Math.abs(
        dom.scrollHeight - (dom.scrollTop + dom.clientHeight)
      );
      // console.log(top)
      if (top <= range) {
        this.fetchMoreData();
      }
    },
    async fetchMoreData() {
      if (!this.hasMore) {
        return;
      }
      this.page++;
      this.isLoading = true;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.message-container {
  height: 100%;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>
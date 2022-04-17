<template>
  <div class="message-area-container">
    <div class="form-container">
      <DataForm v-on="$listeners" />
    </div>
    <h3>
      {{ title }}
      <span>{{ `(${subtitle})` }}</span>
    </h3>
    <div class="list-container">
      <DataList :list="list" />
    </div>
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: Number,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataForm,
    DataList,
  },
};
</script>

<style lang="less" scoped>
.loading {
  position: relative;
  height: 100px;
}
</style>  
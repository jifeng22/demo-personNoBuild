<template>
  <div class="about-container" v-loading="loading || !loaded">
      <iframe @load="loaded = true" :src="src" frameborder="0"></iframe>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      loaded: false
    }
  },
  computed: mapState('about', {
    src: 'data',
    loading: 'loading'
  }),
  created() {
    this.$store.dispatch('about/fetchData');
  }
}
</script>

<style lang="less" scoped>
  .about-container{
    height: 100%;
    width: 100%;
    position: relative;
    iframe{
      height: 100%;
      width: 100%;
    }
  }
</style>
<!--
* @description 图片懒加载
* @fileName VueLazyLoadImg.vue
* @author howsong
* @date 2021/02/24 19:15:13
!-->
<template>
  <div v-lazy-container="{ selector: 'img', error: errorImg, loading: loadingImg }">
    <img v-for="(item, index) in imgs" :key="index" :data-src="item" />
  </div>
</template>

<script>
import Vue from "vue";
import VueLazyLoad from "vue-lazyload";
Vue.use(VueLazyLoad);

export default {
  data() {
    return {
      imgs: [
        "https://wusonglvjia-dev.oss-cn-beijing.aliyuncs.com/standard/104042460128874496.jpg",
        "https://wusonglvjia-dev.oss-cn-beijing.aliyuncs.com/standard/104042621861236736.jpg"
      ],
      loadingImg: "https://wusonglvjia-dev.oss-cn-beijing.aliyuncs.com/standard/104043057959800832.gif",
      errorImg: "https://wusonglvjia-dev.oss-cn-beijing.aliyuncs.com/standard/104042951135072256.jpeg"
    };
  }
};
</script>

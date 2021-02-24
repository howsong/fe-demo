<!--
* @description vue基础学习
* @fileName VueStady.vue
* @author howsong
* @date 2021/02/24 14:36:22
!-->
<template>
  <div>
    <div v-for="(item, index) in menu" :key="index">
      <h3>{{ `${index + 1}、${item.title}` }}</h3>
      <p v-if="item.describe">{{ item.describe }}</p>
      <component :is="item.component" />
    </div>
  </div>
</template>
<script>
import VueLazyLoadImg from "@/components/PluginUsage/components/VueLazyLoadImg/index.vue";
export default {
  components: {
    VueLazyLoadImg
  },
  data: () => {
    return {
      menu: [
        { title: "vue-lazyload实现图片懒加载", describe: "", component: "VueLazyLoadImg" }
      ]
    };
  }
};
</script>
<style lang="less" scoped></style>

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
import RecursiveComponentDemo from "@/components/VueStady/components/RecursiveComponent/Demo.vue";
export default {
  components:{
    RecursiveComponentDemo
  },
  data: () => {
    return {
      menu: [{ title: "递归组件", describe: "实现原理：组件自己内部调用自己，特定条件下跳出循环", component: "RecursiveComponentDemo" }]
    };
  }
};
</script>
<style lang="less" scoped></style>

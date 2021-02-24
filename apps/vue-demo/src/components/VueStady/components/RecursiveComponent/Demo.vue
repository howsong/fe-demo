<template>
  <RecursiveComponent :data="recursiveData" />
</template>

<script>
import RecursiveComponent from "./index.vue";
export default {
  name: "RecursiveDemo",
  components: {
    RecursiveComponent
  },
  data: () => {
    return {
      recursiveData: [
        {
          label: "TTTTT",
          value: "001",
          children: [
            { label: "T01", value: "002" },
            { label: "T02", value: "003" },
            { label: "T03", value: "004", children: [{ label: "T03-001", value: "005" }] }
          ]
        },
        { label: "XXXXXXXX", value: "006" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.nav_item_wrapper {
  text-align: left;
  margin-top: 10px;
  background-color: orange;
}
</style>

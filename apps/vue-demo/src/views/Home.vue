<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h3>1、递归组件</h3>
    <RecursiveComponent :data="treeData" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import RecursiveComponent from "@/components/RecursiveComponent/index.vue";

export default {
  data: () => {
    return {
      treeData: [
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
  },
  name: "Home",
  components: {
    RecursiveComponent
  }
};
</script>

<template>
  <div class="home">
    <VueStady/>
  </div>
</template>

<script>
import VueStady from '@/components/VueStady/index.vue'

export default {
  components:{
    VueStady
  },
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
};
</script>

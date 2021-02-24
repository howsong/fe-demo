<template>
  <div>
    <template v-if="data && data.length > 0">
      <div class="nav_item_wrapper" v-for="item in data" :key="item.value">
        <div>{{ item.label }}</div>
        <template v-if="item.children && item.children.length > 0">
          <NavItem :data="item.children" />
        </template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    data: { type: Array, default: () => [] }
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

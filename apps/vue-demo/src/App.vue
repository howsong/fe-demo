<template>
  <div id="app">
    <div id="nav">
      <template v-for="(item, index) in pageLinks">
        <router-link :key="item.path" :to="item.path">
          {{ item.name }}
        </router-link>
        <template v-if="index !== pageLinks.length - 1"> | </template>
      </template>
    </div>
    <router-view />
  </div>
</template>
<script>
import { pageLinks } from "@/constants/route";
export default {
  data: () => {
    return {
      pageLinks: pageLinks
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

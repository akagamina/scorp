<template>
  <div id="app">
    <div id="nav" class="position-sticky">
      <TheNavbar />
    </div>

    <div id="body">
      <router-view />
    </div>

    <div id="footer">
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";
export default {
  components: {
    TheNavbar,
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
#nav {
  top: 0;
  z-index: 1;
}

#body {
  min-height: calc(100vh - 146px); // for footer
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <TheNavbar />
    </div>

    <router-view />

    <div>
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

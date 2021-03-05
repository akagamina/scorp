<template>
  <b-container class="home mt-4">
    <b-row no-gutters>
      <b-col cols="12">
        <div
          v-for="(item, index) in 5"
          :key="index"
          class="content-item mb-3 p-3"
        >
          {{ $t("homePage.content") }}
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BContainer, BRow, BCol } from "bootstrap-vue";
export default {
  name: "Home",
  components: {
    BContainer,
    BRow,
    BCol
  }
};
</script>

<style lang="scss" scoped>
.home {
  .content-item {
    border: 0.5px solid #878787;
    border-radius: 4px;
    box-shadow: 0 8px 16px 0 rgba(33, 76, 114, 0.1);
  }
}
</style>

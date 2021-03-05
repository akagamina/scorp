<template>
  <b-container class="p-0">
    <b-navbar toggleable="sm" variant="white">
      <b-navbar-brand href="#">
        <router-link to="/" class="text-danger t-10 w-bold mb-0"
          >Scorp</router-link
        >
      </b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item to="/home">{{ $t("navbar.homePage") }}</b-nav-item>
        <b-nav-item to="/contact-us">
          {{ $t("navbar.contactUsPage") }}
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <select
            class="px-2 py-sm-2 py-1"
            v-model="$i18n.locale"
            @change="handleChangeLocale($event.target.value)"
          >
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
              {{ lang }}
            </option>
          </select>

          <b-nav-item-dropdown right v-if="isUserLoggedIn">
            <template #button-content>
              {{ getUser.name }}
            </template>
            <b-dropdown-item href="#">{{
              $t("navbar.profile")
            }}</b-dropdown-item>
            <b-dropdown-item @click.native="logOut">{{
              $t("navbar.signOut")
            }}</b-dropdown-item>
          </b-nav-item-dropdown>

          <div
            class="ml-sm-3 t-4 login-btn d-flex align-items-center px-3 py-sm-2 py-1"
            @click="handleOpenModal"
            v-else
          >
            {{ $t("navbar.loginTitle") }}
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <TheLoginModal
      v-model="openModal"
      @handleOk="handleSubmit"
      @handleClose="handleCloseModal"
    />
  </b-container>
</template>

<script>
import {
  BNavbar,
  BNavbarNav,
  BNavItem,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavItemDropdown,
  BDropdownItem,
  BContainer
} from "bootstrap-vue";
import TheLoginModal from "../TheLoginModal";
import { mapState, mapMutations } from "vuex";
export default {
  name: "TheNavbar",
  components: {
    BNavbar,
    BContainer,
    BNavbarNav,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BNavItemDropdown,
    BNavItem,
    BDropdownItem,
    TheLoginModal
  },
  data() {
    return {
      openModal: false,
      langs: ["en", "tr"]
    };
  },
  computed: {
    ...mapState({
      isUserLoggedIn: "isUserLoggedIn",
      getUser: "user"
    })
  },
  created() {
    const hasUser = sessionStorage.getItem("user");
    hasUser && this.setUser(JSON.parse(hasUser));
  },
  methods: {
    ...mapMutations({
      setUser: "setUser",
      deleteUser: "deleteUser"
    }),
    handleOpenModal() {
      this.openModal = true;
    },
    handleCloseModal() {
      this.openModal = false;
    },
    logOut() {
      this.deleteUser();
      sessionStorage.removeItem("user");
    },
    handleChangeLocale(value) {
      console.log("value: ", value);
      sessionStorage.setItem("locales", value);
    },
    handleSubmit(item) {
      this.setUser(item);
      sessionStorage.setItem("user", JSON.stringify(item));
      this.openModal = false;
      console.log("item", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.login-btn {
  border: 0.5px solid rgb(173, 165, 165);
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: rgb(0, 0, 0);
    color: rgb(192, 182, 182);
  }
}
</style>

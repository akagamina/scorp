<template>
  <b-modal
    v-model="value"
    @close="handleClose"
    no-close-on-backdrop
    centered
    hide-footer
    :title="$t('login-modal.title')"
  >
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="handleOk">
        <ValidationProvider
          name="Name"
          rules="required"
          v-slot="{ errors }"
          tag="div"
          class="mb-3"
        >
          <p class="mb-1 text-secondary">{{ $t("login-modal.name") }}</p>
          <input
            v-model="user.name"
            type="text"
            class="w-100 custom-input"
            :placeholder="$t('login-modal.namePlaceholder')"
          />
          <span class="text-danger t-2 pl-1">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          name="E-mail"
          rules="required|email"
          v-slot="{ errors }"
          tag="div"
          class="mb-3"
        >
          <p class="mb-1 text-secondary">{{ $t("login-modal.email") }}</p>
          <input
            v-model="user.email"
            type="email"
            class="w-100 custom-input"
            :placeholder="$t('login-modal.emailPlaceholder')"
          />
          <span class="text-danger t-2 pl-1">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          name="Password"
          rules="required"
          v-slot="{ errors }"
          tag="div"
          class="mb-4"
        >
          <p class="mb-1 text-secondary">{{ $t("login-modal.password") }}</p>
          <input
            v-model="user.password"
            type="password"
            class="w-100 custom-input"
            :placeholder="$t('login-modal.passwordPlaceholder')"
          />
          <span class="text-danger t-2 pl-1">{{ errors[0] }}</span>
        </ValidationProvider>

        <div
          class="remember-me mb-3 t-2 d-flex align-items-center justify-content-between"
        >
          <b-form-checkbox
            v-model="user.rememberMe"
            style="line-height:2"
            name="remember"
          >
            {{ $t("login-modal.rememberMe") }}
          </b-form-checkbox>
        </div>

        <b-button
          variant="outline-success"
          class="w-100"
          type="submit"
          :disabled="invalid"
        >
          {{ $t("login-modal.loginButton") }}
        </b-button>
      </form>
    </ValidationObserver>
  </b-modal>
</template>

<script>
import { BModal, BButton, BFormCheckbox } from "bootstrap-vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        rememberMe: false
      }
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BModal,
    ValidationProvider,
    ValidationObserver,
    BButton,
    BFormCheckbox
  },
  methods: {
    handleOk(e) {
      e.preventDefault();
      this.$emit("handleOk", { ...this.user });
    },
    handleClose(e) {
      e.preventDefault();
      this.$emit("handleClose");
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-input {
  border: 0.5px solid #b8aaaa;
  border-radius: 4px;
  min-height: 42px;
  padding-left: 4px;

  &::placeholder {
    font-size: 12px;
    color: #333;
    padding-left: 4px;
  }
}
</style>

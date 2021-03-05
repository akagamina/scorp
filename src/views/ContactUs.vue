<template>
  <b-container class="p-0 mt-3 mb-3">
    <b-row no-gutters align-h="center" align-v="center">
      <b-col md="6" cols="12">
        <div class="contact-form">
          <div class="title-block mb-3">
            {{ $t("contact-us.title") }}
          </div>
          <div class="body-block">
            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="handleSubmit">
                <ValidationProvider
                  name="Name"
                  rules="required"
                  v-slot="{ errors }"
                  tag="div"
                  class="mb-2"
                >
                  <p class="mb-1 text-secondary">
                    {{ $t("contact-us.name") }}
                  </p>
                  <input
                    v-model="contact.name"
                    type="text"
                    class="w-100 custom-input"
                    :class="{ 'red-border': errors[0] }"
                    :placeholder="$t('contact-us.namePlaceholder')"
                  />
                  <span class="text-danger t-2 pl-1">{{ errors[0] }}</span>
                </ValidationProvider>

                <ValidationProvider
                  name="E-mail"
                  rules="required|email"
                  v-slot="{ errors }"
                  tag="div"
                  class="mb-2"
                >
                  <p class="mb-1 text-secondary">
                    {{ $t("contact-us.email") }}
                  </p>
                  <input
                    v-model="contact.email"
                    type="email"
                    class="w-100 custom-input"
                    :class="{ 'red-border': errors[0] }"
                    :placeholder="$t('contact-us.emailPlaceholder')"
                  />
                  <span class="text-danger t-2 pl-1">{{ errors[0] }}</span>
                </ValidationProvider>

                <ValidationProvider
                  name="Phone"
                  :rules="{
                    required: true,
                    regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                  }"
                  v-slot="{ errors }"
                  tag="div"
                  class="mb-2"
                >
                  <p class="mb-1 text-secondary">
                    {{ $t("contact-us.phone") }}
                  </p>
                  <input
                    v-model="contact.phoneNumber"
                    type="text"
                    name="phone"
                    class="w-100 custom-input"
                    :class="{ 'red-border': errors[0] }"
                    autocomplete="off"
                    :placeholder="$t('contact-us.phonePlaceholder')"
                  />
                  <span class="text-danger t-2 pl-1">{{ errors[0] }}</span>
                </ValidationProvider>

                <div class="mb-4">
                  <p class="mb-1 text-secondary">
                    {{ $t("contact-us.countryName") }}
                  </p>
                  <multiselect
                    class="custom-multiselect"
                    v-model="contact.country_code"
                    track-by="name"
                    label="name"
                    :placeholder="$t('contact-us.countryPlaceholder')"
                    :options="$t('countryList')"
                    deselectLabel=""
                    selectLabel=""
                    selectedLabel=""
                    :allow-empty="false"
                  />
                </div>

                <div class="d-flex justify-content-end">
                  <b-button
                    variant="outline-success"
                    class="w-50"
                    type="submit"
                    :disabled="invalid || !contact.country_code"
                  >
                    {{ $t("contact-us.contactButton") }}
                  </b-button>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BContainer, BRow, BCol, BButton } from "bootstrap-vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { mapState } from "vuex";
import Multiselect from "vue-multiselect";

export default {
  name: "ContactUs",
  data() {
    return {
      contact: {
        name: "",
        email: "",
        phoneNumber: "",
        country_code: "",
        text: ""
      }
    };
  },

  computed: {
    ...mapState({
      isUserLoggedIn: "isUserLoggedIn",
      getUser: "user"
    })
  },
  components: {
    BContainer,
    BRow,
    BCol,
    ValidationProvider,
    ValidationObserver,
    BButton,
    Multiselect
  },
  methods: {
    async handleSubmit() {
      console.log("contactForm", { ...this.contact });
      // await fetch("https://example.com/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(this.contact)
      // })
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log("Success:", data);
      //   })
      //   .catch(error => {
      //     console.error("Error:", error);
      //   });
    }
  },
  watch: {
    getUser: {
      immediate: true,
      handler(user) {
        this.contact = { ...user };
      }
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
$invalid: #f81c1c;
.contact-form {
  border-radius: 4px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
  padding: 12px 20px;
}

.red-border {
  border: 0.5px solid $invalid;
}

/deep/ .custom-multiselect {
  .multiselect__tags {
    border: 0.5px solid #b8aaaa;
    padding: 8px 40px 0 12px;
    .multiselect__placeholder {
      font-size: 12px;
      color: #333;
    }
  }
}
</style>

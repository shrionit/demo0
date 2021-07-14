<template>
  <div
    class="flex flex-col m-auto nm-flat-gray-200 justify-center rounded-lg w-10/12 h-96 sm:w-80 sm:h-96 p-3 font-sans"
  >
    <div
      class="absolute top-0 right-0 px-4 py-3 font-sans font-light text-lg tracking-wider antialiased"
    >
      {{ today }}
    </div>
    <div class="h-full flex flex-col space-y-3">
      <div
        v-if="loading"
        class="absolute z-50 top-0 left-0 flex min-w-full min-h-full backdrop-filter backdrop-blur-sm p-64"
      >
        <div
          class="m-auto animate-spin rounded-full border-4 border-t-4 border-gray-200 p-12"
          style="border-top-color: #3498db"
        ></div>
      </div>
      <div
        class="focus:outline-none text-2xl my-9 subpixel-antialiased font-semibold font-sans text-gray-600"
      >
        Login to continue
      </div>
      <!-- Username Input -->
      <div>
        <input
          type="text"
          v-model="form.username"
          placeholder="username *"
          :class="uinputclass"
        />
      </div>
      <!-- END Username Input -->
      <!-- Password Input -->
      <div>
        <input
          type="password"
          v-model="form.password"
          placeholder="password *"
          :class="pinputclass"
        />
      </div>
      <!-- END Password Input -->
      <!-- Login Button -->
      <div>
        <button
          type="submit"
          class="mt-6 w-2/6 py-2 font-normal font-sans text-lg transition-color duration-700 subpixel-antialiased ease-in text-white rounded-md tracking-wider"
          :class="loginbtnclass"
          @click="login"
        >
          Login
        </button>
      </div>
      <!-- END Login Button -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loading: false,
      form: {
        username: "",
        password: "",
      },
      validator: {
        username: true,
        password: true,
      },
      isFormValid: false,
      today: "",
      inputnmstyle:
        "nm-concave-gray-100-xs focus:nm-concave-gray-100 subpixel-antialiased font-medium rounded-lg",
    };
  },

  computed: {
    loginbtnclass: {
      get() {
        let o = `nm-convex-${this.isFormValid ? "blue" : "red"}-400-sm sm:nm-convex-${
          this.isFormValid ? "blue" : "red"
        }-500-sm`;
        return o;
      },
    },
    pinputclass: {
      get() {
        let o = `${this.inputnmstyle} border-2 ${
          this.validator.password ? "border-transparent" : "border-red-500"
        }`;
        return o;
      },
    },
    uinputclass: {
      get() {
        let o = `${this.inputnmstyle} border-2 ${
          this.validator.username ? "border-transparent" : "border-red-500"
        }`;
        return o;
      },
    },
  },
  methods: {
    async login() {
      this.fakeValidate();
      if (this.isFormValid) {
        this.loading = true;
        await this.$store.dispatch("login", this.form);
        this.$router.push("profile");
        this.loading = false;
      }
      this.loading = false;
    },
    fakeValidate() {
      this.validator.username = this.form.username.length > 0;
      this.validator.password = this.form.password.length > 0;
    },
  },
  watch: {
    form: {
      handler(v) {
        this.isFormValid = v.username.length > 0 && v.password.length > 0;
      },
      deep: true,
    },
    "form.username"(v) {
      this.validator.username = v.length > 0;
    },
    "form.password"(v) {
      this.validator.password = v.length > 0;
    },
  },
  created() {
    setInterval(() => {
      let dt = new Date();
      this.today = dt.toDateString();
    }, 1000);
  },
};
</script>

<style></style>

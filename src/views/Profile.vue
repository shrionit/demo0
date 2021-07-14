<template>
  <div
    class="p-4 lg:p-16 container min-w-full min-h-screen max-w-full max-h-full bg-gray-300"
  >
    <h4 class="text-3xl lg:text-4xl tracking-wider font-bold font-sans text-center m-2">
      User Profile
    </h4>
    <div class="h-full flex flex-wrap overflow-hidden lg:-mx-2 xl:-mx-2">
      <!-- Profile Card -->
      <div :class="flexclass0" class="lg:w-1/2 xl:w-1/3">
        <profile-base />
      </div>
      <!-- END Profile Card -->
      <div :class="flexclass0" class="lg:w-1/2 xl:w-2/3 h-full">
        <div class="flex flex-wrap -mx-1 overflow-hidden lg:-mx-2 xl:-mx-2">
          <!-- Billing Address Card -->
          <div :class="flexclass1">
            <address-card
              title="Billing Address"
              :addr="getAddrFromId(this.user.default_billing)"
            />
          </div>
          <!-- END Billing Address Card -->
          <!-- Shipping Address Card -->
          <div :class="flexclass1">
            <address-card
              title="Shipping Address"
              :addr="getAddrFromId(this.user.default_shipping)"
            />
          </div>
          <!-- END Shipping Address Card -->
          <!-- Address List -->
          <div :class="flexclass1" class="flex-grow flex">
            <div class="bg-white divider-2 divider-gray-300 mx-2 w-full rounded-md">
              <div class="w-full flex p-2 rounded-md">
                <div
                  class="text-xl font-bold font-sans text-green-500 flex items-center w-full space-x-2"
                >
                  <mdicon name="format-list-text" /> Address List
                </div>
                <div class="flex justify-end items-center w-full space-x-2">
                  <div class="p-1 nm-flat-white-xs hover:nm-flat-white-sm rounded-full">
                    <mdicon name="plus-thick" class="text-green-500" />
                  </div>
                </div>
              </div>
              <div
                class="p-2 rounded-md bg-gray-100 overflow-auto h-80 xl:h-96 scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-green-600 hover:scrollbar-thumb-green-500"
              >
                <div class="h-90 flex flex-wrap -mx-1 lg:-mx-2 xl:-mx-2">
                  <div :class="flexclass1" v-for="addr in user.addresses" :key="addr.id">
                    <address-card :isdefault="checkIfDefault(addr.id)" :addr="addr" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END Address List -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileBase from "@/components/ProfileBase.vue";
import AddressCard from "@/components/AddressCard.vue";
export default {
  components: { ProfileBase, AddressCard },
  name: "Profile",
  data() {
    return {
      user: {},
    };
  },
  computed: {
    flexclass0: {
      get() {
        let o = "w-full overflow-hidden lg:my-2 lg:px-2 xl:my-2 xl:px-2";
        return o;
      },
    },
    flexclass1: {
      get() {
        let o =
          "my-1 px-1 w-full overflow-hidden lg:my-2 lg:px-2 lg:w-full xl:my-2 xl:px-2 xl:w-1/2";
        return o;
      },
    },
  },
  methods: {
    getAddrFromId(id) {
      return this.user.addresses.filter((a) => a.id == id)[0];
    },
    checkIfDefault(id) {
      return this.user.default_billing == id || this.user.default_shipping == id;
    },
  },
  created() {
    if (this.$store.getters.getUser) {
      this.user = this.$store.getters.getUser || {};
    } else {
      (async () => {
        this.user = await this.$store.dispatch("fetchUser");
      })();
    }
  },
};
</script>

<style></style>

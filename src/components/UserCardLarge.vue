<template>
  <div
    class="p-1 rounded-md bg-white flex flex-col w-full divide-y-2 divide-gray-400 relative"
  >
    <div class="w-full h-full">
      <!-- User Profile Picture -->
      <div class="flex h-full w-full justify-center p-3">
        <div class="nm-convex-green-500-sm rounded-full p-2">
          <div class="rounded-full bg-white p-2">
            <mdicon
              name="account"
              class="text-green-500 m-auto"
              :width="128"
              :height="128"
            />
          </div>
        </div>
      </div>
      <!-- END User Profile Picture -->
      <!-- User Name And Email -->
      <div class="py-2 font-semibold font-sans">
        <span class="text-gray-400">#{{ user.id }}</span>
        <div class="text-2xl text-green-500">
          {{ user.firstname }} {{ user.lastname }}
        </div>
        <div class="text-gray-500 font-mono">
          {{ user.email }}
        </div>
      </div>
      <!-- END User Name And Email -->
    </div>
    <!-- User Details -->
    <div class="w-full relative text-center">
      <div class="py-2 font-sans font-normal text-md">
        <div class="flex text-right justify-around">
          <div :class="label">Group ID:</div>
          <div :class="text">{{ user.group_id }}</div>
        </div>
        <div class="flex text-right justify-around">
          <div :class="label">Store ID:</div>
          <div :class="text">{{ user.store_id }}</div>
        </div>
        <div class="flex text-right justify-around">
          <div :class="label">Website ID:</div>
          <div :class="text">{{ user.website_id }}</div>
        </div>
        <div class="flex text-right justify-around">
          <div :class="label">DOB:</div>
          <div :class="text">{{ user.dob }}</div>
        </div>
        <div class="flex justify-around items-center">
          <div :class="label">Gender:</div>
          <div :class="text">
            {{ user.gender ? "Female" : "Male" }}
          </div>
        </div>
        <div class="flex justify-around items-center">
          <div :class="label">Created At:</div>
          <div :class="text">{{ datetime(user.created_at) }}</div>
        </div>
        <div class="flex justify-around items-center">
          <div :class="label">Updated At:</div>
          <div :class="text">{{ datetime(user.updated_at) }}</div>
        </div>
        <div class="flex justify-around items-center">
          <div :class="label">Created In:</div>
          <div :class="text">{{ user.created_in }}</div>
        </div>
        <div class="flex justify-around items-center">
          <div :class="label">Auto Group Change:</div>
          <div :class="text">
            <input type="checkbox" class="rounded-full" v-model="userAutoGroupChange" />
          </div>
        </div>
        <div class="flex justify-around items-center">
          <div :class="label">
            <span class="font-bold">Credit: </span>
          </div>
          <div :class="text" class="flex items-center font-bold">
            <mdicon name="currency-btc" width="18" height="18" />{{
              user.extension_attributes.credit_balance
            }}
          </div>
        </div>
        <div
          class="flex justify-around items-center"
          v-for="e in user.custom_attributes"
          :key="e.attribute_code"
        >
          <div :class="label">{{ purge(e.attribute_code) }}:</div>
          <div :class="text" class="break-words 2xl:whitespace-nowrap">
            {{ e.value }}
          </div>
        </div>
      </div>
    </div>
    <!-- END User Details -->
  </div>
</template>
<script>
export default {
  name: "UserCardLarge",
  props: {
    userdata: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    user: {
      get() {
        return this.userdata;
      },
    },
    label: {
      get() {
        return "w-2/5 font-medium text-right";
      },
    },
    text: {
      get() {
        return "w-2/5 text-left";
      },
    },
    userAutoGroupChange: {
      set(v) {
        this.user.disable_auto_group_change = !v;
      },
      get() {
        return !this.user.disable_auto_group_change;
      },
    },
  },
  methods: {
    datetime: (x) => new Date(x).toLocaleString(),
    purge: (s) =>
      s
        .split("_")
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join(" "),
  },
};
</script>
<style lang=""></style>

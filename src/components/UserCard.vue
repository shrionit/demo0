<template>
  <div
    class="p-1 rounded-md bg-white flex w-full divide-x-2 divide-gray-400 nm-flat-white-xs relative"
  >
    <div class="w-2/5 backdrop-filter backdrop-blur-sm">
      <!-- User Profile Picture -->
      <div class="flex flex-col h-full w-full justify-center">
        <mdicon name="account" class="text-green-500 m-auto" :width="128" :height="128" />
      </div>
      <!-- END User Profile Picture -->
    </div>
    <div class="divide-y-2 divide-gray-400 w-full relative">
      <!-- User Name And Email -->
      <div class="py-2 pl-6 text-left font-semibold font-sans">
        <div class="text-2xl text-green-500">
          {{ user.firstname }} {{ user.lastname }}
          <span class="text-gray-400">#{{ user.id }}</span>
        </div>
        <div class="text-gray-500 flex">
          {{ user.email }}
        </div>
      </div>
      <!-- END User Name And Email -->
      <!-- User Details -->
      <div class="py-2 pl-4 text-left font-sans font-normal text-xs md:text-sm">
        <div class="flex items-center">
          <mdicon name="chevron-right" class="text-green-500" />
          <p><span class="font-medium">DOB: </span>{{ user.dob }}</p>
        </div>
        <div class="flex items-center">
          <mdicon name="chevron-right" class="text-green-500" />
          <p>
            <span class="font-medium">GENDER: </span>{{ user.gender ? "Female" : "Male" }}
          </p>
        </div>
        <div class="flex items-center">
          <mdicon name="chevron-right" class="text-green-500" />
          <p>
            <span class="font-medium">Created At: </span>{{ datetime(user.created_at) }}
          </p>
        </div>
        <div class="flex items-center">
          <mdicon name="chevron-right" class="text-green-500" />
          <p>
            <span class="font-medium">Updated At: </span>{{ datetime(user.updated_at) }}
          </p>
        </div>
      </div>
      <!-- END User Details -->
    </div>
  </div>
</template>
<script>
export default {
  name: "UserCard",
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
  },
  methods: {
    datetime: (x) => new Date(x).toLocaleString(),
  },
};
</script>
<style lang=""></style>

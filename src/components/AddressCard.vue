<template>
  <div
    class="flex flex-col h-auto duration-500 nm-flat-white-sm rounded-md m-2 p-2 hover:nm-flat-white divide-y-2 divide-gray-400"
  >
    <!-- Address Card Bar -->
    <div class="flex h-auto justify-between flex-1 p-1 font-sans font-bold">
      <div>
        <div v-if="title">
          <div class="flex">
            <p class="text-green-500 text-xl">{{ title || "Address" }}</p>
          </div>
          <div class="text-left text-sm">
            <p class="text-gray-400">Address ID : {{ addressdata.id }}</p>
          </div>
        </div>
        <div v-else>
          <div class="flex">
            <p class="text-green-500 text-xl">Address ID : {{ addressdata.id }}</p>
          </div>
        </div>
      </div>
      <div>
        <div class="flex space-x-2 w-full">
          <div v-if="isDefault" class="flex py-1 px-2 nm-flat-white-xs rounded-full">
            <mdicon name="check" class="text-blue-500" />
            Default
          </div>
          <div class="p-1 nm-flat-white-xs hover:nm-convex-white-sm rounded-full">
            <mdicon name="cog" class="text-blue-500" />
          </div>
          <div class="p-1 nm-flat-white-xs hover:nm-convex-white-sm rounded-full">
            <mdicon name="delete" class="text-red-500" />
          </div>
        </div>
      </div>
    </div>
    <!-- END Address Card Bar -->

    <!-- Address Card Details -->
    <div class="px-3 py-2">
      <div class="flex flex-1 font-sans">
        <div class="w-full text-left">
          <p class="font-medium">
            Name:
            <span class="font-normal"
              >{{ addressdata.firstname }} {{ addressdata.lastname }}</span
            >
          </p>
        </div>
        <div class="w-full text-left">
          <p class="font-medium">
            Customer ID:
            <span class="font-normal">{{ addressdata.customer_id }}</span>
          </p>
        </div>
      </div>
      <div class="flex flex-1 font-sans">
        <div class="w-full text-left">
          <div class="font-medium">
            Region:
            <span class="text-gray-400 font-semibold">
              #{{ addressdata.region_id }}
            </span>
            <div class="list-disc list-inside">
              <p class="font-medium list-item">
                ID:
                <span class="font-normal">{{ addressdata.region.region_id }}</span>
              </p>
              <p class="font-medium list-item">
                Region:
                <span class="font-normal">{{ addressdata.region.region }}</span>
              </p>
              <p class="font-medium list-item">
                Code:
                <span class="font-normal">{{ addressdata.region.region_code }}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="w-full text-left">
          <p class="font-semibold">
            Street:
            <span class="font-normal">{{ addressdata.street.join(" ") }}</span>
          </p>
          <p class="font-semibold">
            Pin Code:
            <span class="font-normal">{{ addressdata.postcode }}</span>
          </p>
          <p class="font-semibold">
            City:
            <span class="font-normal">{{ addressdata.city }}</span>
          </p>
          <p class="font-semibold">
            Country Code:
            <span class="font-normal">{{ addressdata.country_id }}</span>
          </p>
        </div>
      </div>
    </div>
    <!-- END Address Card Details -->
  </div>
</template>
<script>
export default {
  name: "AddressCard",
  props: ["isdefault", "title", "addr"],
  data() {
    return {
      addressData: {
        id: 1234,
        customer_id: 3216,
        region: {
          region_code: "Test ",
          region: "Test ",
          region_id: 0,
        },
        region_id: 0,
        country_id: "IN",
        street: ["Test ", "Test"],
        telephone: "0000000000",
        postcode: "000000",
        city: "Vice City ",
        firstname: "Baram ",
        lastname: "Baba ",
      },
    };
  },
  computed: {
    addrs: {
      get() {
        let a = `${this.addressdata.street.join(", ")}, ${
          this.addressdata.city
        }, ${this.countryFromId(this.addressdata.country_id)}`;
        return a;
      },
    },
    addressdata: {
      get() {
        return this.addr || this.addressData;
      },
    },
    isDefault: {
      get() {
        return this.isdefault;
      },
    },
  },
  methods: {
    countryFromId(id) {
      let cid = {
        IN: "India",
      };
      return cid[id];
    },
  },
};
</script>
<style lang=""></style>

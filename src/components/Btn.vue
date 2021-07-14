<template>
  <!-- Custom Button -->
  <button class="rounded-full p-1" v-bind="$attrs" @click="handle">
    {{ t }}<mdicon :name="i" :class="icolor" />
  </button>
  <!-- END Custom Button -->
</template>
<script>
export default {
  name: "Btn",
  props: ["icon", "text", "iconColor"],
  computed: {
    i: {
      get() {
        return this.icon;
      },
    },
    t: {
      get() {
        return this.text;
      },
    },
    icolor: {
      get() {
        let o = {};
        o[this.iconColor] = true;
        return o;
      },
    },
  },
  methods: {
    handle() {
      this.$emit("click");
    },
  },
};
</script>
<style lang=""></style>

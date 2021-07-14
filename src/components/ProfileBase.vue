<template>
  <div
    class="flex flex-col h-auto duration-500 nm-flat-white-xs rounded-md m-2 hover:nm-flat-white"
  >
    <!-- User Card Small -->
    <div class="block sm:hidden">
      <user-card :userdata="user" />
    </div>
    <!-- END User Card Small -->
    <!-- User Card Large -->
    <div class="hidden sm:block">
      <user-card-large :userdata="user" />
    </div>
    <!-- END User Card Large -->
    <!-- Buttons -->
    <div class="flex space-x-2 justify-center items-center p-1">
      <btn icon="pencil" iconColor="text-blue-500" :class="toolbtnclass" />
      <btn
        icon="cog"
        iconColor="text-blue-500"
        :class="toolbtnclass"
        @click="() => alert('clicked')"
      />
      <btn icon="logout" iconColor="text-red-500" :class="toolbtnclass" @click="logout" />
    </div>
    <!-- END Buttons -->
  </div>
</template>
<script>
import UserCard from "@/components/UserCard.vue";
import UserCardLarge from "@/components/UserCardLarge.vue";
import Btn from "@/components//Btn.vue";
export default {
  components: { UserCard, UserCardLarge, Btn },
  name: "ProfileBase",
  data() {
    return {};
  },
  computed: {
    user: {
      get() {
        return this.$store.getters.getUser;
      },
    },
    toolbtnclass: {
      get() {
        let o = "nm-flat-white-xs";
        return o;
      },
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>
<style lang=""></style>

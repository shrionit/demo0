<template>
  <div id="app" class="min-h-screen min-w-screen flex bg-gray-200">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push("/profile");
    }
    this.$axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
          this.$router.push("/");
        }
        throw err;
      });
    });
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

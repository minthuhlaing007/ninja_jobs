<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'job' }">Job</router-link>
  </nav>
  <button @click="redirect">Redirect</button>
  <button @click="backward">Go Backward</button>
  <button @click="forward">Go Forward</button>
  <router-view />
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: "home" });
    },
    backward() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 20px;
  border-radius: 15px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
  background: #2c3e50;
}
button {
  padding: 20px;
  margin: 0 5px;
  background: white;
  color: crimson;
  border-radius: 5px;
  font-weight: bolder;
}
button:hover {
  background: #eee;
}
</style>

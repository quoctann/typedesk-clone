<template>
  <div id="app">
      <navbar/>
      <div class="container">
        <home/>
      </div>
  </div>
  <!-- end app -->
</template>

<script>
import Navbar from "./components/Navbar"
import Home from "./components/Home"
export default {
  name: "app",
  data() {
    return {};
  },
  computed: {
    sample: function() {
      return this.$store.state.storeActive;
    }
  },
  methods: {},
  components: {
    Navbar,
    Home
  }
};
</script>

<style>
/*
--------------------
General global style
--------------------
*/
#app {
  font-family: "Work Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #1c1d1e;
  letter-spacing: -0.5px;
  line-height: 24px;
}

a {
  text-decoration: none;
  cursor: pointer;
}

body {
  margin: 0;
}

.container {
  font-size: 16px;
  max-width: 1140px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0 30px;
}
</style>

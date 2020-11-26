<template>
  <div id="app">
      <navbar/>
      <div class="container">
        <router-view/>
      </div>
    <Footer/>      
  </div>
  <!-- end app -->
</template>

<script>
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
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
    Footer
  }
};
</script>

<style>
/*
--------------------
General global style
--------------------
*/
* {
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-o-box-sizing: border-box;
}

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

.center {
  margin: 0 auto;
}
</style>

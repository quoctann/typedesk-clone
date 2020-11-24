<template>
  <div class="navbar">
    <router-link tag="a" class="logo" to="/"
      ><div class="logo-wrapper">
        <img src="/src/assets/logo.svg" alt="logo" /></div
    ></router-link>
    <!-- end of logo -->
    <nav class="navbar-menu">
      <div class="navbar-menu-right">
        <router-link tag="a" to="/features">Features</router-link>
        <router-link tag="a" to="/features">Use cases</router-link>
        <router-link tag="a" to="/">Pricing</router-link>
        <a title="Get started" class="nav-btn" href="#">Get started free</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  computed: {}
};
</script>

<style scoped>
.navbar {
  height: 6rem;
  align-items: center;
  min-height: 120px;
  display: grid;
  grid-template-columns: auto auto;
  font-size: 1.1rem;
  max-width: 1140px; /* align element */
  margin: 0 auto;
  overflow: hidden;
}

.logo {
  width: 100%;
}

.logo-wrapper {
  width: 10rem;
  display: inline-block;
}

.logo-wrapper img {
  width: 100%;
  align-self: center;
  display: flex;
}

.navbar-menu > * {
  align-items: center;
  display: flex;
  margin: 0;
  justify-content: flex-end;
}

.navbar-menu a {
  margin-left: 30px;
  display: flex;
  position: relative;
  color: #1c1d1e;
  color: #1c1d1e;
  align-items: center;
  justify-content: center;
}

a.nav-btn {
  border: 1px solid transparent;
  color: #0ebd92;
  box-shadow: none;
  background: rgba(14, 189, 146, 0.1);
  position: relative;
  display: inline-flex;
  font-weight: 500;
  align-items: center;
  border-radius: 3px;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  justify-content: center;
  letter-spacing: -0.03rem;
  transition: box-shadow 0.2s ease, opacity 0.5s ease, background 0.2s ease;
}

a.nav-btn:hover {
  border: 1px solid #0ebd92;
  background: rgba(14, 189, 146, 0.2) !important;
  box-shadow: none !important;
}
</style>

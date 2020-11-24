<template>
  <div class="container">
    <div class="footer">
      <!-- Main footer -->
      <div class="grid-container">
        <div class="grid-item">
          <router-link tag="a" class="logo" to="/"
            ><div class="logo-wrapper">
              <img src="/src/assets/logo.svg" alt="logo" /></div
          ></router-link>
          <p class="text-muted">Ditch repetitive typing with powerful canned responses for you and your team.</p>
          <p class="text-mail">
            <img class="icon-margin" src="/src/assets/mail_icon.png" alt="mail-icon">
            support@typedesk.com
          </p>
          <div class="icon-link">
            <a href="#" title="See our Facebook page">
              <img class="icon-margin" src="/src/assets/facebook.svg" alt="facebook-icon">
            </a>
            <a href="#" title="See our LinkedIn page">
              <img class="icon-margin" src="/src/assets/logo_linkedin.png" alt="linkedin-icon">
            </a>
            <a href="#" title="See our Product Hunt page">
              <img class="icon-margin" src="/src/assets/producthunt.svg" alt="producthunt-icon">
            </a>
            <a href="#" title="See our Youtube page">
              <img class="icon-margin" src="/src/assets/logo_youtube.png" alt="youtube-icon">
            </a>
          </div>
        </div>
        <div class="grid-item">
          <a><h4>Download our apps</h4></a>
            <a href="#">Windows</a>
            <a href="#">Mac</a>
            <a href="#">Chrome extension</a>
            <a href="#">Firefox extension</a>
            <a href="#">Web app</a>
        </div>
        <div class="grid-item">
          <h4>About</h4>
            <a href="#">Use Cases</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Help</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
        </div>
        <div class="grid-item">
          <h4>How we compare</h4>
          <a href="#">Canned responses for Gmail</a>
          <a href="#">Canned responses for Zendesk</a>
          <a href="#">Canned responses for Twitter</a>
          <a href="#">Canned responses for Linkedin</a>
        </div>
      </div>
      <!-- Last line -->
      <div class="flex-container">
        <div class="info">&#169; typedesk 2020</div>
        <div class="info">
          <a href="#">Terms and Conditions</a>
        </div>
        <div class="info">
          <a href="#">Privacy</a>
        </div>
        <div class="info">
          <a href="#">Vote for our next features</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Footer general style */
.footer {
  margin-top: 100px;
}

a {
  list-style-type: none;
  color: #99b3bd;
}

h4 {
  line-height: 1.05;
  font-size: 1.1rem;
}

/* Main footer */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  align-items: center !important;
  justify-content: center !important;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: 40px;
  align-items: start !important;
}

.grid-item {
  display: flex;
  flex-direction: column;
}

.grid-item a {
  color: #1c1d1e;
}

.grid-item h4 {
  margin-top: 0;
}

.logo {
  width: 100%;
}

.logo-wrapper {
  width: 8rem;
  display: inline-block;
}

.logo-wrapper img {
  width: 100%;
  align-self: center;
  display: flex;
}

.text-muted, .text-mail{
  color: #99b3bd !important;
  display: flex;
  align-items: center;
}

.text-mail > img {
  height: 10px;
  background-color:#f5f6fa !important;
}

.icon-margin {
  margin-right: 11px;
}

.icon-link {
  margin-top: 25px;
}

.icon-link img {
  height: 16px;
}

/* Last line footer info */

.flex-container {
  display: flex;
  align-items: center !important;
  justify-content: center !important;
  margin-top: 40px;
  margin-bottom: 40px;
}

.flex-container .info {
  color: #99b3bd;
  margin-left: 16px;
  margin-right: 16px;
  text-align: center;
}
</style>

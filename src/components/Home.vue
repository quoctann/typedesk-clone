<template>
  <div class="home">
    <div class="send-relies">
      <h1 class="relies-title">
        Send replies
        <br />
        <span>faster and more consistently</span>
        <small
          >Manage all your repetitive content from one single app and
          <strong class="txt-accent"
            >deliver consistent messages across the board</strong
          >! typedesk is a
          <strong class="txt-accent">collaborative clipboard</strong> that works
          with your
          <strong class="txt-accent"
            >email client, chatbot, social media</strong
          >
          etc.</small
        >
      </h1>
    </div>
    <div class="signupmail">
      <form action="/" method="GET">
        <div class="input">
          <input type="email" name="email" placeholder="Enter your email" />
          <button type="submit" class="btn">Get Started Free</button>
        </div>
      </form>
      <div>
        <p class="txt-muted center spacing">
          For Windows, Mac and Web Browsers
        </p>
      </div>
      <div class="img-flex spacing">
        <img src="/src/assets/rating_capterra.png" alt="rating_capterra" />
        <img src="/src/assets/rating_chrome.png" alt="rating_chrome" />
      </div>
      <div class="home-app">
        <a href="#" data='toggle-video'>
          <img src="https://www.typedesk.com/img/play.png" alt="home-demo" />
        </a>
        <div>
          <img src="/src/assets/home_app.webp" alt="home-demo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.center {
  text-align: center;
}

.spacing {
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.send-relies {
  padding: 0 130px;
}

.relies-title {
  text-align: center;
  font-size: 61px;
  margin-bottom: 1rem;
  line-height: 4rem;
  font-weight: 600;
  letter-spacing: -0.1rem;
  display: block;
}

.relies-title > span,
.txt-accent {
  color: #0ebd92;
}

.relies-title > small {
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.5;
  display: block;
  margin-top: 1rem;
  text-align: justify;
}

.txt-accent {
  font-weight: 500;
}

.txt-muted {
  color: #99b3bd;
}

.signupmail {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.signupmail form {
  max-width: 500px;
  margin: 20px auto 0 auto;
  width: 100%;
  border: 1px solid #0ebd92;
  border-radius: 3px;
  overflow: hidden;
}

.signupmail div.input {
  display: flex;
  position: relative;
  margin: 0;
  justify-content: flex-end;
}

.signupmail div.input input {
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border: none;
  font-family: inherit;
  background: white;
  font-size: 16px;
  color: #1c1d1e;
  width: 60%;
  letter-spacing: -0.05rem;
}

.signupmail div.input input:focus,
.btn:focus {
  outline: none;
}

.signupmail div.input textarea {
  color: red;
}

.btn {
  border-radius: 0 3px 3px 0;
  border: none;
  color: #0ebd92;
  box-shadow: none;
  background: rgba(14, 189, 146, 0.1);
  position: relative;
  display: inline-flex;
  font-weight: 500;
  align-items: center;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  justify-content: center;
  letter-spacing: -0.03rem;
  transition: box-shadow 0.2s ease, opacity 0.5s ease, background 0.2s ease;
  width: 40%;
}

.btn:hover {
  background: #0ebd92;
  box-shadow: none !important;
  color: white;
}

img {
  max-width: 100%;
}

.img-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.img-flex img {
  display: block;
  height: 50px;
}
</style>

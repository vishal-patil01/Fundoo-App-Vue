<template>
  <div class="Login-Container">
    <md-card>
      <md-card-header>
        <div class="md-title">Fundoo</div>
        <p class="signin">Sign in</p>
        <p class="header-description">Continue To Fundoo</p>
      </md-card-header>
      <md-card-content>
        <div>
          <input class="input-box" type="text" placeholder="Email address" />
        </div>
        <div>
          <input class="input-box" type="password" placeholder="Password" />
        </div>
        <div class="forget-password">
          <a href="#">Forget password</a>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-raised md-primary">Login</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/style.scss";

.Login-Container {
  @include flex-box;
  min-height: 100vh;
}
.md-card {
  align-self: center;
  min-height: 500px;
  width: 450px;
  border-radius: 5px;
}
.md-title {
  color: rgb(237, 180, 21);
  font-size: 20px;
  padding-bottom: 0;
}

.signin {
  font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.3333;
  padding-bottom: 0;
  padding-top: 5px;
  margin: 0;
}
.header-description {
  color: #202124;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 1.5;
}
.input-box {
  width: 90%;
  height: 60px;
  margin: 12px 1px 12px 1px;
  padding: 13px 15px;
  border-radius: 4px;
  font-size: 16px;
  border-color: #1a73e8;
}

.forget-password {
  text-align: left;
  margin: 0 0;
}
.forget-password > a {
  padding: 0 25px;
  font-weight: bold;
}
.md-card-actions {
  justify-content: center;
}
.md-button {
  border-radius: 5px;
}
@media (max-width: 600px) {
  .md-card {
    align-self: flex-start;
    min-height: 100vh;
    width: 100%;
  }
}
</style>

<template>
  <div class="Login-Container">
    <md-card>
      <md-card-header>
        <div class="md-title">
          <img class="logo" src="../assets/fundoo-logo.jpg" />
        </div>
        <p class="signin">Sign in</p>
        <p class="header-description">Use your Fundoo Account</p>
      </md-card-header>
      <md-card-content>
        <div class="custom-textfield">
          <label class="pure-material-textfield-outlined">
            <input type="email" placeholder=" " name="email" id="email" />
            <span class="md-error">The email is required</span>
          </label>
          <span>Email-Address</span>
        </div>
        <div class="custom-textfield">
          <label class="pure-material-textfield-outlined">
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" "
            />
            <span>Password</span>
            <i
              class="fa fa-eye icon"
              aria-hidden="true"
              id="visibilityIcon"
              @click="togglePasswordVisibility()"
            ></i>
            <!--<i class="fa fa-eye-slash" aria-hidden="true"></i>-->
          </label>
          <span>Email-Address</span>
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
  methods: {
    togglePasswordVisibility: function () {
      const type =
        document.querySelector("#password").getAttribute("type") === "password"
          ? "text"
          : "password";
      document.querySelector("#password").setAttribute("type", type);
      // toggle the eye slash icon
      const iconClass =
        document.querySelector("#visibilityIcon").getAttribute("class") ===
        "fa fa-eye icon"
          ? "fa fa-eye-slash icon"
          : "fa fa-eye icon";
      document
        .querySelector("#visibilityIcon")
        .setAttribute("class", iconClass);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/style.scss";

.Login-Container {
  @include flex-box;
  min-height: 100vh;
  @include primary-font;
}
.custom-textfield {
  @include textfield;
  margin: 14px 20px;
  margin-bottom: 10px;
  text-align: left;
}
.custom-textfield i {
  position: absolute;
  width: -webkit-fill-available;
  cursor: pointer;
}

.icon {
  padding: 20px;
  min-width: 50px;
  text-align: right;
  color: gray;
}
.logo {
  height: 22px;
}
.md-card {
  align-self: center;
  min-height: 500px;
  width: 450px;
  border-radius: 5px;
}
.md-card-header {
  padding: 34px 16px 12px 16px;
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
  margin-bottom: 0;
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

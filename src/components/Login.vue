<template>
  <div class="Login-Container">
    <md-card>
      <md-progress-bar
        md-mode="indeterminate"
        :class="{ progressbar: isDataLoaded }"
      />
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
            <input
              type="email"
              placeholder=" "
              @blur="
                validatefield(
                  '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$',
                  'Email Must Have Form abc@xyz.com form',
                  'email'
                )
              "
              v-model="email"
              id="email"
            />
            <span>Email-Address</span>
          </label>
          <span v-bind:class="{ error: emailError }">{{ emailErrorMsg }}</span>
        </div>
        <div class="custom-textfield">
          <label class="pure-material-textfield-outlined">
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" "
              @blur="
                validatefield(
                  '^((?=[^@|#|&|%|$]*[@|&|#|%|$][^@|#|&|%|$]*$)*(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9#@$?]{8,})$',
                  'Password Must Contains Symbol,Number,Characaters',
                  'password'
                )
              "
              v-model="password"
            />
            <span>Password</span>
            <div class="eyeicon">
              <i
                class="fa fa-eye icon"
                aria-hidden="true"
                id="visibilityIcon"
                @click="togglePasswordVisibility()"
              >
              </i>
            </div>
          </label>
          <span v-bind:class="{ error: passwordError }">{{
            passwordErrorMsg
          }}</span>
        </div>
      </md-card-content>
      <md-card-actions>
        <a href="http://fundoonotes.incubation.bridgelabz.com"
          ><b>Create account</b></a
        >
        <md-button class="md-raised md-primary" @click="login()"
          >Login</md-button
        >
      </md-card-actions>
      <md-snackbar
        md-position="left"
        :md-active.sync="showSnackbar"
        md-persistent
      >
        <span>Invalid Email or Password!</span>
        <md-button class="md-primary" @click="showSnackbar = false"
          >x</md-button
        >
      </md-snackbar>
    </md-card>
  </div>
</template>

<script>
import UserService from "../Services/UserService";

export default {
  name: "Login",
  data: () => ({
    cartID: "",
    email: "",
    password: "",
    emailError: false,
    passwordError: false,
    emailErrorMsg: " ",
    passwordErrorMsg: " ",
    showSnackbar: false,
    isDataLoaded: true,
  }),
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
    validatefield: function (pattern, errorMsg, field) {
      if (this[field].trim() == "") {
        this.requiredValidation(field);
      } else if (this[field].match(pattern)) {
        this[field + "Error"] = false;
        this[field + "ErrorMsg"] = " ";
      } else {
        this[field + "Error"] = true;
        this[field + "ErrorMsg"] = errorMsg;
      }
    },
    requiredValidation: function (field) {
      if (this[field].trim() == "") {
        this[field + "Error"] = true;
        this[field + "ErrorMsg"] = field + " is Required.";
        return false;
      } else {
        return true;
      }
    },
    login: function () {
      if (
        this.requiredValidation("email") &&
        this.requiredValidation("password")
      ) {
        const loginData = {
          cartID: this.cartID,
          email: this.email,
          password: this.password,
        };
        this.isDataLoaded = false;
        UserService.userLoginService(loginData)
          .then((response) => {
            console.log(response);
            this.isDataLoaded = true;
            if (response.status == "200") {
              localStorage.setItem("token", response.data.id);
              localStorage.setItem("userName", response.data.firstName);
              localStorage.setItem("email", response.data.email);
              this.$router.push("dashboard");
            }
          })
          .catch((error) => {
            this.isDataLoaded = true;
            this.showSnackbar = true;
            console.log(error);
          });
      }
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
.md-card-header + .md-card-content {
  padding-top: 16px;
}
.custom-textfield {
  @include textfield;
  margin: 15px 20px;
  text-align: left;
}
.custom-textfield .eyeicon {
  position: absolute;
  width: -webkit-fill-available;
  cursor: pointer;
}
.custom-textfield > span {
  display: block;
  padding: 8px 0;
}
.custom-textfield > span {
  display: inline-block;
}
.error {
  display: inline-block;
  color: red;
  margin-left: 5px;
  padding: 0 !important;
}
.icon {
  padding: 20px;
  min-width: 50px;
  text-align: right;
  color: gray;
  float: right;
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
.md-card-content {
  padding: 0 16px;
}
.md-card-actions {
  justify-content: space-between;
  margin: 0 32px;
}
.md-button {
  border-radius: 5px;
}
.progressbar {
  display: none;
}
@media (max-width: 600px) {
  .md-card {
    align-self: flex-start;
    min-height: 100vh;
    width: 100%;
  }
}
</style>

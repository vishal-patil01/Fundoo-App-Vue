<template>
  <div class="page-container">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <div>
          <span class="md-title">
            <img
              class="appicon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Google_Keep_icon.svg/1200px-Google_Keep_icon.svg.png"
            />
            Fundoo
          </span>
        </div>
        <div class="searchDiv">
          <i class="fa fa-search searchicon"></i>
          <md-autocomplete
            class="search"
            v-model="searchText"
            :md-options="searchData"
            md-layout="box"
          >
            <label>Search...</label>
          </md-autocomplete>
        </div>
        <div class="md-toolbar-section-end">
          <md-button
            class="viewLayout"
            @click="listViewEnabled = !listViewEnabled"
          >
            <i
              :class="{ 'fa fa-th-large icon listLayout': !listViewEnabled }"
            ></i>
            <i :class="{ 'fa fa-bars icon listLayout': listViewEnabled }"></i>
          </md-button>
          <md-menu md-size="medium" md-align-trigger>
            <md-button class="md-icon-button" md-menu-trigger>
              <md-avatar class="md-avatar-icon md-accent">
                {{ userName.substr(0, 1) }}
              </md-avatar>
            </md-button>
            <md-menu-content>
              <div class="profile">
                <md-avatar
                  id="userIcon"
                  class="md-avatar-icon md-large md-accent"
                  ><label class="userInitial">{{
                    userName.substr(0, 1)
                  }}</label></md-avatar
                >
                <label class="profile-name name">{{ userName }}</label>
                <label class="profile-email">{{ email }}</label
                ><br />
                <md-button id="signout" @click="signout()">Sign-out</md-button>
              </div>
            </md-menu-content>
          </md-menu>
        </div>
      </md-app-toolbar>
      <md-app-drawer
        class="drawer"
        :md-active.sync="menuVisible"
        md-swipeable
        md-persistent="mini"
        md-permanent="clipped"
      >
        <md-list>
          <router-link to="note" exact>
            <md-list-item id="Notes">
              <md-icon
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45
               1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"
                  ></path></svg
              ></md-icon>

              <span class="md-list-item-text">Notes</span>
            </md-list-item>
          </router-link>

          <router-link to="reminders" exact>
            <md-list-item id="Reminders">
              <md-icon
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 
              4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"
                  ></path></svg
              ></md-icon>

              <span class="md-list-item-text">Reminders</span>
            </md-list-item>
          </router-link>

          <router-link to="edit" exact>
            <md-list-item id="edit">
              <md-icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 
              1.41 1.41-9.82 9.83z"
                  ></path></svg
              ></md-icon>

              <span class="md-list-item-text">Edit Labels</span>
            </md-list-item>
          </router-link>

          <router-link to="trash">
            <md-list-item id="trash">
              <md-icon
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"
                  ></path>
                  <path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg
              ></md-icon>

              <span class="md-list-item-text">Trash</span>
            </md-list-item>
          </router-link>

          <router-link to="archive" exact>
            <md-list-item id="archive">
              <md-icon
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 
          3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 
          19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"
                  ></path></svg
              ></md-icon>

              <span class="md-list-item-text">Archive</span>
            </md-list-item>
          </router-link>
        </md-list>
      </md-app-drawer>
      <md-app-content class="content-area">
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { bus } from "../main";

export default {
  name: "DashBoard",
  components: {},

  data: () => ({
    listViewEnabled: false,
    menuVisible: false,
    searchText: "",
    searchData: [],
    isDataLoaded: false,
    userName: localStorage.getItem("userName"),
    email: localStorage.getItem("email"),
  }),
  methods: {
    signout: function () {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("email");
      this.$router.push("/");
    },
  },
  watch: {
    listViewEnabled: function () {
      bus.$emit("setListView", this.listViewEnabled);
    },
    searchText: function () {
      bus.$emit("search", this.searchText.toLowerCase().trim());
    },
  },
  created() {
    if (localStorage.getItem("token") == undefined) this.$router.push("/");
  },
  mounted() {
    bus.$on("clearSearch", () => {
      this.searchText = "";
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/style.scss";
.md-app {
  height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}
.md-app-container {
  transform: none !important;
}
// drawer
.md-drawer {
  width: 280px;
  max-width: calc(100vw - 125px);
  vertical-align: top;
  align-items: flex-start;
  border: none;
}
.md-app > .md-app-drawer {
  border: none !important;
}
//app bar background
.md-toolbar.md-theme-default.md-primary {
  background-color: white;
  border-bottom: 1px solid rgb(223, 223, 223);
}
//menu icon color
.md-toolbar.md-theme-default.md-primary .md-icon {
  color: black;
}
//App Title color
.md-title {
  color: rgb(0, 0, 0) !important;
  margin-right: 20%;
  font-size: calc(0.75em + 1.2vmin);
}
//App icon
.appicon {
  width: calc(0.75em + 2.9vmin);
  height: calc(0.75em + 1.8vmin);
  padding: 0 5px;
}
//menu icon button
.md-icon-button {
  margin: 0;
}
//seperating two list item with margin
li {
  margin: 2px 0;
}
//change color for active link when drawer expanded
.md-active > ul > .router-link-active {
  background-color: #feefc3;
  border-radius: 0 20px 20px 0px;
}
//change color for active link when drawer is not expanded
.router-link-active {
  background-color: #feefc3;
  border-radius: 30px;
}
//change color for unactive link when drawer expanded
ul > :not(.router-link-active) :hover {
  background-color: rgb(223, 223, 223);
  border-radius: 20px;
}
//change color for unactive link when drawer is not expanded
.md-active > ul > :not(.router-link-active) :hover {
  background-color: rgb(223, 223, 223);
  border-radius: 0 20px 20px 0px;
}
//change color list item text
.md-list-item-text {
  font-size: 15px;
  font-weight: inherit;
  font-display: monospace;
  color: #000;
}
//search
.searchDiv {
  margin: 10px 3vw;
  background-color: rgb(241, 243, 244);
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  width: fit-content;
  height: 50px;
}
.search {
  background-color: rgb(241, 243, 244) !important;
}
//searchicon
.searchicon {
  font-size: 20px;
  color: grey;
  margin: auto 0 auto 15px;
}

//search label color
.md-autocomplete.md-theme-default.md-autocomplete-box label {
  -webkit-text-fill-color: rgb(95, 99, 104) !important;
}
// search box radious and text color
.md-toolbar .md-autocomplete.md-theme-default.md-autocomplete-box {
  width: 30vw;
  -webkit-text-fill-color: rgb(95, 99, 104) !important;
}
//main content area
.content-area {
  @include flex-box;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
}
//component div
.component {
  margin-top: 40px;
  align-items: flex-start;
  width: -webkit-fill-available;
}
.spinner {
  display: none;
  background-color: red;
  color: green;
}
.md-avatar.md-theme-default.md-accent.md-avatar-icon {
  background-color: slateblue !important;
}
//logout Div

.profile {
  padding-top: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 30px;
  align-items: center;
  justify-content: center;
}
.md-menu-content.md-menu-content-medium {
  flex: 1;
  overflow: auto;
  border: 1px solid !important;
  border-radius: 12px !important;
}
.profile-name {
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
}
.profile-email {
  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
  color: gray;
}
#userIcon {
  margin-bottom: 8px;
}
.userInitial {
  font-size: 64px;
  padding-bottom: 10px;
}
.name {
  text-transform: capitalize;
  padding-bottom: 10px;
}
#signout {
  border: 1px solid black;
  border-radius: 5px;
  width: 40%;
}

.icon {
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  font-size: 28px;
}

//stop clipped drawer moving down below width 600px
@media (min-width: 0) {
  .md-drawer.md-permanent {
    position: relative;
    transform: translate3D(0, 0, 0);
  }
}
@media (max-width: 800px) {
  .md-title {
    font-size: 18px;
    margin: 0;
  }
  .searchDiv {
    height: unset;
  }
  //App icon
  .appicon {
    width: 30px;
    height: 30px;
    padding: 0;
  }
  .content-area {
    align-items: center;
  }
}
@media (max-width: 520px) {
  .viewLayout {
    display: none;
  }
}
</style>
<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button
            class="md-icon-button"
            @click="showNavigation = !showNavigation"
          >
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Google_Keep_icon.svg/1200px-Google_Keep_icon.svg.png"
            />
            Fundoo
          </span>
        </div>
      </div>
    </md-toolbar>

    <md-drawer
      :md-active.sync="showNavigation"
      md-swipeable
      md-persistent="mini"
    >
      <md-list>
        <md-list-item id="Notes" @click="selectItem('Notes')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45
               1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"
            ></path>
          </svg>
          <span class="md-list-item-text">Notes</span>
        </md-list-item>

        <md-list-item id="Reminders" @click="selectItem('Reminders')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 
              4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"
            ></path>
          </svg>
          <span class="md-list-item-text">Reminders</span>
        </md-list-item>

        <md-list-item id="Edit" @click="selectItem('Edit')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 
              1.41 1.41-9.82 9.83z"
            ></path>
          </svg>
          <span class="md-list-item-text">Edit Labels</span>
        </md-list-item>

        <md-list-item id="Archive" @click="selectItem('Archive')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 
          3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 
          19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"
            ></path>
          </svg>
          <span class="md-list-item-text">Archive</span>
        </md-list-item>

        <md-list-item id="Trash" @click="selectItem('Trash')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 
         3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 
         1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"
            ></path>
          </svg>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>
      </md-list>
    </md-drawer>
    <md-content class="main-content-area"></md-content>
  </div>
</template>


<script>
export default {
  name: "DashBoard",
  data: () => ({
    showNavigation: false,
    showSidepanel: false,
    prevSelection: "",
    selected: "",
  }),
  methods: {
    selectItem: function (selectedId) {
      var cssproperty = document.getElementById(selectedId).style;
      if (this.prevSelection.length != 0) {
        document.getElementById(this.prevSelection).removeAttribute("style", "");
      }
      cssproperty.backgroundColor = "#feefc3";
      cssproperty.borderRadius = " 0 20px 20px 0px";

      this.prevSelection = selectedId;
    },
  },
  created() {
    if (localStorage.getItem("userId") == undefined) {
      this.$router.push("/");
    }
  },
  mounted(){
     this.selectItem('Notes')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.page-container {
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(#000, 0.12);
  background-color: white;
  min-height: 100vw;
}

.main-content-area {
  display: flex;
  justify-content: center;
  align-items: center;
}
// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.md-active svg {
  margin-right: 25px;
}

.md-content {
  padding: 16px;
}
.app-bar {
  background-color: rgb(237, 180, 21);
  color: white;
  z-index: 5;
}
.md-transparent {
  background-color: rgb(237, 180, 21);
}
.dashboard {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.navbar {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}
.md-toolbar.md-theme-default.md-primary {
  background-color: transparent;
  box-shadow: none;
  border-bottom: 2px solid silver;
}
.md-toolbar .md-button ~ .md-title,
.md-toolbar .md-icon ~ .md-title {
  margin-left: 0px;
}
.md-icon {
  color: black !important;
}
.search {
  max-width: 650px;
  background-color: rgb(243, 240, 240) !important;
}
.md-toolbar .md-autocomplete.md-theme-default.md-autocomplete-box {
  height: 50px;
  border-radius: 7px;
}
.md-drawer.md-theme-default.md-persistent-mini.md-left {
  width: 280px;
  height: 100vw;
  margin-top: 1px;
}
.md-title {
  color: rgb(0, 0, 0) !important;
  margin-right: 20% !important;
  font-size: 22px;
}
img {
  width: 46px;
  height: 34px;
  padding: 0 5px;
}
.md-list-item:hover{
}
.md-active .md-list-item:hover {
  background-color: rgb(223,223,223);
  border-radius: 0 20px 20px 0px !important;
}
.md-list-item {
  margin: 3px 0;
}
// .md-list-item :hover {
//   background-color: gray;
//   border-radius: 50px;
// }
.md-list-item-text {
  font-size: 15px;
  font-weight: bold;
  font-display: monospace;
}
</style>
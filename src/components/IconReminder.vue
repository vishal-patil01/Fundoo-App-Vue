<template>
  <div class="reminder" @click="DeleteForever()">
    <md-menu md-size="medium" md-align-trigger>
      <md-button class="md-icon-button" md-menu-trigger>
        <md-icon md-menu-trigger="true">add_alert</md-icon>
      </md-button>
      <md-menu-content>
        <md-menu-item>My Item 1</md-menu-item>
        <md-menu-item>My Item 2</md-menu-item>
        <md-menu-item>My Item 3</md-menu-item>
      </md-menu-content>
    </md-menu>
  </div>
</template>

<script>
// import { bus } from "../main";
// import NoteService from "../Services/NoteService";

export default {
  name: "IconReminder",
  props: {
    cartId: String,
  },
  methods: {
    DeleteForever: function () {},
  },
};
</script>

<style scoped>
.delete {
  cursor: pointer;
  margin: 5px;
}
.md-icon:hover {
  color: black;
}
</style>
<template>
  <div class="reminder" @click="DeleteForever()">
    <md-menu md-size="big" md-align-trigger>
      <md-button class="md-icon-button" md-menu-trigger>
        <md-icon md-menu-trigger="true">add_alert</md-icon>
      </md-button>
      <md-menu-content>
        <md-menu-item>Reminder : </md-menu-item>
        <md-menu-item>Later today :</md-menu-item>
        <md-menu-item>Tomorrow</md-menu-item>
        <md-menu-item>Next week</md-menu-item>
        <md-menu-item
          ><md-icon>watch_later</md-icon>Pick date & time</md-menu-item
        >
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
.md-list-item-content {
  min-height: auto;
}
</style>
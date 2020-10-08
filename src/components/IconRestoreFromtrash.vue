<template>
  <div class="delete" @click="moveToNotes()">
    <md-button class="md-icon-button">
      <md-icon>restore_from_trash</md-icon>
    </md-button>
  </div>
</template>

<script>
import { bus } from "../main";
import NoteService from "../Services/NoteService";

export default {
  name: "IconRestoreFromtrash",
  props: {
    cartId: String,
  },
  methods: {
    moveToNotes: function () {
      const trashData = {
        isDeleted: false,
        noteIdList: [this.$props.cartId],
      };
      NoteService.moveToTrash(trashData)
        .then(() => {
          bus.$emit("updateNoteList", true);
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
<template>
  <div class="archive" @click="moveToNotes()">
    <md-icon>unarchive</md-icon>
  </div>
</template>

<script>
import { bus } from "../main";
import NoteService from "../Services/NoteService";

export default {
  name: "IconArchive",
  props: {
    cartId: String,
  },
  methods: {
    moveToNotes: function () {
      const trashData = {
        isArchived: false,
        noteIdList: [this.$props.cartId],
      };
      NoteService.moveToArchive(trashData)
        .then(() => {
          bus.$emit("updateNoteList");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.archive {
  cursor: pointer;
  margin: 5px;
}
.md-icon:hover {
  color: black;
}
</style> 
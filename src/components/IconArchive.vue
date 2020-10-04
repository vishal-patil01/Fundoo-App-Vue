<template>
  <div class="archive" @click="moveToArchieve()">
    <md-icon>archive</md-icon>
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
    moveToArchieve: function () {
      const trashData = {
        isArchived: true,
        noteIdList: [this.$props.cartId],
      };
      NoteService.moveToArchive(trashData)
        .then(() => {
          bus.$emit("updateNoteList",true);
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
<template>
  <div class="delete" @click="moveToTrash()">
    <md-button class="md-icon-button">
      <md-icon>delete</md-icon>
    </md-button>
  </div>
</template>

<script>
import { bus } from "../main";
import NoteService from "../Services/NoteService";

export default {
  name: "IconDelete",
  props: {
    cartId: String,
  },
  methods: {
    moveToTrash: function () {
      const trashData = {
        isDeleted: true,
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
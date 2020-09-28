<template>
  <div class="delete" @click="moveToTrash()">
    <md-icon>delete</md-icon>
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
.delete {
  display: flex;
  cursor: pointer;
  flex-direction: column;
  width: 10%;
}
.md-icon:hover {
  color: black;
}
</style>
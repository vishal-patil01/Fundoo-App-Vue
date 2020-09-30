<template>
  <div class="delete" @click="DeleteForever()">
    <md-icon>delete_forever</md-icon>
  </div>
</template>

<script>
import { bus } from "../main";
import NoteService from "../Services/NoteService";

export default {
  name: "IconDeleteForever",
  props: {
    cartId: String,
  },
  methods: {
    DeleteForever: function () {
      const note = {
        noteIdList: [this.$props.cartId],
      };
      NoteService.deleteNoteForever(note)
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
  cursor: pointer;
  margin: 5px;
}
.md-icon:hover {
  color: black;
}
</style>
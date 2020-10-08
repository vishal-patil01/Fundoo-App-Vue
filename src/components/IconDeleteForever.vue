<template>
  <div class="delete" @click="DeleteForever()">
    <md-button class="md-icon-button">
      <md-icon>delete_forever</md-icon>
    </md-button>
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
<template>
  <div class="archive" @click="moveToArchieve()">
    <md-button class="md-icon-button">
      <md-icon :class="{ selected: isSelected }">archive</md-icon>
    </md-button>
  </div>
</template>

<script>
import { bus } from "../main";
import NoteService from "../Services/NoteService";

export default {
  name: "IconArchive",
  data: () => ({
    isSelected: false,
  }),
  props: {
    cartId: String,
    isCreateNote: Boolean,
  },
  methods: {
    moveToArchieve: function () {
      if (this.isCreateNote) {
        this.isSelected = !this.isSelected;
        bus.$emit("isArchieved");
      } else {
        const trashData = {
          isArchived: true,
          noteIdList: [this.$props.cartId],
        };
        NoteService.moveToArchive(trashData)
          .then(() => {
            bus.$emit("updateNoteList", true);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>
.archive {
  cursor: pointer;
  margin: 5px;
}
.selected {
  color: black !important;
}
.md-icon:hover {
  color: black;
}
</style> 
<template>
  <md-dialog :md-active.sync="showContextMenu" class="dialogbox">
    <div class="note-container">
      <md-card id="new-note">
        <md-field md-inline>
          <md-input v-model="noteTitle" placeholder="Title" />
        </md-field>
        <md-field md-inline>
          <md-textarea
            v-model="noteData"
            placeholder="Take a note"
            md-autogrow
          />
        </md-field>
        <div class="utility-icons">
          <span>
            <IconColorPalette
              v-if="this.$router.currentRoute.path != 'trash'"
            />
            <IconArchive v-if="this.routerPath != '/dashboard/trash' " />
            <IconUnArchive v-if="this.routerPath == '/dashboard/archieve'" />
            <IconTrash v-if="this.routerPath == '/dashboard/trash'" />
            <IconRestoreFromtrash v-if="this.routerPath == '/dashboard/trash'" />
            <IconDeleteForever v-if="this.routerPath == '/dashboard/trash'" />
          </span>
          <button @click="updateNote(), $emit('close')">Close</button>
        </div>
      </md-card>
    </div>
  </md-dialog>
</template>

<script>
import IconColorPalette from "./IconColorPalette";
import IconArchive from "./IconArchive";
import IconUnArchive from "./IconUnArchive";
import IconTrash from "./IconTrash";
import IconRestoreFromtrash from "./IconRestoreFromtrash";
import IconDeleteForever from "./IconDeleteForever";
import NoteService from "../Services/NoteService";
import { bus } from "../main";


export default {
  data: () => ({
    noteTitle: "",
    noteData: "",
    routerPath:"",
  }),
  components: {
    IconColorPalette,
    IconArchive,
    IconUnArchive,
    IconTrash,
    IconRestoreFromtrash,
    IconDeleteForever,
  },
  props: {
    showContextMenu: Boolean,
    noteDetails: Object,
  },
  methods: {
    updateNote: function () {
      const data = {
        description: this.noteData,
        noteId: this.noteDetails.id,
        title: this.noteTitle,
      };
      NoteService.updateNote(data)
        .then(() => {
          bus.$emit("updateNoteList");
          console.log("success");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {
    noteDetails: function () {
      this.noteTitle = this.$props.noteDetails.title;
      this.noteData = this.$props.noteDetails.description;
      this.routerPath=this.$router.currentRoute.path;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/style.scss";
.md-dialog /deep/.md-dialog-container {
  border-radius: 10px;
}
.container {
  @include flex-box;
  flex-direction: column;
  margin: 10px 5px;
  width: -webkit-fill-available;
}

.create-note {
  border-radius: 7px;
  width: 35vw;
  padding: 7px;
  justify-content: center;
  cursor: text;
  box-shadow: 0 1px 6px 0 rgb(146, 144, 144);
  transition: 0.3s;
  font-size: 18px;
  color: grey;
  @include primary-font;
}

.md-card {
  padding: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: none;
  margin: 20px;
  width: 30vw;
}
.md-field {
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
}
.take-note {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  opacity: 0.6;
}
.md-input{
  text-align: left;
}
#new-note {
  display: flex;
}

.utility-icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.utility-icons > button {
  width: 15%;
  font-size: 15px;
  display: flex;
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 5px;
  justify-content: center;
}
.md-field:after,
.md-field:before {
  position: relative;
}
.md-dialog-container {
  border-radius: 14px !important;
  height: auto;
  transform: none;
}
.md-overlay {
  display: none !important;
}
span {
  display: flex;
  flex-direction: row;
}
@media (max-width: 1000px) {
  .create-note {
    width: 75vw;
  }
}
@media (max-width: 600px) {
  .md-dialog-fullscreen {
    border-radius: 14px;
    height: auto;
    transform: none;
  }
}
</style> 
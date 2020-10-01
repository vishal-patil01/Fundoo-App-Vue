<template>
  <md-dialog :md-active.sync="dialogShow" class="dialogbox">
    <div class="note-container">
      <md-card id="new-note">
        <md-field md-inline>
          <md-input v-model="note.title" placeholder="Title" />
        </md-field>
        <md-field md-inline>
          <md-textarea
            v-model="note.description"
            placeholder="Take a note"
            md-autogrow
          />
        </md-field>
        <div class="utility-icons">
          <span>
            <IconColorPalette
              v-if="this.routerPath != '/dashboard/trash'"
              :cartId="note.id"
            />
            <IconArchive
              v-if="
                this.routerPath != '/dashboard/archieve' &&
                this.routerPath != '/dashboard/trash'
              "
              :cartId="note.id"
            />
            <IconUnArchive
              v-if="
                this.routerPath == '/dashboard/archieve' &&
                this.routerPath != '/dashboard/trash'
              "
              :cartId="note.id"
            />
            <IconTrash
              v-if="this.routerPath != '/dashboard/trash'"
              :cartId="note.id"
            />
            <IconRestoreFromtrash
              v-if="this.routerPath == '/dashboard/trash'"
              :cartId="note.id"
            />
            <IconDeleteForever
              v-if="this.routerPath == '/dashboard/trash'"
              :cartId="note.id"
            />
          </span>
          <button @click="updateNote()">Close</button>
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
    routerPath: "",
    dialogShow: "",
    note: Object,
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
        description: this.note.description,
        noteId: this.note.id,
        title: this.note.title,
      };
      NoteService.updateNote(data)
        .then(() => {
          bus.$emit("closeDialogBox", this.dialogShow);
          bus.$emit("updateNoteList");
          this.dialogShow = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.note = this.$props.noteDetails;
    this.dialogShow = this.$props.showContextMenu;
    this.routerPath = this.$router.currentRoute.path;
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/style.scss";
.md-dialog /deep/.md-dialog-container {
  width: 35vw;
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
.md-input {
  text-align: left;
}
#new-note {
  display: flex;
  width: -webkit-fill-available;
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
  justify-content: flex-start;
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
@media (max-width: 2000px) {
  .create-note {
    width: 75vw;
  }
}
@media (max-width: 600px) {
  .md-dialog /deep/.md-dialog-container {
    margin: auto 25px;
    border-radius: 10px;
    width: -webkit-fill-available;
    height: fit-content;
  }
}
</style> 
<template>
  <div class="container">
    <div class="create-note" :style="{ 'background-color': color }">
      <div class="take-note" @click="createNote()">
        <div :class="{ hideDiv: isVisible }">
          <md-card id="title"> Take a note...</md-card>
        </div>
      </div>
      <div :class="{ hideDiv: !isVisible }">
        <md-card id="new-note" :style="{ 'background-color': color }">
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
              <IconColorPalette :isCreateNote="true" />
              <IconArchive :isCreateNote="true" />
            </span>
            <button @click="closeCreateNote()">Close</button>
          </div>
        </md-card>
      </div>
    </div>
     <md-snackbar
        md-position="left"
        :md-active.sync="showSnackbar"
        md-persistent
      >
        <span>Note Created Successfully!</span>
        <md-button class="md-primary" @click="showSnackbar = false"
          >x</md-button
        >
      </md-snackbar>
  </div>
</template>

<script>
import UserService from "../Services/UserService";
import IconColorPalette from "./IconColorPalette";
import IconArchive from "./IconArchive";
import { bus } from "../main";

export default {
  components: {
    IconColorPalette,
    IconArchive,
  },
  data: () => ({
    noteTitle: "",
    noteData: "",
    noteList: [],
    isVisible: false,
    isArchived: false,
    color: "",
    showSnackbar:false,
  }),
  methods: {
    createNote: function () {
      this.isVisible = true;
    },
    closeCreateNote: function () {
      this.color="#ffffff"
      const note = {
        title: this.noteTitle,
        description: this.noteData,
        isArchived: this.isArchived,
        color: this.color,
      };
      if (note.title.trim() != "" || note.description.trim() != "") {
        UserService.addNote(note)
          .then((response) => {
            console.log(response);
            this.noteTitle = "";
            this.noteData = "";
            this.showSnackbar=true;
            bus.$emit("updateNoteList", true);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      this.isVisible = false;
    },
  },
  created() {
    bus.$on("isArchieved", () => {
      this.isArchived = true;
    });
    bus.$on("setNewColor", (value) => {
      this.color = value;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/style.scss";
.container {
  @include flex-box;
  flex-direction: column;
  margin: 10px 5px;
  width: -webkit-fill-available;
}
.hideDiv {
  display: none;
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
span {
  display: flex;
  flex-direction: row;
}
@media (max-width: 1000px) {
  .create-note {
    width: 60vw;
  }
}
@media (max-width: 650px) {
  .create-note {
    width: 70vw;
  }
}
</style> 
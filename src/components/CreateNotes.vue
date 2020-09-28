<template>
  <div class="container">
    <div class="create-note">
      <div class="take-note" @click="createNote()">
        <div>
          <md-card id="title"> Take a note...</md-card>
        </div>
      </div>
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
              <IconColorPalette />
              <IconArchive />
            </span>
            <button @click="closeCreateNote()">Close</button>
          </div>
        </md-card>
      </div>
    </div>
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
  }),
  methods: {
    createNote: function () {
      document.getElementById("new-note").style.display = "flex";
      document.getElementById("title").style.display = "none";
    },
    closeCreateNote: function () {
      const note = {
        title: this.noteTitle,
        description: this.noteData,
      };
      if (note.title.trim() != "" || note.description.trim() != "") {
        UserService.addNote(note)
          .then((response) => {
            console.log(response);
            this.title = "";
            this.description = "";
            bus.$emit("updateNoteList");
          })
          .catch((error) => {
            console.log(error);
          });
      }
      document.getElementById("new-note").style.display = "none";
      document.getElementById("title").style.display = "flex";
    },
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

#new-note {
  display: none;
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
    width: 75vw;
  }
}
</style> 
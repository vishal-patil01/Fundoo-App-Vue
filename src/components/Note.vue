<template>
  <div class="container">
    <CreateNotes />
    <DisplayNotes :notes="noteList" />
  </div>
</template>

<script>
import DisplayNotes from "./DisplayNotes";
import CreateNotes from "./CreateNotes";
import NoteService from "../Services/NoteService";
import { bus } from "../main";

export default {
  components: {
    DisplayNotes,
    CreateNotes,
  },
  data: () => ({
    noteList: [],
  }),
  methods: {
    getNotes: function () {
      this.isDataLoaded = false;
      NoteService.fetchNotesList()
        .then((response) => {
          this.noteList = response.data.data.data.filter(
            (el) => el.isArchived == false && el.isDeleted == false
          );
          console.log(this.noteList);
          this.isDataLoaded = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getNotes();
  },
  created(){
    bus.$on("updateNoteList", () => {
      this.getNotes();
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/style.scss";
.container {
  @include flex-box;
  flex-direction: column;
  margin: 10px 10px;
  width: -webkit-fill-available;
}
</style> 
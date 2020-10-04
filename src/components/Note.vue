<template>
  <div class="container">
    <CreateNotes />
    <img
      v-if="!isDataLoaded"
      height="100"
      width="100"
      src="../assets/loader.gif"
    />
    <DisplayNotes v-if="isDataLoaded" :notes="filteredNotes" />
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
    isDataLoaded: false,
    searchedNotes: "",
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
  computed: {
    filteredNotes: function () {
      return this.noteList.filter((note) => {
        return note.title.toLowerCase().trim().match(this.searchedNotes);
      });
    },
  },
  mounted() {
    bus.$emit("clearSearch");
    this.getNotes();
  },
  created() {
    bus.$on("updateNoteList", (value) => {
      if (value) this.getNotes();
    });
    bus.$on("search", (value) => {
      this.searchedNotes = value;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/style.scss";
.container {
  @include flex-box;
  flex-direction: column;
  margin: 10px auto;
  width: -webkit-fill-available;
}
</style> 
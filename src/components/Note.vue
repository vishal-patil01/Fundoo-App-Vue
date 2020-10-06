<template>
  <div class="container">
    <CreateNotes />
    <div class="loader" v-if="!isDataLoaded">
    <img
      height="200"
      width="200"
      src="../assets/loader.gif"
    />
    </div>
    <DisplayNotes v-if="isDataLoaded" :notes="filteredNotes" />
  </div>
</template>

<script>
import DisplayNotes from "./DisplayNotes";
import CreateNotes from "./CreateNotes";
import NoteService from "../Services/NoteService";
import { bus } from "../main";
import SearchMixins from "../mixins/SearchMixins";

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
  mixins: [SearchMixins],
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
.loader{
 @include flex-box;
 height: 55vh;
}
</style> 
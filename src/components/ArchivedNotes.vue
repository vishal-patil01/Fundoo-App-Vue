<template>
  <div class="container">
    <div class="loader" v-if="!isDataLoaded">
      <img height="200" width="200" src="../assets/loader.gif" />
    </div>
    <DisplayNotes v-if="isDataLoaded" :notes="filteredNotes" archive="true" />
  </div>
</template>
<script>
import NoteService from "../Services/NoteService";
import DisplayNotes from "./DisplayNotes";
import { bus } from "../main";
import SearchMixins from "../mixins/SearchMixins";

export default {
  name: "Notes",
  data() {
    return {
      noteList: [],
      isDataLoaded: false,
      searchedNotes: "",
    };
  },
  components: {
    DisplayNotes,
  },
  methods: {
    getArchivedNotes: function () {
      this.isDataLoaded = false;
      NoteService.fetchArchivedNotesList()
        .then((response) => {
          this.noteList = response.data.data.data;
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
    this.getArchivedNotes();
  },
  created() {
    bus.$on("updateNoteList", (value) => {
      if (value) this.getArchivedNotes();
    });
    bus.$on("search", (value) => {
      this.searchedNotes = value;
    });
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  align-items: center;
  justify-content: center;
  width: -webkit-fill-available;
}
.loader {
  display: flex;
  height: 55vh;
  align-items: center;
}
</style>
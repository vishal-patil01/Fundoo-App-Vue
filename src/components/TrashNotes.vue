<template>
  <div class="container">
    <img
      v-if="!isDataLoaded"
      height="100"
      width="100"
      src="../assets/loader.gif"
    />
    <DisplayNotes v-if="isDataLoaded" :notes="noteList" trash="true" />
  </div>
</template>
<script>
import NoteService from "../Services/NoteService";
import DisplayNotes from "./DisplayNotes";
import { bus } from "../main";

export default {
  name: "Notes",
  data() {
    return {
      noteList: [],
      isDataLoaded: false,
    };
  },
  components: {
    DisplayNotes,
  },
  methods: {
    getTrashedNotes: function () {
      this.isDataLoaded = false;
      NoteService.fetchTrashedNotesList()
        .then((response) => {
          this.noteList = response.data.data.data;
          this.isDataLoaded = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getTrashedNotes();
  },
  created() {
    bus.$on("updateNoteList", () => {
      this.getTrashedNotes();
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
</style>
<template>
  <div class="container">
    <DisplayNotes :notes="noteList" />
  </div>
</template>
<script>
import NoteService from "../Services/NoteService";
import DisplayNotes from "./DisplayNotes";

export default {
  name: "Notes",
  data() {
    return {
      noteList: [],
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
};
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  align-items: flex-start;
  width: -webkit-fill-available;
}
</style>
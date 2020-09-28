<template>
  <div class="container">
    <div class="inner-container" v-for="note in noteList" v-bind:key="note.title">
      <md-card>
        <label class="title">{{ note.title }}</label
        ><br />
        <label class="description">{{ note.description }}</label
        ><br />
        <div class="notebox-icons">
          <ColorPalette />
          <Archive />
        </div>
      </md-card>
    </div>
  </div>
</template>
<script>
import ColorPalette from "./ColorPalette";
import Archive from "./Archive";
import { bus } from "../main";

export default {
  name: "Notes",
  data() {
    return {
      noteList: [],
    };
  },
  components: {
    ColorPalette,
    Archive,
  },
  methods: {},
  mounted() {
    bus.$on("noteListChanged", (notes) => {
      this.noteList = notes;
    });
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  align-items: flex-start;
}

.md-card {
  flex-direction: column;
  border-radius: 15px;
  text-align: start;
  margin: 10px;
  padding: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
}
.title {
  font-weight: bold;
  font-size: 18px;
  opacity: 0.6;
  cursor: text;
  margin: 0px 0px 10px 0px;
}
.description {
  max-width: 250px;
  font-size: 16px;
  font-weight: 500;
  flex-wrap: wrap;
  word-wrap: break-word;
}
.notebox-icons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
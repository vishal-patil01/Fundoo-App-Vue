<template>
  <div class="container">
    <div class="notes-container">
      <div class="inner-container" v-for="note in notes" v-bind:key="note.id">
        <md-card>
          <label class="title">{{ note.title }}</label
          >
          <label class="description">{{ note.description }}</label
          >
          <div class="notebox-icons-container">
             <div v-if="trash" class="notebook-icons">
              <IconDeleteForever :cartId="note.id" />
            </div>
            <div v-if="trash" class="notebook-icons">
              <IconRestoreFromtrash :cartId="note.id" />
            </div>
            <div v-if="!trash" class="notebook-icons">
              <IconColorPalette :cartId="note.id" />
            </div>
            <div v-if="archive && !trash" class="notebook-icons">
              <IconUnArchive :cartId="note.id" />
            </div>
            <div v-if="!archive && !trash" class="notebook-icons">
              <IconArchive :cartId="note.id" />
            </div>
            <div v-if="!trash || !trash" class="notebook-icons">
              <IconTrash :cartId="note.id" />
            </div>
          </div>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import IconColorPalette from "./IconColorPalette";
import IconArchive from "./IconArchive";
import IconUnArchive from "./IconUnArchive";
import IconTrash from "./IconTrash";
import IconRestoreFromtrash from "./IconRestoreFromtrash";
import IconDeleteForever from "./IconDeleteForever";

export default {
  props: {
    notes: Array,
    archive: String,
    trash: String,
  },
  components: {
    IconColorPalette,
    IconArchive,
    IconUnArchive,
    IconTrash,
    IconRestoreFromtrash,
    IconDeleteForever
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/style.scss";
.notes-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  height: fit-content;
  align-items: flex-start;
  width: -webkit-fill-available;
}
.inner-container > .md-card {
  flex-direction: column;
  border-radius: 8px;
  text-align: start;
  margin:15px 10px;
  padding: 0 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  border: 1px solid transparent;
  border-color: #e0e0e0;
  box-shadow: none;
}
.inner-container > .md-card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.title {
  font-weight: bold;
  font-size: 16px;
  cursor: text;
  margin: 10px;
}
.description {
  margin: 10px 10px 10px 15px;
  max-width: 250px;
  font-size: 14px;
  font-weight: 500;
  flex-wrap: wrap;
  word-wrap: break-word;
}
.notebox-icons-container {
  display: flex;
  flex-direction: row;
  width: -webkit-fill-available;
  justify-content: flex-end;
  margin: 5px;
}
</style> 
<template>
  <div :class="{ 'notes-container': true, listLayout: listViewEnabled }">
    <CustomDialogBox
      v-if="showDialog"
      :showContextMenu="showDialog"
      :noteDetails="noteDetails"
    />
    <div
      :class="{ 'inner-container': true, listLayout: listViewEnabled }"
      v-for="note in notes"
      v-bind:key="note.id"
    >
      <md-card @load="test()" :style="{'background-color':note.color}"
        :class="{ listLayout: listViewEnabled }"
        @click.native.self="edit(note)"
      >
        <div class="labeldiv" @click="edit(note)">
          <label class="title">{{ note.title }}</label>
          <label class="description">{{ note.description }}</label>
        </div>
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
</template>

<script>
import IconColorPalette from "./IconColorPalette";
import IconArchive from "./IconArchive";
import IconUnArchive from "./IconUnArchive";
import IconTrash from "./IconTrash";
import IconRestoreFromtrash from "./IconRestoreFromtrash";
import IconDeleteForever from "./IconDeleteForever";
import CustomDialogBox from "./CustomDialogBox";
import { bus } from "../main";

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
    IconDeleteForever,
    CustomDialogBox,
  },
  data: () => ({
    showDialog: false,
    noteDetails: {},
    listViewEnabled: false,
  }),
  methods: {
    edit: function (data) {
      this.showDialog = true;
      this.noteDetails = data;
    },
    test:function(){
      console.log(111)
    }
  },
  created() {
    bus.$on("closeDialogBox", (data) => {
      this.showDialog = data;
    });
    bus.$on("setListView", (data) => {
      this.listViewEnabled = data;
    });
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
  margin: 10px auto;
  align-items: flex-start;
  width: -webkit-fill-available;
}
.labeldiv {
  display: flex;
  flex-direction: column;
}
.inner-container {
  justify-content: center;
  margin: 10px 10px;
}
.inner-container > .md-card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  text-align: start;
  margin: 15px auto;
  padding: 0 10px;
  background-color: white;
  display: flex;
  justify-content: center;
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
  justify-content: space-evenly;
  margin: 5px 10px;
}
.listLayout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 35vw !important;
}
@media (max-width: 652px) {
  .inner-container {
    justify-content: center;
    margin: 10px auto;
  }
}
@media (max-width: 1000px) {
  .listLayout {
    width: 60vw !important;
  }
}
@media (max-width: 550px) {
  .listLayout {
    flex-direction: row;
    align-items: flex-start;
    width: 230px !important;
  }
}
</style> 
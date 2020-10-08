<template>
  <div class="color-palette">
        <md-button class="md-icon-button">
    <md-icon @click.native="itemSelected = !itemSelected">palette</md-icon>

    </md-button>
    <div :class="{ 'dropdown-content': true, selected: itemSelected }">
      <div
        class="colorBall"
        v-for="color in colors"
        v-bind:key="color"
        @click="setColor(color)"
      ></div>
    </div>
  </div>
</template>

<script>
import NoteService from "../Services/NoteService";
import { bus } from "../main";

export default {
  name: "IconColorPalette",
  props: {
    cartId: String,
    isCreateNote: Boolean,
  },
  data: () => ({
    colors: [
      "#ffffff",
      "#f28b82",
      "#fbbc04",
      "#fff475",
      "#ccff90",
      "#a7ffeb",
      "#cbf0f8",
      "#aecbfa",
      "#d7aefb",
      "#fdcff8",
      "#e6a9c8",
      "#d3d3d3",
    ],
    itemSelected: false,
  }),
  methods: {
    toggle: function () {
      alert(this.itemSelected);
      this.itemSelected = !this.itemSelected;
    },
    setColor: function (colorValue) {
      if (this.isCreateNote) {
        this.itemSelected = !this.itemSelected;
        bus.$emit("setNewColor", colorValue);
      } else {
        const data = {
          color: colorValue,
          noteIdList: [this.$props.cartId],
        };
        NoteService.changeColor(data)
          .then(() => {
            bus.$emit("updateNoteList", true);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.color-palette {
  cursor: pointer;
  margin: 5px;
  position: relative;
  display: inline-block;
}
.md-icon:hover {
  color: black;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 125px;
}
.colorBall {
  height: 25px;
  width: 25px;
  margin: 3px;
  border-radius: 20px;
}

.selected {
  display: flex;
  flex-wrap: wrap;
  bottom: 100%;
}

//dynamic css for generate specific color code for color pallete
$colors: white, #f28b82, #fbbc04, #fff475, #ccff90, #a7ffeb, #cbf0f8, #aecbfa,
  #d7aefb, #fdcff8, #e6a9c8, lightgrey;

@for $i from 1 to length($colors) + 1 {
  .dropdown-content > div:nth-child(#{$i}) {
    @if $i==1 {
      border: 1px solid;
    }
    background-color: nth($colors, $i);
  }
}
</style> 
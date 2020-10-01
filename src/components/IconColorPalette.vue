<template>
  <div class="color-palette">
    <md-icon>palette</md-icon>
  </div>
</template>

<script>
export default {
  name: "IconColorPalette",

  methods: {
    colorLoad: function () {
      alert(11);
      document.getElementById("asd").style.backgroundColor = "red";
    },
  },
};
</script>

<style scoped>
.color-palette {
  cursor: pointer;
  margin: 5px;
  position: relative;
  display: inline-block;
}
.md-icon:hover {
  color: black;
}
</style> 
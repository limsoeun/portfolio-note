<template>
  <div class="main">
    <section id="note" @click="goToMain">
      <div id="note-cover" class="note-cover">
        <div class="cover-content">
          <p>Lim Soeun Portfolio</p>
        </div>
      </div>
      <div class="note">
        <span>노트 첫 페이지</span>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import path from "@/router/path";
export default defineComponent({
  name: "MainView",
  mounted() {
    //
  },
  methods: {
    goToMain() {
      const noteElement = document.getElementById("note");
      const coverElement = document.getElementById("note-cover");
      if (noteElement) {
        noteElement.className = noteElement.className + " note-scale";
      }
      if (coverElement) {
        coverElement.className = coverElement.className + " note-cover-scale";
      }
      // this.$router.push(path.home.path);
    },
  },
});
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: hidden;
}
section {
  height: 600px;
  width: 470px;
  align-items: center;
  justify-content: center;
  display: flex;
  perspective: 2000px;
}
.note-scale {
  transform: scale(1.5);
  transition-duration: 1.5s;
  transition-timing-function: ease-in;
}
.note,
.note-cover {
  border: 1px solid rgb(190, 184, 184);
  height: 600px;
  width: 470px;
  box-shadow: 5px 5px 15px #333;
  transition: 2s;
  position: absolute;
}
.note {
  background-color: rgb(239, 222, 172);
}
.note-cover {
  background-color: rgb(252, 248, 229);
  z-index: 10;
  transform-origin: left center;
  transition-duration: 1.5s;
  transition-timing-function: ease-in;
}
.note-cover-scale {
  transform: rotateY(-180deg);
  background-color: rgb(239, 222, 172);
  .cover-content {
    //
  }
}
</style>

<template>
  <div class="main">
    <section id="note" @click="goToMain">
      <div id="note-cover" class="note-cover">
        <div class="cover-content">
          <div class="note-spine" />
          <div class="cover-main">
            <div class="circle-border" />
            <div class="cover-box">
              <span class="title-end">Note</span>
              <p>soeunLim Portfolio Project</p>
              <p>Coptright(C)2022.All rights reserved by soeunLim</p>
            </div>
            <span class="title-start-left">Lim</span>
            <span class="title-start-right">Soeun</span>
            <span class="title-center">Portfolio</span>
          </div>
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
      setTimeout(() => {
        // this.$router.push(path.home.path);
      }, 1000);
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
}
section {
  height: 600px;
  width: 470px;
  align-items: center;
  justify-content: center;
  display: flex;
  perspective: 2200px;
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
  transition: 2s;
  position: absolute;
}
.note {
  background-color: $note;
  box-shadow: 0px 8px 10px #333;
}
.note-cover {
  background-color: $note-cover;
  z-index: 10;
  transform-origin: left center;
  transition-duration: 1.5s;
  transition-timing-function: ease-in;
  .cover-content {
    display: flex;
    height: 100%;
    width: 100%;
    .note-spine {
      margin-left: 18px;
      width: 1px;
      height: 100%;
      background-color: #333;
    }
    .cover-main {
      width: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      .circle-border {
        height: 340px;
        width: 340px;
        border: 10px solid rgb(185 196 211);
        border-radius: 50%;
        position: relative;
        bottom: 80px;
      }
      .title-start-left,
      .title-start-right,
      .title-center {
        position: absolute;
        color: $cover-font-color;
        font-family: cursive;
      }
      .title-start-left {
        font-size: 73px;
        top: 71px;
        left: 86px;
      }
      .title-start-right {
        font-size: 75px;
        top: 104px;
        right: 68px;
        overflow: hidden;
        width: 228px;
        border-top-right-radius: 91px;
      }
      .title-center {
        font-size: 64px;
        top: 260px;
      }
      .cover-box {
        height: 150px;
        width: 400px;
        border: 3px solid rgb(185 196 211);
        position: absolute;
        bottom: 20px;
        p {
          margin: 0;
          font-size: 12px;
          color: $font-color;
          line-height: 17px;
        }
      }
      .title-end {
        font-size: 60px;
        color: $cover-font-color;
        font-family: cursive;
      }
    }
  }
}
.note-cover-scale {
  transform: rotateY(-180deg);
  background-color: $note;
  .cover-content {
  }
}

.note-book {
}
</style>

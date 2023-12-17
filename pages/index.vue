<template>
  <main class="container">
    <div class="content">

      <img class="poster card" src="~/assets/img/poster.jpg" alt="海报">

      <iframe class="pdf card" :src="'static/pdf/web/viewer.html?file=/創作者的話.pdf'" frameborder="no"
        framespacing="0"></iframe>
      <iframe class="video card"
        src="//player.bilibili.com/player.html?aid=537496330&bvid=BV1Bi4y1a72A&cid=1370670746&p=1" scrolling="no"
        frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

      <img class="we card" src="~/assets/img/we.jpg" alt="we">
    </div>

  </main>
</template>

<script setup>



</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  background-color: #efeeea;
  justify-content: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 16px;
    max-width: 768px;

    @media screen and (min-width: 768px) {
      padding-top: 72px;
      padding-bottom: 16px;
    }

    .card {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      width: 100%;
    }

    .poster {
      width: 100%;
    }

    .pdf {
      height: 100vh;
    }

    .video {
      width: 100%;
      height: 56.25vw;

      @media screen and (min-width: 768px) {
        height: calc(768px * 0.75);
      }
    }

    .we {
      width: 100%;
    }
  }

}
</style>
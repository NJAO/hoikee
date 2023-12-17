<template>
  <div class="container">
    <img class="poster" src="/微信图片_20231203235848.jpg" alt="海报">

    <iframe class="pdf" :src="'static/pdf/web/viewer.html?file=/創作者的話2023-12.pdf'" frameborder="no"
      framespacing="0"></iframe>
    <iframe class="video" src="//player.bilibili.com/player.html?aid=437759774&bvid=BV1yj411G7UX&cid=1034354890&p=1"
      scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
  </div>
</template>

<script setup>



</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;


  .poster {
    width: 100%;
  }

  .pdf {
    width: 100%;
    height: 100vh;
  }

  .video {
    width: 100%;
    height: 56.25vw;
  }
}
</style>
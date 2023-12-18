<template>
  <main class="container">
    <div class="content">

      <img src="~/assets/img/artist.jpg" alt="artist" class="card">

      <img class="poster card" src="~/assets/img/poster.jpg" alt="海报">
      <!-- 
      <iframe class="pdf card" :src="'static/pdf/web/viewer.html?file=/創作者的話.pdf'" frameborder="no"
        framespacing="0"></iframe> -->

      <div class="pdf card">
        <img src="~/assets/img/pdf1.jpg" alt="德三角琴">
        <img src="~/assets/img/pdf2.jpg" alt="德三角琴">
        <img src="~/assets/img/pdf3.jpg" alt="德三角琴">
        <img src="~/assets/img/pdf4.jpg" alt="德三角琴">
        <img src="~/assets/img/pdf5.jpg" alt="德三角琴">
      </div>
      <iframe class="video card"
        src="//player.bilibili.com/player.html?aid=537496330&bvid=BV1Bi4y1a72A&cid=1370670746&p=1" scrolling="no"
        frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

      <img class="we card" src="~/assets/img/we.jpg" alt="we">

      <a href="https://m.damai.cn/shows/item.html?itemId=754330654962&spm=a2o71.search.list.ditem_0"
        class="buy">前往購票👆🏽</a>
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
      display: flex;
      flex-direction: column;

      img {
        width: 100%;
      }
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

    .buy {
      background-color: #612725;
      padding: 16px;
      border-radius: 6px;
      color: #efeeea;
      font-size: 16px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

}
</style>
<template>
  <nav class="nav">

    <div class="container">
      <div class="menu_icon" :class="{ 'open': isOpenMenu }">
        <SvgoMenu v-if="!isOpenMenu" class="nav_icon" @click="isOpenMenu = !isOpenMenu" />
        <SvgoMenuClose v-else class="nav_icon" @click="isOpenMenu = !isOpenMenu" />
      </div>
      <ul class="list">
        <li>
          <NuxtLink to="/">主頁</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/new-show">最新演出</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/library">資料館</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/lab">實驗室</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about-us">關於創作社</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about-us">聯係我們</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const isScrolled = ref<Boolean>(false)
const isOpenMenu = ref<Boolean>(false)

</script>

<style scoped lang="scss">
.nav {
  .container {
    position: fixed;
    background-color: transparent;
    transition: background-color .3s ease-in-out;
    width: 100%;
    font-size: 14px;

    .menu_icon {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      transition: transform .5s ease-in-out;


      .nav_icon {
        background-color: #612725;
        margin: 8px;
        cursor: pointer;

      }

      &.open {
        // transform: translateX(calc(-100% + 12px));
      }

      @media screen and (min-width: 768px) {
        display: none;
      }
    }



    .list {
      display: flex;
      display: none;
      font-weight: bolder;
      padding: 16px;
      width: 100%;
      justify-content: right;
      color: #efeeea;

      @media screen and (min-width: 768px) {
        display: flex;
        gap: 32px;
        border-radius: 0 0 2px 2px;
      }

    }

    @media screen and (min-width: 768px) {
      font-size: 18px;
      border-radius: 0 0 2px 2px;

      background-color: #612725;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    }

  }

}
</style>
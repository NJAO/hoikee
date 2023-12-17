<template>
  <nav>
    <div>
      <SvgoMenu />
    </div>
    <ul class="nav">
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
        <NuxtLink to="/about-us">關於創作社（簡介/聯係我們）</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.nav {
  position: fixed;
  display: flex;
  font-size: 14px;
  gap: 10px;
  color: black;
  font-weight: bolder;
  padding: 16px;

  a:hover {
    text-decoration: none;
    /* 鼠标悬停时显示下划线 */
  }

  a:active {
    color: currentColor;
    /* 点击时修改颜色为红色 */
    /* 其他样式，比如背景色、边框等 */
  }

  a:visited {
    color: currentColor;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
}
</style>
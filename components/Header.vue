<script setup lang="ts">

</script>

<template>
  <header>
    <div class="logo-wrapper">
      <SvgIconDachiy class="header-logo-icon" width="280"/>
      <SvgIconVrozhai class="header-logo-icon" width="280"/>
    </div>

    <div class="header-text">
      Вирощуй з нами на дачному врожаї!
    </div>
    <NuxtLink to="/" class="link">Home</NuxtLink>
    <NuxtLink to="/test">Test</NuxtLink>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  height: 180px;
  background: linear-gradient(290deg, #FFA859 20.28%, #92A92C 52.52%);
  border-bottom: 6px solid #3F4B07;

  .logo-wrapper {
    display: flex;

    .header-logo-icon {
      height: 180px;
    }
  }

  .header-text {
    font-family: "Anime Ace v05", Calibri, sans-serif;
  }

  .link {
    font-family: Montserrat, Calibri, sans-serif;
  }
}
</style>

<script setup lang="ts">

</script>

<template>
  <header>
    <section class="header-top">
      <NuxtLink to="/" class="logo-wrapper">
        <SvgIconDachiy class="header-logo-icon" width="250"/>
        <SvgIconVrozhai class="header-logo-icon" width="250"/>
      </NuxtLink>

      <div class="header-text">
        Вирощуй з нами на дачному врожаї!
      </div>
    </section>

    <section class="header-links">
      <HeaderCategoryLink />
      <NuxtLink to="/" class="link">Home</NuxtLink>
      <NuxtLink to="/test">Test</NuxtLink>
    </section>
  </header>
</template>

<style scoped lang="scss">
header {
  .header-top {
    display: flex;
    height: 180px;
    background: linear-gradient(290deg, #FFA859 20.28%, #92A92C 52.52%);
    border-bottom: 6px solid #3F4B07;
  }

  .logo-wrapper {
    display: flex;

    .header-logo-icon {
      height: 180px;
    }
  }

  .header-text {
    @include flex-center();
    font-family: $font-family-primary;
  }

  .link {
    font-family: $font-family-secondary
  }
}
</style>

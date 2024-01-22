<script setup lang="ts">
import { HEADER_LINKS } from '~/utils/constants/HeaderLinks';

const headerLinks = HEADER_LINKS;

const label = 'Капустяні';
</script>

<template>
  <header>
    <section class="header-top">
      <NuxtLink to="/" class="logo-wrapper">
        <SvgIconLogoDachniy class="header-logo-icon" width="250" />
        <SvgIconLogoVrozhai class="header-logo-icon" width="250" />
      </NuxtLink>

      <div class="header-text">
        <p>Вирощуй разом з нами на дачному врожаї!</p>
      </div>
    </section>

    <section class="header-links">
      <HeaderCategoryLink
        v-for="link in headerLinks"
        :key="link.category.label"
        :label="link.category.label"
        :to="link.category.to"
        :items="link.subcategories"
      />
    </section>
  </header>
</template>

<style scoped lang="scss">
header {
  .header-top {
    display: flex;
    justify-content: space-between;
    height: 180px;
    padding: 0 24px;
    background: linear-gradient(290deg, $orange-400 20.28%, $secondary 52.52%);
    border-bottom: 6px solid #3f4b07;

    .logo-wrapper {
      display: flex;
      filter: drop-shadow(0 0 10px rgba($black, 0.5));

      .header-logo-icon {
        height: 180px;
      }
    }

    .header-text {
      @include flex-center();

      p {
        margin: 28px 0 0;
        font-family: $font-family-primary;
      }
    }
  }

  .header-links {
    height: 52px;
    display: flex;
  }

  .link {
    font-family: $font-family-secondary;
  }
}
</style>

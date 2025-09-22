<script setup lang="ts">
const { contentSections } = useSectionsStore();
</script>

<template>
  <header class="hidden md:block">
    <section class="header-top">
      <NuxtLink to="/" class="logo-wrapper">
        <SvgIconLogoDachniy class="header-logo-icon" width="250" />
        <SvgIconLogoVrozhai class="header-logo-icon" width="250" />
      </NuxtLink>

      <div class="header-text">
        <p>Вирощуй разом з нами на дачному врожаї!</p>
      </div>
    </section>

    <section class="progress-bar">
      <HeaderReadingProgressBar />
    </section>

    <section class="header-links">
      <HeaderSectionDropdown v-for="section in contentSections" :key="section.sectionName" :section="section" />
    </section>
  </header>
</template>

<style scoped lang="scss">
//@use 'abstracts/mixins.scss';
//@use 'abstracts/colors.scss';
@use 'abstracts/fonts.scss';

$header-height: 180px;
$progress-bar-height: 8px;

header {
  position: sticky;
  top: -$header-height;
  z-index: 10;

  .header-top {
    display: flex;
    justify-content: space-between;
    height: $header-height;
    padding: 0 24px;
    background: linear-gradient(290deg, colors.$orange-400 20.28%, colors.$secondary 52.52%);

    .logo-wrapper {
      display: flex;
      filter: drop-shadow(0 0 10px rgba($black, 0.5));

      .header-logo-icon {
        height: 180px;
      }
    }

    .header-text {
      @include mixins.flex-center();

      p {
        margin: 28px 0 0;
        font-family: fonts.$font-family-primary;
      }
    }
  }

  .progress-bar {
    border-bottom: 3px solid colors.$green-800;
  }

  .header-links {
    position: sticky;
    top: 0;
    height: 52px;
    display: flex;
  }

  .link {
    font-family: fonts.$font-family-secondary;
  }
}
</style>

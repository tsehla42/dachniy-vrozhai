<script setup lang="ts">
const { section } = defineProps({
  section: {
    type: Object,
    required: true,
  },
});

const sectionCategories = [section.categories];

const dropdownUi = {
  strategy: 'override',
  wrapper: 'header-section',
  trigger: 'section-trigger-wrapper',
  container: 'category-dropdown-container',
  base: 'category-dropdown bg-none',
  background: 'bg-none',
  width: '',
  shadow: '',
  ring: '',
  item: {
    base: 'category-link-wrapper',
    rounded: '',
    padding: '',
    active: '',
    inactive: '',
  },
};

const triggerUi = {
  strategy: 'override',
  base: 'activator-first-level',
  rounded: '',
  inline: '',
  color: {
    black: 'color',
  },
  variant: {
    solid: '',
    link: '',
  },
  padding: {
    sm: '',
  },
};
</script>

<template>
  <DvDropdown :items="sectionCategories" :ui="dropdownUi">
    <template #trigger>
      <DvButton :ui="triggerUi" :label="section.sectionLabel" :is-link="false" />
    </template>

    <template #item="{ item }">
      <HeaderCategoryLink :category="item" />
    </template>
  </DvDropdown>
</template>

<style lang="scss">
//@use 'abstracts/mixins.scss';
//@use 'abstracts/colors.scss';
@use 'abstracts/fonts.scss';

.header-section {
  .section-trigger-wrapper .activator-first-level {
    padding: 10px 18px 4px;
    background: colors.$green-400;
    border: 3px solid colors.$green-800;
    border-top: none;
    border-radius: 0 0 18px 18px;
    outline: none;
    transition: all 0.3s;

    &:hover {
      padding: 12px 18px 6px;
      background: colors.$orange-300;
      border: 3px solid colors.$orange-900;
      border-top: none;
    }

    span {
      font-family: fonts.$font-family-primary;
      font-size: clamp(1.25rem, 1rem + 0.4vw, 1.5rem);
    }

    &.active {
      padding: 12px 18px;
      background: colors.$orange-400;
      border: 3px solid colors.$orange-focus;
    }
  }

  .category-dropdown-container {
    width: fit-content;
    padding-top: 2px !important;

    .category-dropdown div {
      @include mixins.dropdown-style;
    }

    .category-link-wrapper {
      font-size: 20px;
      @include mixins.section-category-dropdown-link;
    }
  }
}
</style>

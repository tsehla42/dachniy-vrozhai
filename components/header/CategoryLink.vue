<script setup lang="ts">
const { category } = defineProps({
  category: {
    type: Object,
    required: true,
  },
});

const categoryArticles = computed(() => {
  return category.articles ? [category.articles] : [[]];
});

const dropdownUi = {
  strategy: 'override',
  wrapper: 'category-link',
  trigger: 'category-trigger-wrapper',
  container: 'article-dropdown-container',
  base: 'article-dropdown bg-none',
  background: 'bg-none',
  width: '',
  shadow: '',
  ring: '',
  item: {
    base: 'article-link',
    rounded: '',
    padding: '',
    active: '',
    inactive: '',
  },
};

const triggerUi = {
  strategy: 'override',
  base: 'activator-second-level',
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
  <DvDropdown :items="categoryArticles" :ui="dropdownUi" placement="right-start">
    <template #trigger>
      <DvButton :ui="triggerUi" :label="category.label" :to="category.to" />
    </template>

    <template #item="{ item }">
      {{ item.label }}
    </template>
  </DvDropdown>
</template>

<style lang="scss">
//@use 'abstracts/colors.scss';
//@use 'abstracts/mixins.scss';
@use 'abstracts/fonts.scss';

.category-link {
  .category-trigger-wrapper .activator-second-level {
    padding: 5px 18px;

    span {
      font-family: fonts.$font-family-primary;
      font-size: 20px;
    }
  }

  .article-dropdown-container {
    width: max-content;
    margin-top: -5px !important;

    .article-dropdown div {
      @include mixins.dropdown-style;
    }

    .article-link {
      display: block;
      padding: 6px 18px;
      font-family: fonts.$font-family-primary;
      font-size: 16px;
      @include mixins.section-category-dropdown-link;
    }
  }
}
</style>

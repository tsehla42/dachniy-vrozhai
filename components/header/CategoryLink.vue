<script setup lang="ts">
const props = defineProps({
  category: {
    type: Object,
    required: true,
  },
});

const categorySubcategories = computed(() => {
  const { category } = props;
  return category.subcategories ? category.subcategories : [[]];
});

const dropdownUi = {
  strategy: 'override',
  wrapper: 'category-link',
  trigger: 'category-trigger-wrapper',
  container: 'subcategory-dropdown-container',
  base: 'subcategory-dropdown bg-none',
  background: 'bg-none',
  width: '',
  shadow: '',
  ring: '',
  item: {
    base: 'subcategory-link',
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
  <DvDropdown :items="categorySubcategories" :ui="dropdownUi" placement="right-start">
    <template #trigger>
      <DvButton :ui="triggerUi" :label="category.label" :to="category.to" />
    </template>

    <template #item="{ item }">
      {{ item.label }}
    </template>
  </DvDropdown>
</template>

<style lang="scss">
.category-link {
  .category-trigger-wrapper .activator-second-level {
    padding: 5px 18px;

    span {
      font-family: $font-family-primary;
      font-size: 20px;
    }

    &.active {
    }
  }

  .subcategory-dropdown-container {
    width: max-content;
    margin-top: -5px !important;

    .subcategory-dropdown div {
      @include dropdown-style;
    }

    .subcategory-link {
      display: block;
      padding: 6px 18px;
      font-family: $font-family-primary;
      font-size: 16px;
      @include section-category-dropdown-link;
    }
  }
}
</style>

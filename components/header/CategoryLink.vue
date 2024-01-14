<script setup lang="ts">
defineProps({
  items: {
    type: Array,
    required: true,
  },
  to: {
    type: String,
    required: true,
    default: '/',
  },
  label: {
    type: String,
    required: true,
    default: '',
  },
});

const dropdownUi = {
  strategy: 'override',
  wrapper: 'header-category-link',
  trigger: 'trigger-wrapper',
  container: 'dropdown-container',
  base: 'category-dropdown bg-none',
  background: 'bg-none',
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
  base: 'activator',
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
  <DvDropdown :items="items" :ui="dropdownUi">
    <template #trigger>
      <DvButton :ui="triggerUi" :label="label" :to="to" />
    </template>

    <template #item="{ item }">
      {{ item.label }}
      <!--      <HeaderSubcategoryLink :item="item" />-->
    </template>
  </DvDropdown>
</template>

<style lang="scss">
.header-category-link {
  .trigger-wrapper .activator {
    padding: 6px 18px;
    background: $green-400;
    border: 3px solid $green-800;
    border-top: none;
    border-radius: 0 0 18px 18px;
    outline: none;
    transition: all 0.3s;

    &:hover {
      padding: 8px 18px;
      background: $orange-300;
      border: 3px solid $orange-900;
      border-top: none;
    }

    span {
      font-family: $font-family-primary;
      font-size: 20px;
    }

    &.active {
      padding: 12px 18px;
      background: $orange-400;
      border: 3px solid $orange-focus;
      border-top: none;
    }
  }

  .dropdown-container {
    width: fit-content;
    padding-top: 2px !important;

    .category-dropdown {
      div {
        display: flex;
        flex-flow: column;
        gap: 2px;
      }
    }

    .subcategory-link {
      display: block;
      padding: 5px 18px;
      font-family: $font-family-primary;
      font-size: 16px;
      background-color: $green-400;
      border: 3px solid $green-800;
      transition: all 0.1s;

      &:first-of-type {
        border-radius: 0 18px 0 0;
      }

      &:last-of-type {
        border-radius: 0 0 18px 18px;
      }

      &:hover {
        background: $orange-300;
        border: 3px solid $orange-900;
      }
    }
  }
}
</style>

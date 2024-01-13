<script setup lang="ts">
const items = [
  [
    {
      label: 'Profile',
    },
    {
      label: 'Profile',
    },
    {
      label: 'Profile',
    },
    {
      label: 'Profile',
    },
    {
      label: 'Profile',
    },
    {
      label: 'Profile',
    },
  ],
];

const dropdownUi = {
  strategy: 'override',
  wrapper: 'header-category-link',
  trigger: 'trigger-wrapper',
};

const triggerUi = {
  strategy: 'override',
  base: 'activator',
};

const label = 'Капустяні';
</script>

<template>
  <DvDropdown :items="items" :ui="dropdownUi">
    <template #trigger>
      <UButton color="white" :label="label" :ui="triggerUi" />
    </template>

    <template #item="{ item }">
      <HeaderSubcategoryLink :item="item" />
    </template>
  </DvDropdown>
</template>

<style lang="scss">
.header-category-link {
  .trigger-wrapper .activator {
    background: $orange-400;
    border: 2px solid $orange-focus;
    outline: none;
  }
}
</style>

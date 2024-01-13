<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  items2: {
    type: Array,
    required: true,
  },
  mode: {
    type: String,
    default: 'hover',
  },
  placement: {
    type: String,
    default: 'bottom-start',
  },
  offset: {
    type: Number,
    default: 0,
  },
});

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
</script>

<template>
  <UDropdown :items="items" :mode="mode" :popper="{ placement, offsetDistance: offset }">
    <UButton color="white" :label="label" />

    <template #item="{ item }">
      {{ JSON.stringify(item) }}
    </template>
  </UDropdown>
</template>

<style scoped lang="scss"></style>

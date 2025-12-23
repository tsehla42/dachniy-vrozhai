<script setup>
defineProps({
  items: {
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
  ui: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <UDropdown :items="items" :mode="mode" :popper="{ placement, offsetDistance: offset }" :ui="ui">
    <template #default>
      <slot name="trigger" />
    </template>

    <template #item="{ item }">
      <slot name="item" :item="item" />
    </template>
  </UDropdown>
</template>

<style scoped lang="scss"></style>

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
  },
});
</script>

<template>
  <ClientOnly>
    <UDropdown :items="items" :mode="mode" :popper="{ placement, offsetDistance: offset }" :ui="ui">
      <slot name="trigger" />

      <template #item="{ item }">
        <slot name="item" :item="item" />
      </template>
    </UDropdown>
  </ClientOnly>
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
defineProps({
  ui: {
    type: Object,
    required: true,
  },
  label: {
    type: String,
    required: true,
    default: '',
  },
  isLink: {
    type: Boolean,
    default: true,
  },
  to: {
    type: String,
    required: true,
    default: '/',
  },
  color: {
    type: String,
    default: 'black',
  },
  activeClass: {
    type: String,
    default: 'active',
  },
  exactActiveClass: {
    type: String,
    default: 'exact-active',
  },
});
</script>

<template>
  <UButton
    v-if="isLink"
    :ui="ui"
    :label="label"
    :to="to"
    color="black"
    active-class="active"
    exact-active-class="exact-active"
  />
  <UButton v-else :ui="ui" :label="label" color="black" active-class="active" exact-active-class="exact-active" />
</template>

<style scoped lang="scss"></style>

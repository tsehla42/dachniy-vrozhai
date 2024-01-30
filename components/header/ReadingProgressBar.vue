<script setup lang="ts">
const { $scrollProperties: scrollProperties } = useNuxtApp();

const maxScrollValue = computed(() => scrollProperties?.scrollHeight || 1000);
const currentScrollPosition = computed(() => scrollProperties?.scrollY.value || 0);

const progressUi = {
  strategy: 'override',
  progress: {
    base: 'progress-bar block appearance-none border-none overflow-hidden',
    width: 'w-full [&::-webkit-progress-bar]:w-full',
    rounded: '',
    track: '[&::-webkit-progress-bar]:bg-green-800 [@supports(selector(&::-moz-progress-bar))]:bg-green-800',
    bar: '[&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:duration-200 [&::-webkit-progress-value]:ease-[cubic-bezier(0.25,0.1,0.25,1)]',
    color: 'text-green-500',
    background: '[&::-webkit-progress-value]:bg-green-600 [&::-moz-progress-bar]:bg-green-600',
    indeterminate: {
      base: 'indeterminate:relative',
      rounded: '',
    },
  },
};
</script>

<template>
  <ClientOnly>
    <UProgress :max="maxScrollValue" :value="currentScrollPosition" :ui="progressUi" />
  </ClientOnly>
</template>

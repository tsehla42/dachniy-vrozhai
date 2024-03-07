<script setup lang="ts">
import { CAROUSEL_TRANSLATIONS } from '~/constants/localizations/CarouselTranslations';

const props = defineProps({
  handler: {
    type: Function,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
});

const { direction } = props;
const arrowDirection = direction === 'next' ? 'right' : 'left';

const classes = computed(() => {
  return {
    [`carousel__${direction}`]: true,
    [arrowDirection]: true,
  };
});

const localization = CAROUSEL_TRANSLATIONS;
const ariaLabel = direction === 'next' ? localization.ariaNextSlide : localization.ariaPreviousSlide;
</script>

<template>
  <button @click="handler()" :class="classes" type="button" :aria-label="ariaLabel">
    <svg width="36" height="52" viewBox="0 0 36 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
        <path d="M6 6L30 26L6 46" stroke="black" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6 6L30 26L6 46" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    </svg>
  </button>
</template>

<script setup lang="ts">
const getPicturePath = (pictureName: string) => {
  return `images/${pictureName}.png`;
};

const slides = [
  {
    to: '/test',
    heading: 'Вирощування полуниці',
    text: 'Поради та інструкції',
    picture: 'polunytsia',
    meta: '1', // todo: investigate data attributes SEO
  },
  {
    to: '/test',
    heading: 'Вирощування 2',
    text: 'Поради 2',
    picture: 'template-1200x600',
    meta: '2',
  },
  {
    to: '/test',
    heading: 'Вирощування 3',
    text: 'Поради 3',
    picture: 'template-1200x600',
    meta: '3',
  },
  {
    to: '/test',
    heading: 'Вирощування 4',
    text: 'Поради 4',
    picture: 'template-1200x600',
    meta: '4',
  },
  {
    to: '/test',
    heading: 'Вирощування 5',
    text: 'Поради 5',
    picture: 'template-1200x600',
    meta: '5',
  },
  {
    to: '/test',
    heading: 'Вирощування 6',
    text: 'Поради 6',
    picture: 'template-1200x600',
    meta: '6',
  },
  {
    to: '/test',
    heading: 'Вирощування 7',
    text: 'Поради 7',
    picture: 'template-1200x600',
    meta: '7',
  },
  {
    to: '/test',
    heading: 'Вирощування 8',
    text: 'Поради 8',
    picture: 'template-1200x600',
    meta: '8',
  },
];
</script>

<template>
  <article class="carousel-container w-full mb-12 border-4 border-black rounded-[20px] overflow-hidden">
    <UCarousel 
      v-slot="{ item: slide }" 
      arrows 
      dots 
      loop 
      :items="slides" 
      class="carousel"
      :ui="{
        viewport: 'viewport overflow-hidden min-h-[300px]',
        item: 'item min-w-full shrink-0 grow-0 basis-full',
        prev: 'btn-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg inline-flex items-center justify-center',
        next: 'btn-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg inline-flex items-center justify-center',
        dots: 'dots-container absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10',
        dot: ' dot w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all cursor-pointer data-[state=active]:bg-white data-[state=active]:w-8'
      }"
    >
      <NuxtLink :to="slide.to" class="carousel__item relative block w-full h-full min-h-[300px] text-white text-xl">
        <NuxtImg 
          :src="getPicturePath(slide.picture)" 
          :placeholder="[100, 50]"
          loading="lazy"
        />
        <div class="bottom-text">
          <h3>{{ slide.heading }}</h3>
          <p>{{ slide.text }}</p>
        </div>
      </NuxtLink>
    </UCarousel>
  </article>
</template>

<style lang="scss">
.carousel__item {
  @include flex-center;
  background-color: $orange-150;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .bottom-text {
    position: absolute;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column;

    width: 100%;
    height: 120px;
    padding: 0 2em;

    background-color: rgba($black, 42%);

    h3 {
      font-family: $font-family-primary;
      font-size: 1.8em;
      -webkit-text-stroke: 2px $black;
    }

    p {
      font-family: $font-family-primary;
      font-size: 1.2em;
      -webkit-text-stroke: 1px $black;
      margin: 0;
    }
  }
}
</style>

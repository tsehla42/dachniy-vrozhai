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
  <article class="carousel-container">
    <UCarousel v-slot="{ item: slide }" arrows dots loop :items="slides" class="carousel">
      <NuxtLink :to="slide.to" class="carousel__item">
        <NuxtImg 
          :src="getPicturePath(slide.picture)" 
          :placeholder="[100, 50]"
          width="1200"
          height="600"
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
.carousel-container {
  width: 100%;
  max-width: 100%;
  
  .carousel {
    width: 100%;
    max-width: 100%;
    margin-bottom: 3rem;
    
    // Force viewport to take full width and constrain overflow
    :deep([data-slot="viewport"]) {
      width: 100%;
      max-width: 100%;
      min-height: 300px;
      overflow: hidden;
    }
    
    // Container holds all slides in a row
    :deep([data-slot="container"]) {
      width: 100%;
      height: 100%;
    }
    
    // Each item should take full viewport width
    :deep([data-slot="item"]) {
      width: 100%;
      height: 100%;
      flex: 0 0 100%;
      min-width: 100%;
    }
  }
}

.carousel__item {
  @include flex-center;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  min-height: 300px;

  background-color: $orange-150;
  color: $white;
  font-size: 20px;
  border: 4px solid $black;
  border-radius: 20px;
  overflow: hidden;

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

<script setup lang="ts">
</script>

<template>
  <div class="app-wrapper">
    <Header/>

    <main>
      <slot/>
    </main>

    <Footer/>
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;

  main {
    background: #FFF9F3;
  }
}
</style>

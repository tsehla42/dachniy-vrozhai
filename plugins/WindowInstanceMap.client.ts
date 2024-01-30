export default defineNuxtPlugin((nuxtApp) => {
  const scrollY = ref();
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  window.addEventListener('scroll', (e) => {
    // Debounce this
    window.requestAnimationFrame(() => {
      scrollY.value = window.scrollY;
    });
  });

  return {
    provide: {
      scrollProperties: {
        scrollY,
        scrollHeight,
      },
    },
  };
});

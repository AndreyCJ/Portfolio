<script lang="ts">
  import { defineComponent } from 'vue';
  import MLogo from '@/components/molecules/MLogo/MLogo.vue';
  import ALink from '@/components/atoms/ALink/ALink.vue';
  import AButton from '@/components/atoms/AButton/AButton.vue';

  export default defineComponent({
    name: 'OHeader',
    components: { MLogo, ALink, AButton },
    emits: {
      switchTheme: null,
    },
  });
</script>

<template>
  <header class="header adaptive-glass">
    <m-logo />
    <div class="navbar">
      <div class="nav-links text-sm">
        <a-link text="Home" :to="{ name: 'home' }" class="mx-2" alt="Home" />
        <a-link text="Projects" :to="{ name: 'projects' }" alt="Projects" />
      </div>
    </div>
    <a-button class="p-1.6 text-xs" @click="$emit('switchTheme')">
      <i-heroicons-outline-sun />
    </a-button>
  </header>
</template>

<style lang="postcss" scoped>
  .header {
    @apply w-full
      flex
      items-center
      justify-between
      px-4
      py-2.5
      mb-6;

    top: 0;
  }

  .adaptive-glass {
    @apply bg-background dark:bg-background-dark;

    position: fixed;
    z-index: 1;
    backdrop-filter: saturate(200%) blur(18px);

    --glass-lightness: 100%;

    @media (prefers-color-scheme: dark) {
      --glass-lightness: 0%;
    }
  }
</style>

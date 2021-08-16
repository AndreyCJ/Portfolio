<script lang="ts">
  import { defineComponent } from 'vue';
  import MLogo from '@/components/molecules/MLogo/MLogo.vue';
  import ALink from '@/components/atoms/ALink/ALink.vue';
  import AButton from '@/components/atoms/AButton/AButton.vue';

  export default defineComponent({
    name: 'OHeader',
    components: { MLogo, ALink, AButton },
    emits: {
      switchTheme: () => Boolean,
    },
    setup(props, { emit }) {
      function switchTheme(): void {
        emit('switchTheme');
      }

      return {
        switchTheme,
      };
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
    <a-button class="p-1.6 text-xs" @click="switchTheme">
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
    @apply bg-background bg-opacity-97 shadow-dark-900 shadow-sm dark:(bg-background-dark bg-opacity-97 shadow-light-900 shadow-sm);

    @supports (
      (-webkit-backdrop-filter: blur(18px)) or (backdrop-filter: blur(18px))
    ) {
      @apply bg-background bg-opacity-35 shadow-dark-900 shadow-sm dark:(bg-background-dark bg-opacity-35 shadow-light-900 shadow-sm);

      backdrop-filter: blur(18px);
    }

    position: fixed;
    z-index: 2;
  }
</style>

<script lang="ts">
  import { defineComponent } from 'vue';

  import OHeader from '@/components/organisms/OHeader/OHeader.vue';

  export default defineComponent({
    name: 'App',
    components: {
      OHeader,
    },
    data() {
      return {
        isDarkTheme: true,
      };
    },
    methods: {
      switchTheme(): void {
        this.isDarkTheme = !this.isDarkTheme;
      },
    },
  });
</script>

<template>
  <main class="main" :class="{ dark: isDarkTheme }">
    <div class="page-wrapper">
      <o-header @switchTheme="switchTheme" />
      <div class="container">
        <router-view />
      </div>
    </div>
  </main>
</template>

<style lang="postcss">
  .container {
    @apply container mx-auto;
  }
</style>

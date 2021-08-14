<script lang="ts">
  import { defineComponent } from 'vue';
  import DesignTokens from '@/styles/design-tokens.json';

  import OHeader from '@/components/organisms/OHeader/OHeader.vue';

  export default defineComponent({
    name: 'App',
    components: {
      OHeader,
    },
    provide: {
      designTokens: DesignTokens as typeof DesignTokens,
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
    <div
      class="
        page-wrapper
        transition-opacity transition-shadow transition-transform
        duration-100
      "
    >
      <o-header @switchTheme="switchTheme" />
      <router-view v-slot="{ Component }">
        <div class="container">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </div>
      </router-view>
    </div>
  </main>
</template>

<style lang="postcss">
  * {
    @apply scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300;
  }

  .container {
    @apply container !max-w-780px mx-auto;

    padding-top: 80px;
    height: 200vh;
  }

  .fade {
    &-enter-from {
      opacity: 0;
    }

    &-enter-to {
      opacity: 1;
    }

    &-leave-from {
      opacity: 1;
    }

    &-leave-to {
      opacity: 0;
    }

    &-enter-active {
      transition: opacity 0.5s ease;
    }
  }

  .from-left {
    &-enter-from {
      left: 100%;
      transform: translate(-100%, 0);
    }

    &-enter-to {
      left: 0;
      transform: translate(0, 0);
    }

    &-leave-from {
      left: 0;
      transform: translate(0, 0);
    }

    &-leave-to {
      left: 100%;
      transform: translate(-100%, 0);
    }

    &-enter-active {
      /* &-leave-active { */
      transition: all 0.3s ease;
    }
  }
</style>

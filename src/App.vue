<script lang="ts">
  import { defineComponent, ref, provide, onBeforeMount, reactive } from 'vue';

  import OHeader from '@/components/organisms/OHeader/OHeader.vue';
  import { DesignTokensKey } from './constants';
  import DesignTokensState from '@/styles/design-tokens.json';
  import { applyAllCssVars } from '@/composables/useDesignTokens';

  export default defineComponent({
    name: 'App',
    components: {
      OHeader,
    },
    setup() {
      const isDarkTheme = ref(true);
      const cssVars = reactive(DesignTokensState);

      provide(DesignTokensKey, cssVars);

      function switchTheme(): void {
        isDarkTheme.value = !isDarkTheme.value;
      }

      onBeforeMount(() => {
        applyAllCssVars(cssVars);
      });

      return {
        isDarkTheme,
        switchTheme,
      };
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
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </div>
      </router-view>
    </div>
  </main>
</template>

<style lang="postcss">
  .container {
    @apply container h-full !max-w-780px mx-auto;

    /* height: 10000px; */
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
      transition: all 2s ease;
    }
  }
</style>

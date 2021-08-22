<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import OHeader from '@/components/organisms/OHeader/OHeader.vue';

  export default defineComponent({
    name: 'App',
    components: {
      OHeader,
    },
    setup() {
      const isDarkTheme = ref(true);

      function switchTheme(): void {
        isDarkTheme.value = !isDarkTheme.value;
      }

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
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </main>
</template>

<style lang="postcss">
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

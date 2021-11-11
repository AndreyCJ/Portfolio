<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import OHeader from '@/components/organisms/OHeader/OHeader.vue';
  import OFooter from '@/components/organisms/OFooter/OFooter.vue';

  export default defineComponent({
    name: 'App',
    components: {
      OHeader,
      OFooter,
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
      <OHeader @switchTheme="switchTheme" />
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
      <OFooter />
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useI18n } from 'vue-i18n';

  import MLogo from '@/components/molecules/MLogo/MLogo.vue';
  import AButton from '@/components/atoms/AButton/AButton.vue';
  import ONavbar from '@/components/organisms/ONavbar/ONavbar.vue';

  export default defineComponent({
    name: 'OHeader',
    components: { MLogo, AButton, ONavbar },
    emits: {
      switchTheme: () => Boolean,
    },
    setup(props, { emit }) {
      const { availableLocales, locale } = useI18n();

      function switchTheme(): void {
        emit('switchTheme');
      }

      function switchLocale(): void {
        const locales = availableLocales;
        locale.value =
          locales[(locales.indexOf(locale.value) + 1) % locales.length];
      }

      return {
        locale,
        switchTheme,
        switchLocale,
      };
    },
  });
</script>

<template>
  <header class="header adaptive-glass">
    <m-logo />
    <ONavbar />
    <div class="right-side flex">
      <code class="mr-2 hover:cursor-pointer" @click="switchLocale">
        {{ locale }}
      </code>
      <a-button class="p-1.6 text-xs" @click="switchTheme">
        <i-heroicons-outline-sun />
      </a-button>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
  .header {
    @apply w-full
      flex
      items-center
      justify-between
      px-6
      py-4
      mb-6;

    top: 0;
  }

  .adaptive-glass {
    @apply bg-background bg-opacity-97 dark:(bg-background-dark bg-opacity-97);

    @supports (
      (-webkit-backdrop-filter: blur(18px)) or (backdrop-filter: blur(18px))
    ) {
      @apply bg-background bg-opacity-35 dark:(bg-background-dark bg-opacity-35);

      backdrop-filter: blur(18px);
    }

    position: fixed;
    z-index: 2;
  }
</style>

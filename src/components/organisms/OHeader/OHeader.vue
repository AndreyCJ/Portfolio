<script lang="ts">
  import { defineComponent, onMounted, onUnmounted, reactive, ref } from 'vue';
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
      const headerClass = ref('');

      function switchTheme(): void {
        emit('switchTheme');
      }

      function switchLocale(): void {
        const locales = availableLocales;
        locale.value =
          locales[(locales.indexOf(locale.value) + 1) % locales.length];
      }

      function handleScroll(): void {
        if (window.scrollY !== 0) {
          headerClass.value = '!py-2.2 shadow-sm';
        } else {
          headerClass.value = '';
        }
      }

      onMounted(() => {
        window.addEventListener('scroll', handleScroll);
      });

      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
      });

      return {
        locale,
        headerClass,
        switchTheme,
        switchLocale,
      };
    },
  });
</script>

<template>
  <header class="header adaptive-glass" :class="headerClass">
    <m-logo />
    <ONavbar />
    <div class="right-side flex">
      <div
        class="font-semibold mr-2 hover:cursor-pointer"
        @click="switchLocale"
      >
        {{ locale }}
      </div>
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
      top-0
			fixed
			transition-all
			ease-linear
			z-10;
  }

  .adaptive-glass {
    @apply bg-background bg-opacity-97 dark:(bg-background-dark bg-opacity-97);

    @supports (
      (-webkit-backdrop-filter: blur(18px)) or (backdrop-filter: blur(18px))
    ) {
      @apply bg-background bg-opacity-35 dark:(bg-background-dark bg-opacity-35);

      backdrop-filter: blur(18px);
    }
  }
</style>

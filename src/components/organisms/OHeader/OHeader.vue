<script lang="ts">
  import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
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
          headerClass.value = '!py-2.2 shadow-sm dark:shadow-light-50';
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
    <div class="right-side flex items-center">
      <a-button class="header__btn header__btn--lang" @click="switchLocale">
        {{ locale }}
      </a-button>
      <a-button class="header__btn header__btn--theme" @click="switchTheme">
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
      transition-shadow
  	ease-linear
  	z-10;

    transition: padding 0.1s linear;

    &__btn {
      @apply px-2 text-sm mr-1 bg-transparent text[var(--color-dark)] shadow-none hover:text[var(--color-white-warm)];
      @apply dark:(bg-transparent text[var(--color-white-warm)]);

      &:last-child {
        @apply mr-0;
      }

      &--theme {
        @apply py-1.4;
      }
    }
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

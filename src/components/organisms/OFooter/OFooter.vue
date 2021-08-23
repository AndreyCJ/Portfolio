<script lang="ts">
  import { defineComponent } from 'vue';
  import { myEmail } from '@/constants';
  import { useI18n } from 'vue-i18n';

  export default defineComponent({
    name: 'OFooter',
    setup() {
      const { t } = useI18n();
      const currentYear = new Date().getFullYear();
      return { t, myEmail, currentYear };
    },
  });
</script>

<template>
  <footer>
    <span> {{ t('my-full-name') }} &copy; {{ currentYear }} </span>
    <span> {{ myEmail }} </span>
  </footer>
</template>

<style lang="postcss" scoped>
  footer {
    @apply flex flex-wrap justify-between py-2 px-6 text-center text-xs opacity-40 font-extralight dark:(opacity-20);
  }
</style>

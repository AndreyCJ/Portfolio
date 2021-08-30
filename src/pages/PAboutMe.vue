<script lang="ts">
  import { defineComponent } from 'vue';
  import TAboutMe from '@/components/templates/TAboutMe.vue';
  import { useI18n } from 'vue-i18n';

  export default defineComponent({
    name: 'PAboutMe',
    components: {
      TAboutMe,
    },
    setup() {
      const { t } = useI18n();

      return { t };
    },
  });
</script>

<template>
  <TAboutMe :about-me-text="t('about-me')" :page-heading="t('button.about')" />
</template>

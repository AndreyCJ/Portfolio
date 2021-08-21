<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { useI18n } from 'vue-i18n';

  import ALink from '@/components/atoms/ALink/ALink.vue';

  export default defineComponent({
    name: 'ONavbar',
    components: {
      ALink,
    },
    setup() {
      const { t } = useI18n();
      const pages = [
        {
          text: computed(() => t('button.home')),
          to: {
            name: 'home',
          },
        },
        {
          text: computed(() => t('button.projects')),
          to: {
            name: 'projects',
          },
        },
        {
          text: computed(() => t('button.about')),
          to: {
            name: 'about',
          },
        },
      ];

      return {
        pages,
      };
    },
  });
</script>
<template>
  <div class="navbar">
    <div class="nav-links text-sm">
      <ALink
        v-for="page in pages"
        :key="page.to.name"
        :text="page.text.value"
        :to="page.to"
        :alt="page.text.value"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .nav-links {
    a {
      @apply mr-2 last: mr-0;
    }
  }
</style>

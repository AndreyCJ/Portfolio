<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { useI18n } from 'vue-i18n';

  import ALink from '@/components/atoms/ALink/ALink.vue';

  export default defineComponent({
    name: 'ONavbar',
    components: {
      ALink,
    },
    props: {
      vertical: {
        type: Boolean,
        default: () => false,
      },
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
    <div class="nav-links text-sm" :class="{ 'nav-links--vertical': vertical }">
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
      @apply mr-4 last:mr-0;
    }

    &--vertical {
      display: flex;
      flex-direction: column;
      font-size: 1.1rem;

      a {
        margin-right: 0;
        margin-bottom: 0.9em;
        text-align: center;
      }
    }
  }
</style>

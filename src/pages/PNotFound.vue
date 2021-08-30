<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { useRoute } from 'vue-router';
  import { useI18n } from 'vue-i18n';

  import TNotFound from '@/components/templates/TNotFound.vue';

  export default defineComponent({
    name: 'PNotFound',
    components: {
      TNotFound,
    },
    setup() {
      const { params } = useRoute();
      const { t } = useI18n();
      const pathMatch = params.pathMatch;

      const notFoundText = computed(() => t('not-found'));
      const searchParamText: string = Array.isArray(pathMatch)
        ? pathMatch.join('/')
        : pathMatch;

      return {
        notFoundText,
        searchParamText,
      };
    },
  });
</script>

<template>
  <t-not-found
    :not-found-text="notFoundText"
    :search-param-text="searchParamText"
  />
</template>

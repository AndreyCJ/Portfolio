<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { RouteLocation } from 'vue-router';

  export default defineComponent({
    name: 'ALink',
    props: {
      to: {
        type: Object as PropType<Partial<RouteLocation>>,
        required: true,
      },
      text: {
        type: String as PropType<string>,
        required: true,
      },
      alt: {
        type: String as PropType<string>,
        required: true,
      },
    },
  });
</script>

<template>
  <router-link
    class="a-link"
    :to="to"
    :alt="alt"
    active-class="a-link a-link--active"
  >
    {{ text }}
  </router-link>
</template>

<style lang="postcss" scoped>
  .a-link {
    @apply font-semibold hover:(opacity-60 border-dotted border-b-gray-600 border-b-[3px]);

    &--active {
      @apply border-solid border-b-[var(--color-primary)] border-b-[3px];
    }
  }
</style>
